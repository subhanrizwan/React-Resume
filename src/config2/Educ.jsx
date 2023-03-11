import React from 'react';
import './Educ.css'
import EducCard from './cards';
import IslLogo from '../assets/images/islamia-logo.jpeg'
import SmiuLogo from '../assets/images/smiu-logo.png'
import Smit from '../assets/images/smit-logo.png'
// import Anim from './AnimatedHi';

const Education = () => {
    return (
        <div  id ="Education"className="Educ-cont">
          <div className="Educ-cont-child">
            <h1 className="education-heading">
                Education
            </h1>
            <div className="card-parents">

            <EducCard title='SMI University' 
            field='Bachelor of Science in Computer Science'
            year='February - 2023-Present'
            logo={SmiuLogo}
            />

            <EducCard title1='Govt Islamia Science College Karachi'
            field1='Pre-Engineering'
            logo1={IslLogo} 
            year1='September 2020 - August 2022'
            />

            <EducCard  title2='Saylani Mass IT Training Programme'
            field2='Web Development Course'
            year2='Feburary 2022 - January 2023'
            logo2={Smit}
            />

</div>
          </div>
        </div>
    )
}
export default Education;

// animated avatar hi