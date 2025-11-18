import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';
import ApiError from '../utills/ApiError.js';

// Login user
const loginUser = async (data) => {
    const { email, password } = data

 
    const user = await User.findOne({ email });
    
    if (!user) {
        throw new ApiError(409, "User not registered");
    }


    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new ApiError(409, "Invalid User Credentials");
    }

    const token = createToken(user);

    return token

}

// JWT token creation
const createToken = (user) => {
    return jwt.sign({
        id: user._id,
        userName: user.userName,
        email: user.email
    }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

// Register service
const registerService = async (data) => {
    const { userName, email, password } = data;

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ApiError(409, "User already registered");
    }

    // Validate email
    if (!validator.isEmail(email)) {
        throw new ApiError(400, "Please enter a valid email");
    }

    // Validate password
    if (!password || password.length < 8) {
        throw new ApiError(400, "Password must be at least 8 characters");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create(data);
    return newUser;
};

export { loginUser, registerService };
