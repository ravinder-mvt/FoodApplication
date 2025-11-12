import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { NavItems } from "../utills/Feature";
const Navbar = () => {
  return (
    <nav className="py-10 flex items-center justify-between">
      <div>
        <img src={assets.logo} alt="logo" size="10" />
      </div>

      <div className="flex items-center justify-center gap-6">
        {NavItems.map((item, index) => (
          <ul className="" key={index}>
            <li className="text-md font-medium text-black">{item.name}</li>
          </ul>
        ))}
      </div>
      <div className="flex items-center justify-center gap-10">
        <img src={assets.search_icon} alt="" />
        <img src={assets.basket_icon} alt="" />
        <button className="flex item-center justify-center p-2 px-6 border-2 rounded-2xl">
          sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
