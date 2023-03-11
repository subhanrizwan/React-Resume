import React from "react";
import './resumeBtn.css'
import pdf from '../assets/images/Subhan.pdf';

const Resume=()=>{
    return(
<div className="resBtn">
    <div className="btn" onClick={()=>  window.open(pdf)} >My Resume</div>
</div>
    )
}
export default Resume;

// let ResumeVisit=()=>{
//     // console.log('subhan');

// return (
//     // <Netlify />
// // console.log()
// )

// }