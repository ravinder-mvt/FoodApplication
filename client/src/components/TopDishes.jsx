import React from 'react'
import { food_list } from '../assets/assets/frontend_assets/assets'
import FoodItem from './FoodItem'


const TopDishes = ({ activeMenu,setActiveMenu }) => {




    const selectedCategory = food_list.filter(
        (item) => item.category === activeMenu
    )

    const filteredItems =
        selectedCategory.length > 0 ? selectedCategory : food_list

    return (
        <div className=" px-2 py-4 sm:px-8 sm:py-10">
            <div className='flex items-center justify-between w-full'>
                <h1 className="text-lg flex items-center justify-center sm:text-3xl font-bold mb-8 text-gray-800">
                    Top Dishes Near You
                </h1>
                <p className='flex items-center text-sm justify-center mb-8 hover:border-b-green-500 hover:border-b-2' onClick={()=>setActiveMenu("")}>
                    show all
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
                {filteredItems.map((item, index) => (
                    <FoodItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    )
}

export default TopDishes
