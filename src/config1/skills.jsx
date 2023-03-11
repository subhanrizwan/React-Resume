import React from 'react';
import './skills.css'
import {SiAdobephotoshop} from 'react-icons/si';
import Skillgif from '../assets/images/skill.gif'


const Skills = () => {
    return (
        <div id='Skills' className="skill-cont">
            <div className="skill-cont-child1">
                <h1 className="heading">
                   Skills 

                   
                <p className="paragraph">
I am from pakistan and currently
 living in karachi. I am doing bachelor's in computer Science and 
 i will graduate in the year 2027. I am frontend & web developer. 
 </p>
                </h1>

 
<div className="Box">
                <div className="html">
                <i class="fa-brands fa-html5"></i>
                <p>Html</p>
                </div>
                <div className="css">
                <i class="fa-brands fa-css3-alt"></i>
                <p>Css</p>
                </div>
                <div className="js">
                <i class="fa-brands fa-js"></i>
                <p>JavaScript</p>
                </div>
                <div className="reactjs">
                <i class="fa-brands fa-react"></i>
                <p>React Js</p>
                </div>
                <div className="bstrap">
                <i class="fa-brands fa-bootstrap"></i>
                <p>B-Strap</p>
                </div>
                <div className="antd">
                <i class="fa-brands fa-npm"></i>
                <p>Antd</p>
                </div>
                <div className="pshop">
                    <SiAdobephotoshop className='Pshop' />
                    <p>P-Shop</p>
                </div>
                
                <div className="fbase">
                <i class="fa-brands fa-gripfire"></i>
                <p>Firebase</p> 
                </div>

                
                </div>

            <div className='skill-fot'>
                <p class="dark-mode subTitle skills-text">
                 Develop highly interactive Front end / User Interfaces for your web applications</p>
                <p class="dark-mode subTitle skills-text">
                     Develop creative projects with the team</p>
                    <p class="dark-mode subTitle skills-text">
                        I can write high quality, performant and reliable code</p>
                        </div>
            </div>
            <div className="skill-cont-child2">
               <img src={Skillgif}  alt="" />
            </div>

            
        </div>
    )
}
export default Skills;