import React from "react";
import Home from "../config/Home";
import './Footer.css'
// import SubhanImg from '../assets/images/subhanp1.jpeg'
import SubhanImg from '../assets/images/subhi2.jpg'
const Foot=()=>{
    return(
        <>
        <Home 
        FootSecLast={'Open for opportunities: Yes'}
        Foot_heading={'Contact Me!'}
        Foot_minHead={'DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.'}
        Foot_Intro={'"Hi my name is Subhan Ahmed, A passionate JavaScript developer. Always ready to get new opportunities. Wants to work in a friendly environment, "'}
        FootImg={
            <div id="Contact" className="footimg">
             <img src={SubhanImg} alt="" />
             </div>
            }
        />
        </>
    )
}
export default Foot;

const footimg={
    
}

