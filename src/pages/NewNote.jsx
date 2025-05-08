import React, { useState,  useEffect } from "react";
import NoteNavbar from '../components/NoteNavbar.jsx';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LuSendToBack } from "react-icons/lu";
import { FaRegImage } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { RiLetterSpacing2 } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"

const NewNote = () => {
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState(new Date());
  const [isClockRunning, setIsClockRunning] = useState(false);
  const [summary, setSummary] = useState("");

 
useEffect(() => {
  if (isClockRunning) { // ✅ Only run interval if clock is enabled
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }
}, [isClockRunning]);

  const handleClear = () => {
    setMessage(
      <p className='text-2xl text-gray-300 text-center items-center flex justify-center'>
        <span className="loading loading-infinity loading-xl"></span>AI Thinking...
      </p>
    );

    const recipeText = `
Recipe Note: Classic Filipino Adobo | Servings: 4-6

Ingredients:
- 1 kg chicken or pork (or a mix)
- 1/2 cup soy sauce
- 1/3 cup vinegar
- 4 cloves garlic (minced)
- 1 onion (sliced)
- 2 bay leaves
- 1 tsp black peppercorns
- 1/2 tsp salt (adjust to taste)
- 1 tbsp sugar (optional)
- 1 cup water
- 2 tbsp cooking oil

Cooking Steps:
1. Heat oil in a pan, sauté garlic and onions until fragrant.
2. Add chicken/pork, sear until lightly browned.
3. Pour in soy sauce, vinegar, and water. Stir.
4. Add bay leaves, peppercorns, and sugar (if using).
5. Bring to a boil, then lower heat and simmer for 30-40 minutes until meat is tender.
6. Taste and adjust seasoning. If preferred, reduce the sauce to thicken.
7. Serve hot with steamed rice!
    `;

    setNote("");

    let index = 0;
    let output = "";

    setTimeout(() => {
      const interval = setInterval(() => {
        output += recipeText[index];
        setMessage(<pre className='whitespace-pre-wrap px-5'>{output}</pre>);

        index++;
        if (index >= recipeText.length) {
          clearInterval(interval);
        }
      }, 15);
    }, 1000); // simulate "thinking" delay
  };

  const handleSummary = () => {
    setMessage(""); // ✅ Clear previous message
    setSummary(
      <p className='text-2xl text-gray-300 text-center items-center flex justify-center'>
        <span className="loading loading-infinity loading-xl"></span>AI Summarizing...
      </p>
    );
  
    const recipeText = `
  Recipe Note: Classic Filipino Adobo | Servings: 4-6
  
  To make Filipino Adobo, start by sautéing garlic and onions in oil until fragrant. Add chicken or pork, searing until lightly browned. Pour in soy sauce, vinegar, and water, then stir to combine. Toss in bay leaves, black peppercorns, and sugar (optional) before bringing the mixture to a boil. Reduce the heat and let it simmer for 30-40 minutes until the meat becomes tender. Adjust seasoning to taste and, if desired, thicken the sauce by further simmering. Serve hot with steamed rice for a flavorful, comforting dish!
    `;
  
    setNote("");
  
    let index = 0;
    let output = "";
  
    setTimeout(() => {
      const interval = setInterval(() => {
        output += recipeText[index];
        setSummary(<pre className='whitespace-pre-wrap px-5'>{output}</pre>);
  
        index++;
        if (index >= recipeText.length) {
          clearInterval(interval);
        }
      }, 15);
    }, 1000); // simulate "thinking" delay
  };

  return (
    <div className='bg-black/90 text-[#F5EEDC] h-screen overflow-y-hidden'>
      <NoteNavbar />
      
      <Link className="px-10 text-lg font-medium flex items-center" to="/Dashboard"><FaArrowLeft />Go Back</Link>
      
      

      <div>
        <p className='text-xl text-center'>Untitled Note</p>
      </div>
      <div className="text-lg font-semibold text-gray-500 text-center mb-5">
        {time.toLocaleTimeString()}
      </div>

      <div className='flex items-center justify-center gap-5 mt-10'>
        <Input
          placeholder="Share an idea, and AI will build on it..."
          className="w-120 py-5 shadow-lg shadow-blue-300/50"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button 
          onClick={handleClear}
          className="bg-[#F5EEDC] w-20 hover:bg-blue-300 duration-300 cursor-pointer text-black group"
        >
          <LuSendToBack className="group-hover:animate-spin duration-300" />
        </Button>
      </div>

      <div className='flex items-center justify-center gap-5 mt-10 mb-10 fade-in'>
        <div className='border-2 rounded-2xl w-180 h-120 shadow-lg shadow-blue-300/50'>
          <div className='border-b border-gray-500 py-3 flex justify-between px-5'>
            <div className='flex items-center gap-3'>
              <p className='inline-block rounded-sm px-2 text-[#F5EEDC]'>Normal Text</p>
              <div className="dropdown dropdown-end">
                <div tabIndex="0" role="button" className="cursor-pointer outline-none m-1 flex justify-center items-center gap-3">
                <div class="tooltip tooltip-bottom" data-tip="Font">
                  <p className="text-[#F5EEDC] rounded-sm font-semibold px-3 flex">
                    Arial <IoMdArrowDropdown />
                  </p>
                </div>
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu bg-[#F5EEDC] text-black rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li><a>Montserrat</a></li>
                  <li><a>Times New Roman</a></li>
                </ul>
              </div>
              <div class="tooltip tooltip-bottom" data-tip="Image">
                <FaRegImage />
              </div>
              
            </div>

            <div className='flex items-center gap-3'>
              <div class="tooltip tooltip-bottom" data-tip="Bold">
                <p className='font-extrabold'>B</p>
              </div>
              <div class="tooltip tooltip-bottom" data-tip="Italic">
                <FaItalic />
              </div>
              <div class="tooltip tooltip-bottom" data-tip="Underline">
                <MdOutlineFormatUnderlined />
              </div>
              <div class="tooltip tooltip-bottom" data-tip="Text Color">
                <RiLetterSpacing2 />
              </div>
              
            </div>

            <div className='flex items-center gap-8'>
              <p className='bg-blue-200 text-black rounded-lg py-1 px-3 cursor-pointer'>Share</p>
              
              <Button onClick={handleSummary} class="tooltip tooltip-bottom" data-tip="AI Summary">
                <CiMenuFries className='hover:border rounded-2xl duration-300 cursor-pointer w-6 h-6 ' />
              </Button>
              
            </div>
          </div>
          <div className="overflow-y-auto max-h-96 p-5">
            {message}
            {summary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
