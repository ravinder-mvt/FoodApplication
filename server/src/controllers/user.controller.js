import { registerService,loginUser } from "../services/user.services.js";
import ApiResponse from "../utills/ApiResponse.js";

const register = async (req, res, next) => {
    try {
        const user = await registerService(req.body);

        return res
            .status(201)
            .json(new ApiResponse(201, "User registered successfully!", user));

    } catch (error) {
        next(error)
    }
};





const login = async (req, res, next) => {

    try {
        const user = await loginUser(req.body);
        return res.status(201).json(new ApiResponse(201, "user logged in successfully!", user))

    } catch (error) {
        next(error)
    }
}
export { register,login }