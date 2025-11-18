import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
import { useState } from 'react'
import { Decode } from "../utills/Decode.js"
import { getToken } from '../utills/token.js'
import { useAddToCartItem, useRemoveFromCart } from '../auth/useCart'
const FoodItem = ({ item, index }) => {
    const [isSelected, setIsSelected] = useState(false)
    const addMutation = useAddToCartItem();
    const removeMutation = useRemoveFromCart()



        const getInfo = async (item) => {
            const token = getToken();
            const filteredToken = Decode(token)
            const data = {
                userId: filteredToken.id,
                itemId: item._id
            }

            console.log("tojene-----", data)
            addMutation.mutate(data, {
                onSuccess: (data) => {
                    console.log("your data is here", data)
                },
                onError: (data) => {
                    console.log("error is heree====", data)
                }


            })
        };


    const removeItem = async (item) => {

        const token = getToken();
        const filteredToken = Decode(token)
        const data = {
            userId: filteredToken.id,
            itemId: item._id
        }

        console.log("tojene-----", data)
        removeMutation.mutate(data, {
            onSuccess: (data) => {
                console.log("your data is here", data)
            },
            onError: (data) => {
                console.log("error is heree====", data)
            }


        })
    }
    return (
        <div className='my-6  relative'>
            <div key={index} className='flex items-center justify-center flex-col shadow-2xl'>
                <div className='  flex-col sm:flex-row flex items-center h-full justify-center'>
                    <img src={item?.image} alt="" className='object-cover rounded-t-2xl' />
                </div>
                <div className='p-4 flex items-center justify-center gap-12'>
                    <h1 className='flex text-lg font-medium'>
                        {item.name}
                    </h1>
                    <img src={assets.rating_starts} alt="stars" className='h-4' />
                </div>

                <div className='p-4 flex flex-col gap-4'>

                    <p className='text-xs max-w-lg leading-relaxed'>
                        {item.description}
                    </p>
                    <h2 className='flex text-xl font-semibold text-red-600'>
                        ${item.price}
                    </h2>
                </div>
            </div>

            <div className='absolute right-2 bottom-[180px]'>
                <img src={assets.add_icon_white} alt="plus icon" className='h-10 relative hover:text-green-500 rounded-4xl' onClick={() => setIsSelected((prev) => !prev)} />

                {
                    isSelected && (<>
                        <div className='flex items-center px-2 bg-white rounded-4xl justify-between  absolute top-0 right-px w-[120px]'>
                            <div>
                                <img src={assets.remove_icon_red} alt="remove icons red" className='w-8 h-8 flex items-center justify-center rounded-full' onClick={(e) => {
                                    e.stopPropagation()
                                    removeItem(item)
                                }} />
                            </div>
                            <div>
                                <p className='bg-white text-black h-10 flex items-center justify-center'>
                                    10
                                </p>
                            </div>
                            <div>
                                <img src={assets.add_icon_green} alt="green add icons" className='' onClick={() => getInfo(item)} />
                            </div>

                        </div>
                    </>)
                }
            </div>
        </div>
    )
}

export default FoodItem