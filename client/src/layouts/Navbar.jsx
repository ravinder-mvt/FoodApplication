import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { NavItems } from "../utills/Feature";
import { useState } from "react";
import { Link } from "react-router-dom"
import useLogin from "../ContectApi/UIcontext";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const [Isactive, setIsActive] = useState("")
    const [IsMenuOpen, setIsMenuOpen] = useState(false)
    const { showLoginPopUp, setShowLoginPopUp } = useLogin()

    console.log('set ismenu oopn===========', IsMenuOpen)

    return (
        <nav className="py-10 flex items-center justify-between">
            <div>
                <img src={assets.logo} alt="logo" size="8" />
            </div>

            <div className="sm:flex hidden items-center justify-center gap-4 lg:gap-10">
                {NavItems.map((item, index) => (
                    <ul className="" key={index}>
                        <a href={`#${item.name}`} >
                            <li className={` ${Isactive == item.name ? 'border-b-2 transition duration-300 border-red-500' : ""} text-sm font-normal text-black`} onClick={() => setIsActive(item.name)}  >{item.name}</li>

                        </a>
                    </ul>
                ))}
            </div>
            <div className="flex  items-center justify-center gap-4 lg:gap-10">
                <img src={assets.search_icon} alt="" />
                <img src={assets.basket_icon} alt="" />

                <button className="md:flex hidden item-center text-md justify-center p-2 px-6 border-red-500 border hover:bg-red-50 rounded-3xl" onClick={() => setShowLoginPopUp((prev) => !prev)}>
                    sign In
                </button>

                <GiHamburgerMenu size={26} onClick={() => setIsMenuOpen(prev => !prev)} className="md:hidden flex" />
            </div>
            {IsMenuOpen && (
                <div
                    className="
      md:hidden absolute top-0 left-0 w-full bg-white z-50 
      flex flex-col gap-4 p-6 shadow-lg rounded-b-2xl
      transition-all duration-300 ease-out
      animate-slideDown"
                >

                    <div className="flex justify-end text-md font-semibold  ">
                        <button className="flex items-center justify-center h-10 w-10 bg-slate-300" onClick={() => setIsMenuOpen(false)}>
                            X
                        </button>
                    </div>
                    {NavItems.map((item, index) => (
                        <button
                            key={index}
                            className={`text-base ${Isactive === item.name ? "text-red-500" : "text-black"
                                }`}
                            onClick={() => {
                                setIsActive(item.name);
                                setIsMenuOpen(false);
                            }}
                        >
                            {item.name}
                        </button>
                    ))}

                    <button
                        className="text-md p-1 px border-red-500 border hover:bg-red-50 rounded-3xl"
                        onClick={() => {
                            setShowLoginPopUp(true);
                            setIsMenuOpen(false);
                        }}
                    >
                        Sign In
                    </button>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
