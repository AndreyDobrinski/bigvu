import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import { courseService } from '../../../services/courseService'

import VideoIcon from '../../../assets/icons/video-icon-white.svg'
import RightArrowWhite from '../../../assets/icons/right-arrow-white.svg'

export default function CoursePreview({ course }) {

    const [courseDB, setCourseDB] = useState(null)

    useEffect(() => {
        const loadCourseDB = async () => {
            const courseId = course.id
            const courseFromDB = await courseService.getById(courseId)
            setCourseDB(courseFromDB)
        }
        loadCourseDB()
    }, [course])

    if (!courseDB) return <div>Loading</div>
    return (
        <div>
            <div className='headline' style={{ 'background': `${course.color}` }}>{course.headline}</div>
            <Link to={`/course/${course.id}`}>


                <div className="box">

                    <div className='course-decoration'>
                        <img src={course.iconColor} alt="" />
                    </div>

                    <div className='total-videos flex auto-center'>
                        <div className='icon flex auto-center'>
                            <img src={VideoIcon} alt="" />
                        </div>
                        <p>{courseDB.chapters.length} videos</p>
                    </div>

                    <p className='desc'>{course.description}</p>

                    <div>
                        <div className='summary-box '>
                            {course.summary.map(summary =>
                                <div key={summary} className="summary-holder ">
                                    <p className='middle-dot' style={{ 'background': `${course.color}` }}></p>
                                    <p className='summary flex auto-center'>{summary}</p>
                                </div>
                            )}

                        </div>

                        <div className='open-btn'>
                            <div className='icon-next'>
                                <img src={RightArrowWhite} alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </Link>

        </div>
    )
}


























