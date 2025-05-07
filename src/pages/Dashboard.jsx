import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
const Dashboard = () => {
  return (
    <div className='bg-black/90 h-screen overflow-y-hidden'>
        <Navbar/>
        <Sidebar/>
        
    </div>
  )
}

export default Dashboard