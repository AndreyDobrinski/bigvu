import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoHolder({ playerRef, videoURL, playedSeconds, setPlayedSeconds, videoDuration, onHandleVideoEnded }) {

    // Styles for the video player
    const divStyle = {
        border: '1px solid rgba(123,141,177,.6)',
        borderRadius: '10px',
        background: 'black'
    }

    // For video player to start from the last saved duration 
    const handlePlayerReady = () => {
        playerRef.current.seekTo(playedSeconds)
    }


    const handleProgress = ({ playedSeconds }) => {
        const flooredSeconds = Math.floor(playedSeconds)
        setPlayedSeconds(flooredSeconds)
        const savedProgress = JSON.parse(localStorage.getItem('VIDEO_PROGRESS')) || {};
        savedProgress[videoURL] = {
            seconds: flooredSeconds,
            isFinished: false
        }
        localStorage.setItem('VIDEO_PROGRESS', JSON.stringify(savedProgress))

        // If its finished , set to "true" and update the local storage
        if (videoDuration === flooredSeconds) {
            savedProgress[videoURL] = {
                seconds: flooredSeconds,
                isFinished: true
            }
            localStorage.setItem('VIDEO_PROGRESS', JSON.stringify(savedProgress))
        }
    }


    return (
        <div className="video-holder">
            <ReactPlayer
                ref={playerRef}
                url={videoURL}
                controls={true}
                width="100%"
                height="510px"
                style={divStyle}
                onProgress={handleProgress}
                onReady={handlePlayerReady}
                onEnded={onHandleVideoEnded}
            />
        </div>
    )
}
