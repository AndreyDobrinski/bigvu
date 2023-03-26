import React from 'react'
import CatPic from '../../../assets/img/myCat.jpg'

export default function Support() {
    return (
        <div>
            <div className="support">Need help? Come pet my cat! that will solve everything!</div>
            <div className="support-animal flex justify-between">
                <div className="details flex">
                    <div className="cat-face-holder flex auto-center">
                        <img src={CatPic} alt="" />
                    </div>
                    <div className="cat-details">
                        <div className="cat-name">Margo Dobrinski</div>
                        <div className="cat-title">CEO of lasagna </div>
                    </div>
                </div>
                <div className="flex auto-center">
                    <div className="btn flex auto-center">Schedule a call</div>
                </div>

            </div>
        </div>
    )
}

