import React, { useEffect, useState } from 'react'
import HomeNav from '../components/HomeNav'
import NewBrain from '../assets/brain.png'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { FaWindows } from "react-icons/fa"
import { motion } from 'framer-motion'

const Home = () => {
  const text = "Write Less, Capture More — with AI"
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)
  const [isReversing, setIsReversing] = useState(false)

  useEffect(() => {
    if (index < text.length && !isReversing) {
      const interval = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 40)

      return () => clearTimeout(interval)
    } else if (index > 0 && isReversing) {
      const interval = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1))
        setIndex((prev) => prev - 1)
      }, 40)

      return () => clearTimeout(interval)
    } else {
      setTimeout(() => {
        setIsReversing((prev) => !prev)
        setIndex(isReversing ? 0 : text.length)
      }, 2000)
    }
  }, [index, isReversing])

  return (
    <div className='bg-black/90 h-screen overflow-y-hidden'>
      <HomeNav />
      <div className='flex justify-between px-40 items-center mt-20'>
        
        {/* Animated Brain Image */}
        <motion.img
          src={NewBrain}
          alt="Hero"
          className='w-130 h-130 animate-pulse'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='text-[#F5EEDC] w-130'
        >
          <h1 className='text-4xl font-bold'>{displayedText}</h1>
          <p className='text-lg mt-4'>
            Where ideas meets intelligence.
            Organize your thoughts and let AI assist you in capturing ideas.
          </p>
          <p className='text-lg mt-4'>
            Experience smarter thinking, better organization, and AI-powered precision—
            because your ideas deserve more than just storage. They deserve intelligence.
          </p>

          {/* Animated Buttons */}
          <motion.div
            className='flex gap-4 mt-10'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link to="/Dashboard">
              <Button className="btn bg-[#F5EEDC] hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-300 duration-300 text-black font-bold">
                Get Started
              </Button>
            </Link>
            <Button className="btn bg-blue-300 hover:bg-yellow-100 hover:shadow-lg hover:shadow-yellow-200 text-black font-semibold">
              <FaWindows />Download the app
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
