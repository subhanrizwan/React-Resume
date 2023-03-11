import React from "react";
import './menu.css'
// import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Navbar = ()=>{
  return (
    <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">Subhan Ahmed </a>
    </div>
   
    <nav>
    <div class="nav-mobile">
      <a  id="nav-toggle" href="#!"><span></span>
      </a></div>
      
      <ul class="nav-list">
        <li>
          <a className="menu" href="#Home">Home</a>
        </li>
        <li>
          <a className="menu" href="#Skills">Skills</a>
        </li>
        <li>
          <a className="menu" href="#Education">Education</a>
        </li>
        <li>
          <a  className="menu" href="#Projects">Projects</a>
        </li>
        <li>
          <a className="menu" href="#Contact">Contact</a>
        </li>
    </ul>
    </nav> 
  </div>
</section>
    // <div className="main_nav show-box">
    //  <ul>
    //      <li><HomeIcon/><span>Home</span></li>
    //      <li><Person2OutlinedIcon/><span>Profile</span></li>
    //      <li><BarChartOutlinedIcon/><span>Analytics</span></li>
    //      <li><LoginOutlinedIcon/><span>Logout</span></li>
         
    //  </ul>
    // </div>
   )
  }

export default Navbar;

// how to push code in github react