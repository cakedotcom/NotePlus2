import React from 'react'
import HomeNav from '../components/HomeNav'
import Robot from '../assets/robot.png'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { Button, buttonVariants } from '../components/ui/button'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='bg-black/90 h-screen overflow-y-hidden'>
      <HomeNav />

      <div className='flex justify-between px-80 items-center mt-20'>
        {/* Animated Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='text-[#F5EEDC] w-130'
        >
          <h1 className='text-3xl font-bold'>About Us</h1>
          <p className='mt-5 text-xl'>
            At Note+, we believe that great ideas deserve more than just a place to be written—
            they deserve to grow.
          </p>
          <p className='mt-5 text-xl'>
            We are a team of designers, developers, and thinkers who built Note+ to help people capture
            and organize their thoughts in a smarter, more intuitive way. By combining beautiful design
            with the power of AI, we’ve created a tool that adapts to your workflow, helps you find clarity,
            and unlocks deeper thinking without the clutter.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className={buttonVariants({ className: "mt-10 btn hover:bg-[#F5EEDC]" })}>
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="font-bold text-2xl">Our Mission</DialogTitle>
                <DialogDescription />
              </DialogHeader>
              <div className='text-md'>
                To empower every individual to think, learn, and create more effectively by turning everyday
                notes into intelligent, actionable insights—powered by simplicity and AI.
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Animated Image Section */}
        <motion.img
          src={Robot}
          alt="robot"
          className='w-100 h-100 rounded-l-lg rounded-bl-full'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  )
}

export default About
