import React from 'react'
import { BsMenuButtonFill } from "react-icons/bs";
import { FaFolderTree } from "react-icons/fa6";
import { MdOutlineMicExternalOn } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className='bg-gray-400/15 w-60 h-screen'>
        <div className='flex flex-col flex-start py-10 gap-5 px-5 fade-in'>
            <div className='cursor-pointer py-3 rounded-lg hover:bg-black/25 text-[#F5EEDC] hover:text-blue-300 duration-300 flex items-center gap-2'>
            <BsMenuButtonFill />
            <p className=' font-bold text-lg '>All Notes</p>
            </div>

            <div className='cursor-pointer py-3 rounded-lg text-[#F5EEDC] hover:bg-black/25 hover:text-blue-300 duration-300 flex items-center gap-2'>
            <FaRegStar />
            <p className=' font-bold text-lg '>Favorites</p>
            </div>

            <div className='cursor-pointer py-3 rounded-lg text-[#F5EEDC] hover:bg-black/25 hover:text-blue-300 duration-300 flex items-center gap-2'>
            <FaFolderTree  />
            <p className=' font-bold text-lg '>Folder</p>
            </div>

            <div className='cursor-pointer py-3 rounded-lg text-[#F5EEDC] hover:bg-black/25 hover:text-blue-300 duration-300 flex items-center gap-2'>
            <MdOutlineMicExternalOn  />
            <p className=' font-bold text-lg '>Voice Notes</p>
            </div>

            <div className='cursor-pointer py-3 rounded-lg text-[#F5EEDC] hover:bg-black/25 hover:text-blue-300 duration-300 flex items-center gap-2'>
            <FaPenToSquare  />
            <p className=' font-bold text-lg '>Handwriting</p>
            </div>
            
            <div className='cursor-pointer py-3 rounded-lg text-[#F5EEDC] hover:bg-black/25 hover:text-blue-300 duration-300 flex items-center gap-2'>
            <FaArchive />
            <p className=' font-bold text-lg '>Archive</p>
            </div>

            <div className='cursor-pointer py-3 rounded-lg text-[#F5EEDC] hover:bg-black/25 hover:text-blue-300 duration-300 flex items-center gap-2'>
            <FaRegTrashCan />
            <p className=' font-bold text-lg '>Trash</p>
            </div>

            
        </div>
    </div>
  )
}

export default Sidebar