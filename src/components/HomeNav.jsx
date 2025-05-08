import React from "react";
import { GiPerpendicularRings } from "react-icons/gi";
import Toni from "../assets/toni.png";
import { Input } from '../components/ui/input';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"


const HomeNav = () => {
  return (
    <div className=" py-4 px-10 fade-in flex justify-between items-center">
      <Link to="/" className="flex">
        <p className="text-xl text-[#F5EEDC] font-bold">
          <span className="font-extrabold text-2xl">N</span>ote
        </p>
        <GiPerpendicularRings className="text-blue-300 w-8 h-8 " />
      </Link>

      <div className="flex items-center gap-12 text-[#F5EEDC]">
        <Link to="/" className="hover:underline  duration-300 glow-text">Home</Link>
        <Link className="hover:underline  duration-300 glow-text">About</Link>
        <Link className="hover:underline  duration-300 glow-text">Features</Link>
      </div>

      <div className="flex items-center gap-4 text-[#F5EEDC]">
        <p className="btn btn-ghost hover:bg-[#F5EEDC] font-bold">Log In</p>
        <p className="btn bg-blue-200 font-bold">Sign Up</p>
      </div>
      
    </div>
  );
};

export default HomeNav;
