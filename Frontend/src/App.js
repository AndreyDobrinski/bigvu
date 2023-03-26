
import { Route, Routes } from 'react-router-dom'
import React from 'react'

import '../src/assets/styles/styles.scss'
import { AppHome } from './pages/AppHome'
import { CourseDetails } from './pages/CourseDetails'
import { AppHeader } from './components/AppHeader'


export const App = () => {

  return (
    <main className="app-main">
      <AppHeader />
      <Routes>
        <Route path='/' element={<AppHome />} />
        <Route path='/course/:courseId' element={<CourseDetails />} />
      </Routes>

    </main>
  )

}