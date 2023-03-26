import React from 'react'

import ChapterPreview from './ChapterPreview'

export default function ChapterList({ course, videoURL, changeVideo}) {
    return (
        <div className='chapter-list'>
            {course.chapters.map((chapter, idx) =>
                <div key={chapter.id} className={` ${videoURL === chapter.asset.resource.hlsPlaylistUrl ? 'selected' : ''}`}
                    onClick={() => changeVideo(chapter.asset.resource.hlsPlaylistUrl, Math.floor(chapter.asset.resource.duration))}>
                    <ChapterPreview chapter={chapter} idx={idx} videoURL={videoURL}  />
                </div>
            )}
        </div>
    )
}

