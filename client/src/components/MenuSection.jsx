import React from 'react'
import { menu_list } from '../assets/assets/frontend_assets/assets'
import { useState } from 'react'
import TopDishes from './TopDishes'
import { responsive } from '../utills/Responsive'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const MenuSection = () => {
    const [activeMenu, setActiveMenu] = useState('')


    return (
        <div className='my-10 flex flex-col gap-4 sm:gap-8' id='Menu'>
            <h1 className='text-3xl font-semibold text-slate-800'>
                Explore Our Menu
            </h1>
            <p className='text-sm sm:text-md font-normal sm:font-medium text-slate-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, exercitationem excepturi temporibus obcaecati voluptas vitae?
            </p>

            <div className='py-4 w-full'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-20-px"
                >
                    {
                        menu_list.map((item, index) => {
                            return (

                                <div key={index} className='flex flex-col items-center gap-6' onClick={() => setActiveMenu(item.menu_name)}>


                                    <img src={item.menu_image} alt="menu" className={`${activeMenu == item.menu_name ? "border-red-500 border-4" : ""}  rounded-full`} />
                                    <h1 className='text-xl text-slate-600 font-serif mb-20'>
                                        {
                                            item.menu_name
                                        }
                                    </h1>
                                </div>


                            )
                        })
                    }
                </Carousel>
            </div>

            <div className='flex h-0.5 w-full bg-slate-200'>

            </div>

            <div>
                <TopDishes activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>

        </div>
    )
}

export default MenuSection