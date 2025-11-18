
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true, trim: true,
        minlength: 3
    },
    email: {
        required: true,
        type: String,
        unique: true

    }, password: {
        type: String,
        unique: true,
        minlength: 6,
        required: true
    },
    cartData:{}
    // }, cartData: [
    //     {
    //         productId: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: "Product",
    //             required: true
    //         },
    //         quantity: {
    //             type: Number,
    //             required: true,
    //             default: 1,
    //             min: 1
    //         },priceAtTime:{
    //             type:Number
    //         }
    //     }
    // ]
})

const User = mongoose.model("User", userSchema)
export default User;
