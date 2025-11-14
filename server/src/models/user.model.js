
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
    }
})

const User = mongoose.model("User", userSchema)
export default User;
