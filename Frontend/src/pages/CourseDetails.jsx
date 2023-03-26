import { useEffect, useRef, useState } from "react"
import { courseService } from "../services/courseService"
import { useParams, useNavigate } from 'react-router-dom';

import ChapterList from "../components/CourseDetails/Chapters/ChapterList";
import BlueLeftArrow from '../assets/icons/blue-left-arrow.svg'

import Support from "../components/CourseDetails/Support/Support";
import ChapterTitle from "../components/CourseDetails/ChapterTitle/ChapterTitle";
import VideoHolder from "../components/CourseDetails/VideoHolder/VideoHolder";
import Loader from "../components/Loader";

export const CourseDetails = () => {

    const [course, setCourse] = useState(null)
    const { courseId } = useParams();
    const [videoURL, setVideoURL] = useState(null)
    const [videoDuration, setVideoDuration] = useState(0)
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const playerRef = useRef(null);
    const navigate = useNavigate();
    const [playLoader, setPlayLoader] = useState(true)
    const [finishedVideosCount, setFinishedVideosCount] = useState(0);


    useEffect(() => {
        const loadCourse = async () => {
            const course = await courseService.getById(courseId)
            setCourse(course)
            if (!videoURL) {
                setVideoURL(course.chapters[0].asset.resource.hlsPlaylistUrl)
                setVideoDuration(Math.floor(course.chapters[0].asset.resource.duration))
            }
            const savedProgress = JSON.parse(localStorage.getItem('VIDEO_PROGRESS')) || {};
            const progress = savedProgress[videoURL];

            if (progress) {
                setPlayedSeconds(progress.seconds);
            } else {
                setPlayedSeconds(0)
            }

            // Calculate the finished videos count based on the saved progress
            let count = 0;
            Object.keys(savedProgress).forEach((key) => {
                const videoData = savedProgress[key];
                if (videoData.isFinished) {
                    count++;
                }
            });
            setFinishedVideosCount(count);

        }
        loadCourse()

    }, [courseId, videoURL])


    const countIsFinished = () => {
        let count = 0;
        const videoProgressData = JSON.parse(localStorage.getItem('VIDEO_PROGRESS'));
        if (videoProgressData) {
            Object.keys(videoProgressData).forEach((key) => {
                const videoData = videoProgressData[key];
                if (videoData.isFinished) {
                    count++;
                }
            });
        }
        setFinishedVideosCount(count);
    }


    // Getting the new "URL" and "Duration" of the video
    const changeVideo = (url, duration) => {
        // Get the previous video's URL and isFinished status from local storage
        const savedProgress = JSON.parse(localStorage.getItem('VIDEO_PROGRESS')) || {}
        const prevVideoUrl = videoURL
        const prevVideoProgress = savedProgress[prevVideoUrl] || {}
        const prevVideoIsFinished = prevVideoProgress.isFinished || false

        // Update the previous video's progress with the isFinished status
        const newProgress = { ...prevVideoProgress, isFinished: prevVideoIsFinished || playedSeconds >= videoDuration }
        savedProgress[prevVideoUrl] = newProgress

        // Update local storage with the new progress and the URL of the current video
        localStorage.setItem('VIDEO_PROGRESS', JSON.stringify(savedProgress))
        setVideoURL(url)
        setVideoDuration(duration)
        setPlayedSeconds(savedProgress[url]?.seconds || 0)
    };


    const handleVideoEnded = () => {
        countIsFinished()
    }


    setTimeout(() => {
        setPlayLoader(false)
    }, 700);


    if (playLoader || !course) return <Loader />
    return (
        <div className="app-course">
            <div className="content container">

                <div className="go-back-holder" onClick={() => navigate(-1)}>
                    <img src={BlueLeftArrow} alt="" />
                </div>

                <div className="box flex">

                    <VideoHolder playerRef={playerRef} videoURL={videoURL} playedSeconds={playedSeconds} setPlayedSeconds={setPlayedSeconds} videoDuration={videoDuration}
                        onHandleVideoEnded={handleVideoEnded} />

                    <div className="playlist-holder">
                        <ChapterTitle course={course} finishedVideosCount={finishedVideosCount} />
                        <ChapterList course={course} videoURL={videoURL} changeVideo={changeVideo} />
                        <Support />
                    </div>

                </div>

            </div>
        </div>
    )


}


