import React from "react";
import { GiPerpendicularRings } from "react-icons/gi";
import Toni from "../assets/toni.png";
import { Input } from '../components/ui/input';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"
import { RiSettingsLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className=" py-4 px-10 fade-in flex justify-between items-center">
      <Link to="/" className="flex">
        <p className="text-xl text-[#F5EEDC] font-bold">
          <span className="font-extrabold text-2xl">N</span>ote
        </p>
        <GiPerpendicularRings className="text-blue-300 w-8 h-8 " />
      </Link>

      <div className="flex items-center gap-3">
        <Input placeholder="Search..." className="w-80 bg-[#F5EEDC] h-8"/>
        <FaSearch className="text-[#F5EEDC]"/>
        
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
            <Link to="/" className="bg-red-300">Logout</Link>
          </li>

          <li>
            <div>
            <RiSettingsLine className="w-5 h-5 text-black"/>
            <p>Settings</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
