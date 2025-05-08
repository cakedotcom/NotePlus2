import React from 'react'
import Navbar from '../components/Navbar.jsx'

import Content from '../components/Content.jsx'
const Dashboard = () => {
  return (
    <div className='bg-black/90 h-screen overflow-y-hidden'>
        
        <Navbar/>
        
        <Content/>                        

    </div>
  )
}

export default Dashboard