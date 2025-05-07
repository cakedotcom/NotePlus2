import React from 'react'
import { BsMenuButtonFill } from "react-icons/bs";
import { FaFolderTree } from "react-icons/fa6";
import { MdOutlineMicExternalOn } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='bg-gray-400/15 w-60 h-screen'>
        <div className='flex flex-col flex-start py-10 gap-12 px-10 fade-in'>
            <div className='cursor-pointer glow-text text-[#F5EEDC] hover:text-blue-300 duration-300 flex items-center gap-2'>
            <BsMenuButtonFill />
            <p className=' font-bold text-lg '>All Notes</p>
            </div>

            <div className='cursor-pointer text-[#F5EEDC] glow-text hover:text-blue-300 duration-300 flex items-center gap-2'>
            <FaFolderTree  />
            <p className=' font-bold text-lg '>Folder</p>
            </div>

            <div className='cursor-pointer text-[#F5EEDC] glow-text hover:text-blue-300 duration-300 flex items-center gap-2'>
            <MdOutlineMicExternalOn  />
            <p className=' font-bold text-lg '>Voice Notes</p>
            </div>

            <div className='cursor-pointer text-[#F5EEDC] glow-text hover:text-blue-300 duration-300 flex items-center gap-2'>
            <FaPenToSquare  />
            <p className=' font-bold text-lg '>Handwriting</p>
            </div>
            
            <div className='cursor-pointer text-[#F5EEDC] glow-text hover:text-blue-300 duration-300 flex items-center gap-2'>
            <FaArchive />
            <p className=' font-bold text-lg '>Archive</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar