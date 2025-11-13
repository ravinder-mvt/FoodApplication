import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { NavItems } from "../utills/Feature";
import { useState } from "react";
import { Link } from "react-router-dom"
import useLogin from "../ContectApi/UIcontext";
const Navbar = () => {
    const [Isactive, setIsActive] = useState("")
    const { showLoginPopUp, setShowLoginPopUp } = useLogin()

    return (
        <nav className="py-10 flex items-center justify-between">
            <div>
                <img src={assets.logo} alt="logo" size="8" />
            </div>

            <div className="sm:flex hidden items-center justify-center gap-10">
                {NavItems.map((item, index) => (
                    <ul className="" key={index}>
                        <a href={`#${item.name}`} >
                            <li className={` ${Isactive == item.name ? 'border-b-2 transition duration-300 border-red-500' : ""} text-sm font-normal text-black`} onClick={() => setIsActive(item.name)}  >{item.name}</li>

                        </a>
                    </ul>
                ))}
            </div>
            <div className="flex  items-center justify-center gap-10">
                <img src={assets.search_icon} alt="" />
                <img src={assets.basket_icon} alt="" />

                <button className="flex item-center text-md justify-center p-2 px-6 border-red-500 border hover:bg-red-50 rounded-3xl" onClick={() => setShowLoginPopUp((prev) => !prev)}>
                    sign In
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
