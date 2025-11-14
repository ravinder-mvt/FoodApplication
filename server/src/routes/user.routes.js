import express from "express"
import {register} from  "../controllers/user.controller.js"
import { login } from "../controllers/user.controller.js";
const router=express.Router();


//register route
router.post("/auth/register",register)
router.post("/auth/login",login)

export default router;