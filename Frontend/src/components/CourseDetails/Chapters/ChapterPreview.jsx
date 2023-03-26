import React from 'react'

import PlaySideIcon from '../../../assets/icons/play-side-icon.svg'
import LessonPauseIcon from '../../../assets/icons/lesson-pause-icon.svg'
import ThinGreenCheckmark from '../../../assets/icons/thin-green-checkmark.svg'

export default function ChapterPreview({ chapter, idx, videoURL }) {
    const progress = JSON.parse(localStorage.getItem('VIDEO_PROGRESS')) || {};
    const isFinished = progress[chapter.asset.resource.hlsPlaylistUrl]?.isFinished || false;


    // From 256 to 5:31 (example)
    const formattedDuration = (duration) => {
        let minutes = Math.floor(duration / 60);
        let seconds = Math.round(duration % 60);

        // Fix for it to show "1:00" instead of "0:60"
        if (seconds === 60) {
            minutes += 1;
            seconds = 0;
        }

        const res = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        return res
    }

    return (
        <div className='chapter-preview flex justify-between'>
            <div className="flex title-box">
                <div className="icon-holder flex auto-center">
                    {isFinished ? (
                        <img src={ThinGreenCheckmark} alt="" />
                    ) : (
                        <img src={videoURL === chapter.asset.resource.hlsPlaylistUrl ? LessonPauseIcon : PlaySideIcon} alt="" />
                    )}
                </div>
                <div style={{}} className={`next-chapter flex auto-center ${isFinished ? 'bold' : ''}`}> {idx + 1 + '.'} {chapter.title}</div>
            </div>

            <div className="flex auto-center duration">{formattedDuration(chapter.asset.resource.duration)}</div>
        </div>
    )
}



