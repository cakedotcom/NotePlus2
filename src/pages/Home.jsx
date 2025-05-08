import React from 'react'
import HomeNav from '../components/HomeNav'
import Brain from '../assets/pngwing.com.png'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { useEffect, useState } from 'react'
const Home = () => {
const text = "Write Less, Capture More — with AI"; // Your heading text
  const [displayedText, setDisplayedText] = useState(""); // Holds animated text
  const [index, setIndex] = useState(0); // Tracks character position
  const [isReversing, setIsReversing] = useState(false); // Tracks if text is being reversed

  useEffect(() => {
    if (index < text.length && !isReversing) {
      const interval = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 40);
  
      return () => clearTimeout(interval);
    } else if (index > 0 && isReversing) {
      const interval = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1)); // Remove last character
        setIndex((prev) => prev - 1);
      }, 40);
  
      return () => clearTimeout(interval);
    } else {
      setTimeout(() => {
        setIsReversing((prev) => !prev); // Toggle reversing state
        setIndex(isReversing ? 0 : text.length);
      }, 2000);
    }
  }, [index, isReversing]);

  return (
    <div className='bg-black/90  h-screen overflow-y-hidden'>
        <HomeNav />
        <div className='flex justify-between px-40 items-center mt-20'>
            <img src={Brain} alt="Hero" className='w-130 h-130 animate-pulse' />
            <div>
            <div className='text-[#F5EEDC] w-130'>
                
                    <h1 className='text-4xl font-bold'>{displayedText}</h1>

                    <p className='text-lg mt-4'>

                    Where ideas meets intelligence. 
                    Organize your thoughts and let 
                    AI assist you in capturing ideas.
                    </p>
                    <p className='text-lg mt-4'>
                    Experience smarter thinking, better organization, 
                    and AI-powered precision—because your ideas deserve 
                    more than just storage. They deserve intelligence.
                    </p>
                
            </div>

            <div className='flex gap-4 mt-10'>
            <Link to="/Dashboard"><Button className="btn bg-[#F5EEDC] hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-300 duration-300 text-black font-bold">Get Started</Button></Link>
            <Button className="btn bg-blue-300 hover:bg-yellow-100 hover:shadow-lg hover:shadow-yellow-200 text-black font-semibold">Download the app</Button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home