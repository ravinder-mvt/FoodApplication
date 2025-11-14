import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
const HeroSection = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div
                style={{
                    backgroundImage: `url(${assets.header_img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-full h-[400px] sm:h-[600px] sm:rounded-3xl relative"
            >
                <div className='flex p-4 justify-center sm:mt-30 items-start sm:p-20 sm:pl-30 h-full gap-8  flex-col'>
                    <h1 className='text-4xl font-semibold sm:text-7xl sm:font-semibold max-w-4xl  sm:leading-22 text-white'>
                        Order your
                        <br />
                        favourite food here
                    </h1>
                    <p className='flex items-center text-sm sm:text-md text-white max-w-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem, dicta itaque iure fugiat architecto.


                    </p>
                    <button className='sm:mb-10 flex items-center justify-center text-xs sm:text-xl bg-white px-6 py-2 sm:px-12 sm:py-4 rounded-4xl text-slate-500'>
                        view menu
                    </button>
                </div>
            </div>
        </div>

    )
}

export default HeroSection