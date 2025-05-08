import React from "react";
import HomeNav from "../components/HomeNav";
import { HiOutlineChip } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaLock, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const cardData = [
  {
    icon: <HiOutlineChip className="w-10 h-10" />,
    title: "AI-Powered Assistance",
    text: "Get intelligent suggestions and completions as you type.",
    shadow: "hover:shadow-red-300",
    mt: "mt-0",
  },
  {
    icon: <IoIosSettings className="w-10 h-10" />,
    title: "Customizable Templates",
    text: "Create notes in the format that suits your needs",
    shadow: "hover:shadow-orange-400",
    mt: "mt-30",
  },
  {
    icon: <AiOutlineThunderbolt className="w-10 h-10" />,
    title: "Quick Capture",
    text: "Write down ideas with ease and keep them instantly organized",
    shadow: "hover:shadow-yellow-300",
    mt: "mt-50",
  },
  {
    icon: <FaLock className="w-10 h-10" />,
    title: "Secure & Private",
    text: "Protect your notes with industry-standard encryption",
    shadow: "hover:shadow-green-300",
    mt: "mt-30",
  },
  {
    icon: <FaLink className="w-10 h-10" />,
    title: "Contextual Recall",
    text: "Automatically links related notes and resurfaces them when you need them",
    shadow: "hover:shadow-violet-300",
    mt: "mt-0",
  },
];

const Features = () => {
  return (
    <div className="bg-black/90 h-screen overflow-y-auto text-[#F5EEDC]">
      <HomeNav />

      <div className="text-center">
        <p className="text-4xl font-semibold mt-5">Our Features</p>
        <p className="text-lg">Everything you need</p>
      </div>

      <div className="flex justify-center items-center gap-10 flex-wrap mt-10 px-10">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`outline w-60 h-80 p-4 rounded-lg ${card.mt} transition-transform duration-300 hover:scale-105 hover:shadow-lg ${card.shadow}`}
          >
            <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
              {card.icon}
              <p className="text-lg font-medium">{card.title}</p>
              <p className="text-sm text-gray-400">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
