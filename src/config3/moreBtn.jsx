import React from "react";
import './moreBtn.css'

const MoreBtn=()=>{
    return(
        <div className="last-diiv">
<div className="btn1" onClick={()=> window.open('https://app.netlify.com/teams/subhanrizwan/sites')} >
    More Projects</div>
        </div>
    )
}
export default MoreBtn;


// const HostProj=()=>{
//       return(
//     console.log('subhn')
//     // <div>
//     //    <a href="https://app.netlify.com/teams/subhanrizwan/sites"></a> 
//     //  </div>
//   )
// }
// HostProj(){
//     const url = 'somesite.com?data=yourDataToSend';
//     window.open(url, '_blank');
// }