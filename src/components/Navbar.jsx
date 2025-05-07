import React from "react";
import { GiPerpendicularRings } from "react-icons/gi";
import Toni from "../assets/toni.png";
const Navbar = () => {
  return (
    <div className=" py-4 px-10 fade-in flex justify-between items-center">
      <div className="flex">
        <p className="text-xl text-[#F5EEDC] font-bold">
          <span className="font-extrabold text-2xl">N</span>ote
        </p>
        <GiPerpendicularRings className="text-blue-300 w-8 h-8 " />
      </div>

      <div className="flex items-center gap-3">
        
        
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" className="cursor-pointer outline-none m-1 flex justify-center items-center gap-3">
        <img
          className="rounded-full w-8 h-8 shadow-2xl"
          src={Toni}
          alt="Profile"
        />
        <p className="text-[#F5EEDC] font-semibold">User</p>
        </div>
        <ul
          tabindex="0"
          className="dropdown-content menu bg-[#F5EEDC] rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
