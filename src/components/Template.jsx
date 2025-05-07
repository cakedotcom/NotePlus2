import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GrTasks } from "react-icons/gr";
const Template = () => {
  return (
    <div className="text-[#F5EEDC] w-full h-auto outline px-8 py-5">
      <div>
        <h1 className="text-2xl font-bold">Templates</h1>
        <div className="mt-5 flex gap-6">
          <div>
            <div className="border-4 border-dotted inline-block rounded-2xl py-12 px-28">
            <FaPlus className="w-6 h-6"/>
            </div>
            <p className="font-medium">Blank Note</p>
          </div>
        <div>
          <div className="border-2 inline-block rounded-2xl py-12 px-28">
            <FaPenToSquare className="w-6 h-6"/>
          </div>
          <p className="font-medium">Study Note</p>
        </div>

        <div>
          <div className="border-2 inline-block rounded-2xl py-12 px-28">
            <GrTasks className="w-6 h-6"/>
          </div>
          <p className="font-medium">Daily Planner Note</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
