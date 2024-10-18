import React from 'react'
import { FaBell, FaUserCircle } from 'react-icons/fa';

import '../css/topbar.css'

const TopBar = () => {
  return (
    <div className='topBarSection' >   
    <div className='header-search'>
      <input type="text" />
      </div> 
      <div className="header-right">
      <FaBell className="icon" />
      <FaUserCircle className="icon" />
      <span>Admin</span>
    </div>
        <header className="dashboard-header">

    <div className="header-left">
      <nav>
        <a href="#">Home</a>
        <a href="#">Workspace</a>
        <a href="#">Company</a>
        <a href="#">Documents</a>
        <a href="#">Blogs</a>
        <a href="#">Support</a>
      </nav>
    </div>
   
  </header></div>
  )
}

export default TopBar