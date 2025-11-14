import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Contact = () => {
    return (
        <div className='flex flex-col w-full items-center justify-center p-4' id='About'>

            <h1 className='flex text-2xl sm:text-6xl items-center font-medium font-serif  justify-center  sm:gap-4 flex-col'>
                <span>
                    For Better Experience
                </span>
                <span>
                    Tomato App
                </span>
            </h1>
        
        <div className='flex items-center my-14 w-full  justify-center gap-6 sm:gap-10 sm:p-10'>
            <img src={assets.app_store} alt="app store"  className='h-10 sm:h-full'/>
            <img src={assets.play_store} alt="play store" className='h-10 sm:h-full'/>
        </div>
        
        </div>
    )
}

export default Contact