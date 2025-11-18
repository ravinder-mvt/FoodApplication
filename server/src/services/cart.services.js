import User from "../models/user.model.js";

//add to cart sedve
export const addItem = async (data) => {
        const { itemId, userId } = data.data
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");
  
  const cartData = user.cartData || {};

  if (!cartData[itemId]) {
      cartData[itemId] = { quantity: 1, _id: itemId };
  } else {
      cartData[itemId].quantity += 1;
  }

  await User.findByIdAndUpdate(userId, { cartData });

  return cartData;
};


//remove from cart

export const removeItem = async ({ itemId, userId }) => {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    const cartData = user.cartData || {};


    if (!cartData[itemId]) {
        return cartData;
    }

    // Decrease quantity
    cartData[itemId].quantity -= 1;

    if (cartData[itemId].quantity <= 0) {
        delete cartData[itemId];
    }

    // Save updated cart back to DB
    await User.findByIdAndUpdate(userId, { cartData });

    return cartData;
};


//here is the get car d
export const getCart = async (data) => {
    const {  userId } = data

    let userData = await User.findById(userId)
    const cartData = userData.cartData
    return cartData

}