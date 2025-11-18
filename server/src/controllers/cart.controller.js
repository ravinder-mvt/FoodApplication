import { addItem, removeItem, getCart } from "../services/cart.services.js"
import ApiResponse from "../utills/ApiResponse.js"


//hertee we will do add to cart fucnrion

const addToCart = async (req, res, next) => {
   
    try {
        const cart = await addItem(req.body)
        return res.json(new ApiResponse(201, "item added to cart successfully", cart))
    } catch (error) {
        next(error)
    }

}
//here is the 

const removeFromCart = async (req, res, next) => {

    console.log("here is the req.body", req.body)

    try {
        const cart = await removeItem(req.body)
        return res.json(new ApiResponse(201, "item remove fron cart", cart))

    } catch (error) {
        next(error)
    }
}


//get cart

const getCartInfo = async (req, res, next) => {


    try {
        const cartInfo = await getCart(req.params)
        return res.json(new ApiResponse(201, "here is your cart!", cartInfo))
    } catch (error) {
        next(error)
    }
}
export { addToCart, removeFromCart, getCartInfo }