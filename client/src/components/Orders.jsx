import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { assets } from "../assets/assets/frontend_assets/assets.js"
import { api } from '../api/axiousInstance';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () =>{
    const response = await axios.get(`${api}/order/list`);
    if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
    }else{
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) =>{
    const response = await axios.post(`${api}/order/status`, {
      orderId,
      status: event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div className='p-6'>
      <h3 className='text-xl font-semibold mb-6'>Order Page</h3>
      <div className="space-y-6">
        {orders.map((order, index)=>(
          <div key={index} className="grid grid-cols-[0.5fr_2fr_1fr_1fr] gap-6 items-start border border-red-500 p-5 text-sm text-gray-600 md:grid-cols-[0.5fr_2fr_1fr] md:text-xs md:p-4">
            <img src={assets.parcel_icon} alt="" className='w-12 md:w-10' />
            <div>
              <p className="font-semibold">
                {order.items.map((item, i)=>{
                  return i === order.items.length-1 
                    ? `${item.name} x ${item.quantity}` 
                    : `${item.name} x ${item.quantity}, `;
                })}
              </p>
              <p className="font-semibold mt-7 mb-1">{order.address.firstName} {order.address.lastName}</p>
              <div className="mb-2">
                <p>{order.address.state},</p>
                <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select 
              onChange={(event)=> statusHandler(event, order._id)} 
              value={order.status}
              className='bg-red-100 border border-red-500 px-3 py-1 outline-none w-max md:px-2 md:py-1 text-sm md:text-xs'
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
