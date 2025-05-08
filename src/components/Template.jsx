import React from "react";
import { FaPenToSquare, FaPlus, FaPenNib } from "react-icons/fa6";
import { GrTasks } from "react-icons/gr";
import { MdOutlineMicExternalOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Template = () => {
  return (
    <div className="text-[#F5EEDC] w-full h-auto px-8 py-5">
      <div>
        <p className="text-2xl font-bold">Templates</p>
        <motion.div
          className="mt-5 flex gap-6 flex-wrap"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Link
              to="/NewNote"
              className="border-4 border-dotted inline-block rounded-2xl py-12 px-28 hover:scale-105 transition"
            >
              <FaPlus className="w-6 h-6" />
            </Link>
            <p className="font-medium">Blank Note</p>
          </motion.div>

          <motion.div variants={item}>
            <div className="border-2 inline-block rounded-2xl py-12 px-28 hover:scale-105 transition">
              <FaPenToSquare className="w-6 h-6" />
            </div>
            <p className="font-medium">Study Note</p>
          </motion.div>

          <motion.div variants={item}>
            <div className="border-2 inline-block rounded-2xl py-12 px-28 hover:scale-105 transition">
              <GrTasks className="w-6 h-6" />
            </div>
            <p className="font-medium">Daily Planner Note</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-8">
        <p className="text-2xl font-bold">Recent Notes</p>
        <motion.div
          className="mt-5 flex gap-6 flex-wrap"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <div className="border-2 bg-blue-200/25 inline-block rounded-2xl py-12 px-28 hover:scale-105 transition">
              <FaPenToSquare className="w-6 h-6" />
            </div>
            <p className="font-medium">Computer Programming</p>
          </motion.div>

          <motion.div variants={item}>
            <div className="border-2 bg-yellow-200/25 inline-block rounded-2xl py-12 px-28 hover:scale-105 transition">
              <GrTasks className="w-6 h-6" />
            </div>
            <p className="font-medium">Today's Plan</p>
          </motion.div>

          <motion.div variants={item}>
            <div className="border-2 bg-red-200/25 inline-block rounded-2xl py-12 px-28 hover:scale-105 transition">
              <MdOutlineMicExternalOn className="w-6 h-6" />
            </div>
            <p className="font-medium">Text to Speech</p>
          </motion.div>

          <motion.div variants={item}>
            <div className="border-2 bg-purple-200/25 inline-block rounded-2xl py-12 px-28 hover:scale-105 transition">
              <FaPenNib className="w-6 h-6" />
            </div>
            <p className="font-medium">E-Signature Test</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Template;
