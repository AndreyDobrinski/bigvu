import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCourses } from '../store/actions/courseActions';

import BlueCourseDecoration from '../assets/icons/blue-course-decoration.svg'
import GreenCourseDecoration from '../assets/icons/green-course-decoration.svg'
import OrangeCourseDecoration from '../assets/icons/orange-course-decoration.svg'

import SidebarNav from '../components/AppHome/SidebarNav/SidebarNav';
import Welcome from '../components/AppHome/Welcome/Welcome';
import CourseList from '../components/AppHome/Courses/CourseList';
import Loader from '../components/Loader';



export const AppHome = () => {

  const dispatch = useDispatch()
  const { courses } = useSelector(state => state.courseModule)
  const [colors, setColors] = useState([])
  const [playLoader, setPlayLoader] = useState(true)



  useEffect(() => {

    dispatch(loadCourses())

    // Adding colors for each course
    const loadColors = async () => {
      const colors = [
        {
          color: 'linear-gradient(270deg, rgb(40, 179, 247) 0.65%, rgb(80, 106, 255) 99.35%)',
          iconColor: BlueCourseDecoration
        },
        {
          color: 'linear-gradient(90deg, rgb(0, 234, 59) 0%, rgb(0, 208, 150) 100%)',
          iconColor: GreenCourseDecoration

        },
        {
          color: 'linear-gradient(270deg, rgb(247, 159, 40) 0.65%, rgb(255, 83, 80) 99.35%)',
          iconColor: OrangeCourseDecoration

        }
      ]
      setColors(colors)
    }
    loadColors()
  }, [dispatch])


  setTimeout(() => {
    setPlayLoader(false)
  }, 700);


  if (playLoader) return <Loader/>
  else return (
    <div className="app-home flex">

      <SidebarNav />

      <div className='app-home-content'>
        <div className="content">

          <Welcome />

          <h1 className='content-header'>BIGVU 101  Crash Course</h1>
          
          <p className='content-desc'>Zero editing experience to pro — your journey starts here.
            Watch step-by-step video lessons how to make videos with impact.</p>

          <CourseList courses={courses} colors={colors} />

        </div>
      </div>

    </div>
  )

}









