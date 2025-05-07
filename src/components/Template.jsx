import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GrTasks } from "react-icons/gr";
import { MdOutlineMicExternalOn } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";
const Template = () => {
  return (
    <div className="text-[#F5EEDC] w-full h-auto px-8 py-5">
      <div>
        <p className="text-2xl font-bold">Templates</p>
        <div className="mt-5 flex gap-6">
          <div>
            <Link to="/NewNote" className="border-4 border-dotted inline-block rounded-2xl py-12 px-28">
              <FaPlus className="w-6 h-6" />
            </Link>
            <p className="font-medium">Blank Note</p>
          </div>
          <div>
            <div className="border-2 inline-block rounded-2xl py-12 px-28">
              <FaPenToSquare className="w-6 h-6" />
            </div>
            <p className="font-medium">Study Note</p>
          </div>

          <div>
            <div className="border-2 inline-block rounded-2xl py-12 px-28">
              <GrTasks className="w-6 h-6" />
            </div>
            <p className="font-medium">Daily Planner Note</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-2xl font-bold">Recent Notes</p>
        <div className="mt-5 flex gap-6">
          <div>
            <div className="border-2 bg-blue-200/25 inline-block rounded-2xl py-12 px-28">
              <FaPenToSquare className="w-6 h-6" />
            </div>
            <p className="font-medium">Computer Programming</p>
          </div>

          <div>
            <div className="border-2 bg-yellow-200/25 inline-block rounded-2xl py-12 px-28">
              <GrTasks className="w-6 h-6" />
            </div>
            <p className="font-medium">Today's Plan</p>
          </div>

          <div>
            <div className="border-2 bg-red-200/25 inline-block rounded-2xl py-12 px-28">
              <MdOutlineMicExternalOn className="w-6 h-6" />
            </div>
            <p className="font-medium">Text to Speech</p>
          </div>

          <div>
            <div className="border-2 bg-purple-200/25 inline-block rounded-2xl py-12 px-28">
              <FaPenNib className="w-6 h-6" />
            </div>
            <p className="font-medium">E-Signature Test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
