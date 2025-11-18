import express from "express";
import { addToCart,removeFromCart,getCartInfo } from "../controllers/cart.controller.js";

const router=express.Router();

router.post("/add-to-cart",addToCart)
router.post("/remove-from-cart",removeFromCart)
router.get("/get-cart/:userId",getCartInfo)
export default router

