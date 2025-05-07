import React from 'react'
import Sidebar from './Sidebar.jsx'
import Template from './Template.jsx'
const Content = () => {
  return (
    <div className='flex'>
        <Sidebar className="outline"/>
        <Template/>
    </div>
  )
}

export default Content