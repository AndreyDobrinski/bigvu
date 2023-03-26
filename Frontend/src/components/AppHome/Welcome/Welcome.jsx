import React from 'react'

import WelcomeBtns from './WelcomeBtns'

export default function Welcome() {
    return (
        <div className='welcome flex auto-center'>
            <div className='welcome-title'>Welcome to *fake* BIGVU! 🎉</div>
            <div className='welcome-desc'>What kind of project would you like to create?</div>
            <WelcomeBtns />
        </div>
    )
}




