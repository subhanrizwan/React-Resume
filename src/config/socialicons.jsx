import React from "react";
import './socialicons.css'

import ReactDOM from 'react-dom';
import { SocialIcon} from 'react-social-icons';
// import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
// import {MdOutlineAlternateEmail} from 'react-icons/md';

// https://mail.google.com/mail/u/1/#inbox?compose=new
const SocIcons=()=>{
    return(
    <>
<div className="Social">
    
    {/* <SocialIcon url="https://linkedin.com/in/jaketrent" className="Linkedin" /> */}
    <i class="fa-brands fa-linkedin" onClick={()=> window.open('https://www.linkedin.com/in/subhanahmed1/')}></i>

</div>
<div className="Social1">
<i class="fa-brands fa-github" onClick={()=> window.open('https://github.com/subhanrizwan?tab=repositories')} ></i>
    {/* <SocialIcon url="https://github.com/" className="github"/> */}
</div>
<div className="Social2">
{/* <SocialIcon url="https://mail.google.com/mail/u/0/#inbox?compose=new" className="email" /> */}
<i class="fa-brands fa-mailchimp"  href="mailto:developersubhanahmed@gmail.com" ></i>
</div>
<div className="Social3">
{/* <SocialIcon url="https://app.netlify.com/teams/subhanrizwan/overview" className="netlify"/> */}
<i class="fa-brands fa-whatsapp" onClick={()=> 
window.open('https://wa.me/03343760625') } ></i>
</div>
</>
    )
}
export default SocIcons;