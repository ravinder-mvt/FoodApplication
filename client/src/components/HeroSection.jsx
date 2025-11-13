import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
const HeroSection = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div
                style={{
                    backgroundImage: `url(${assets.header_img})`,
                }}
                className='sm:w-full sm:h-full rounded-3xl'
            >
                <div className='flex  justify-center mt-30 items-start p-20 pl-30 h-full gap-8 flex-col'>
                    <h1 className='text-7xl font-semibold max-w-4xl  leading-22 text-white'>
                        Order your
                        <br/>
                         favourite food here
                    </h1>
                    <p className='flex items-center text-white max-w-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem, dicta itaque iure fugiat architecto.


                    </p>
                    <button className='flex items-center justify-center text-xl bg-white px-12 py-4 rounded-4xl text-slate-500'>
                        view menu
                    </button>
                </div>
            </div>
        </div>

    )
}

export default HeroSection