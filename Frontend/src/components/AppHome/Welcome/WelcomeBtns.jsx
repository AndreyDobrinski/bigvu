import React, { useEffect, useState } from 'react'

import { welcomeService } from '../../../services/welcomeService'

export default function WelcomeBtns() {

    const [welcomeImages, setWelcomeImages] = useState([])

    useEffect(() => {

        const loadWelcomeImages = async () => {
            const welcomeImages = await welcomeService.query()
            setWelcomeImages(welcomeImages)
        }
        loadWelcomeImages()

    }, [])
    return (
        <div className='welcome-buttons flex justify-between'>
            {welcomeImages.map(welcomeImage =>
                <div className='welcome-btn flex auto-center' key={welcomeImage.id}>
                    <div className='icon-holder flex auto-center'>
                        <img src={welcomeImage.img} alt="" />
                    </div>
                    <div className='icon-desc text-center'>{welcomeImage.desc}</div>
                </div>
            )}
        </div>
    )
}
