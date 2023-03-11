import React from 'react'
import './menubar.css'
import HomeIcon from '@mui/icons-material/Home';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
// import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Menubar=()=>{
    return(

        <div className="main_nav show-box">
        <ul className='ul_mbar'>

        <li>
          <a  href="#Home">Home</a>
        </li>
        <li>
          <a  href="#Skills">Skills</a>
        </li>
        <li>
          <a  href="#Education">Education</a>
        </li>
        <li>
          <a   href="#Projects">Projects</a>
        </li>
        <li>
          <a  href="#Contact">Contact</a>
        </li>
            
        </ul>
       </div>
   
    )
}
export default Menubar;