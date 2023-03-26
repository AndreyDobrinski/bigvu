import React from 'react'
import CoursePreview from './CoursePreview'

export default function CourseList({ courses, colors }) {

    const combinedArr = courses.map((course, index) => {
        return { ...course, ...colors[index] };
    });

    return (
        <div>
            <div className='course-list'>
                {combinedArr.map(course =>
                    <div key={course.id} className="course-preview">
                        <CoursePreview course={course} />
                    </div>
                )}
            </div>


        </div>
    )
}





