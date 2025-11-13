import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center p-10' id='About'>

            <h1 className='flex text-6xl items-center font-medium font-serif  justify-center gap-4 flex-col'>
                <span>
                    For Better Experience
                </span>
                <span>
                    Tomato App
                </span>
            </h1>
        
        <div className='flex items-center gap-10 p-10'>
            <img src={assets.app_store} alt="app store" />
            <img src={assets.play_store} alt="play store" />
        </div>
        
        </div>
    )
}

export default Contact