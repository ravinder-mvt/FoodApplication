import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { food_list } from '../assets/assets/frontend_assets/assets';
import { getToken } from '../utills/token';
import { Decode } from '../utills/Decode';
import { useGetCart } from '../auth/useCart';

const Cart = () => {
  const cartMutation = useGetCart();
  const navigate = useNavigate();

  const getCartInfo = async () => {
    const token = getToken();
    const userInfo = Decode(token);
    const userId = userInfo.id;

    cartMutation.mutate(userId);
  };

  useEffect(() => {
    getCartInfo();
  }, []);




if (cartMutation.isLoading) {
  return <p>Loading cart...</p>;
}

const cartData = Object.values(cartMutation.data?.data || {}).filter(item => item !== null);


  const mergedCart = cartData
    .map(cartItem => {
      const food = food_list.find(f => f._id === cartItem._id);
      if (!food) return null;
      return {
        ...food,
        quantity: cartItem.quantity,
        total: cartItem.quantity * food.price
      };
    })
    .filter(item => item !== null);

  const subtotal = mergedCart.reduce((sum, item) => sum + item.total, 0);
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const finalTotal = subtotal + deliveryFee;

  return (
    <div className="w-full px-6 py-10 bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Your Cart</h1>

      {/* ---- CART ITEMS TABLE ---- */}
      <div className="bg-white shadow-md rounded-xl p-6">
        
        {/* HEADER */}
        <div className="grid grid-cols-[100px_1fr_100px_80px_120px_60px] font-semibold text-gray-700 pb-3 border-b">
          <p>Item</p>
          <p className="pl-2">Title</p>
          <p className="text-center">Price</p>
          <p className="text-center">Qty</p>
          <p className="text-center">Total</p>
          <p className="text-center">X</p>
        </div>

        {/* ITEMS */}
        {mergedCart.map(item => (
          <div 
            key={item._id} 
            className="grid grid-cols-[100px_1fr_100px_80px_120px_60px] items-center py-4 border-b last:border-none"
          >
            <img 
              src={item.image} 
              alt="" 
              className="w-20 h-20 rounded-lg object-cover"
            />

            <p className="text-gray-900 pl-2">{item.name}</p>

            <p className="text-center text-gray-700">${item.price}</p>

            <p className="text-center font-semibold">{item.quantity}</p>

            <p className="text-center font-semibold">${item.total}</p>

            <p className="text-red-500 text-center text-xl cursor-pointer hover:scale-110 transition">
              x
            </p>
          </div>
        ))}

      </div>


      <div className="flex justify-between flex-wrap gap-10 mt-10">

        <div className="w-[350px] bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>

          <div className="space-y-3">

            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>

            <hr />

            <div className="flex justify-between text-gray-700">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>${finalTotal}</p>
            </div>

          </div>

          <button
            onClick={() => navigate('/order')}
            className="w-full mt-5 bg-black text-white py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

    
        <div className="flex-1 bg-white shadow-md rounded-xl p-6 border">
          <p className="font-medium text-gray-700 mb-3">
            If you have a promo code, enter it below
          </p>

          <div className="flex gap-3">
            <input 
              type="text"
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-black"
              placeholder="Promo Code"
            />
            <button className="bg-black text-white px-5 rounded-lg hover:bg-gray-800 transition">
              Apply
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Cart;
