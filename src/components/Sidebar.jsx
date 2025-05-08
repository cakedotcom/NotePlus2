import React from 'react'
import { BsMenuButtonFill } from "react-icons/bs";
import { FaFolderTree, FaPenToSquare, FaRegTrashCan, FaRegStar } from "react-icons/fa6";
import { MdOutlineMicExternalOn } from "react-icons/md";
import { FaArchive } from "react-icons/fa";
import { motion } from "framer-motion";

const sidebarVariants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

const Sidebar = () => {
  return (
    <motion.div
      className="bg-gray-400/15 w-60 h-screen"
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="flex flex-col py-10 gap-5 px-5" variants={sidebarVariants}>
        {[
          { icon: <BsMenuButtonFill />, label: "All Notes" },
          { icon: <FaRegStar />, label: "Favorites" },
          { icon: <FaFolderTree />, label: "Folder" },
          { icon: <MdOutlineMicExternalOn />, label: "Voice Notes" },
          { icon: <FaPenToSquare />, label: "Handwriting" },
          { icon: <FaArchive />, label: "Archive" },
          { icon: <FaRegTrashCan />, label: "Trash" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="cursor-pointer py-3 rounded-lg text-[#F5EEDC] hover:bg-black/25 hover:text-blue-300 duration-300 flex items-center gap-2"
          >
            {item.icon}
            <p className="font-bold text-lg">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Sidebar
