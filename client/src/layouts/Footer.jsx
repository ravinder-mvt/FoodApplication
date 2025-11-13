import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
import { NavItems } from '../utills/Feature'
const Footer = () => {
  return (
    <div className='py-10 bg-[#323232] flex items-center justify-center' id='Contact'>

      <div className='w-[80%] flex items-start justify-between'>

        <div className='flex flex-col gap-6 items-start justify-center'>
          {/* e1 */}
          <img src={assets.logo} alt="" />

          <p className='max-w-xl text-md text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum in, beatae dolorem non optio cupiditate, quam sunt dicta dolores minima exercitationem ducimus totam aut asperiores inventore harum laudantium. Distinctio, libero.
          </p>
          <div className='flex items-center  gap-6'>
            {/* icons div */}

            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkden" />
          </div>
        </div>

        <div className='flex flex-col items-start justify-start'>
          {/* 2 */}

          <h1 className='text-3xl font-semibold text-white font-serif'>
            company
          </h1>

          <div className='mt-4 flex-col flex gap-2'>
            {
              NavItems.map((item, index) => (
                <>
                  <div className='flex font-medium items-center text-white text-sm lowercase gap-10'>
                    <h1>
                      {item.name}
                    </h1>
                  </div>
                </>
              ))
            }
          </div>


        </div>
        <div className='flex flex-col'>
          <h1 className='text-white text-2xl font-serif font-semibold'>
            GET IN TOUCH

          </h1>
          <div className='flex items-start text-white mt-4 justify-center gap-1 flex-col'>
            <h3>
              +94 765489545
            </h3>

            <h2>
              dulanjalisenarathna93@gmail.com
            </h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer