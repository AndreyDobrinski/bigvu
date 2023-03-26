import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div style={{ 'height': '93%' }} className="loader flex justify-center align-center"><Oval type="TailSpin" color="black" height={100} width={100} /></div>
    )
}
