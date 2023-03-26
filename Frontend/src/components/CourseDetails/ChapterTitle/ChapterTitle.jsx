import React from 'react'
import CourseBadgeIcon from '../../../assets/icons/course-badge-icon.svg'

export default function ChapterTitle({ course, finishedVideosCount }) {
    return (
        <div className="title-holder">
            <div className="title">{course.headline}</div>
            <div className="progress-holder flex auto-center">
                <div className="progress-icon flex">
                    <img src={CourseBadgeIcon} alt="" />
                </div>
                <div className="progress">{finishedVideosCount} / {course.chapters.length}</div>
            </div>
        </div>
    )
}
