import React from "react";
import { Card } from 'antd';
import './cards.css';
// import IslLogo from '../assets/images/islamia-logo.jpeg'
const EducCard=({title,title1, title2,field,field1,field2,year,year1,year2,logo,logo1,logo2})=>{
    return(
        <div className="card-cont">

<Card  bordered={false} className='main-card'>
    <div className="educ_img">
    <img src={logo ||logo1 || logo2}  alt=""/>
    {/* {logo1} */}
    {/* title={<img crossorigin="anonymous" class="education-roundedimg" src="/static/media/smitLogo.a2bb5cdd6d73d37b669e.png" alt="Saylani Mass IT Training Programme"></img>} */}
    </div>
    <h2>{title} {title1}{ title2}</h2>
    <h4>{field}{field1}{field2}</h4>
    <p>{year}{year1}{year2}</p>
  </Card>
</div>

    )
}
export default EducCard;
