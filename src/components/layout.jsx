import React from 'react';
import './layout.css'
import { Layout, Space} from 'antd';
import Navbar from './menu'
import Home from '../config/Home';
import Skills from '../config1/skills';
import Education from '../config2/Educ';
import Projects from '../config3/proj';
import MoreBtn from '../config3/moreBtn';
import Foot from '../config3/Footer';
import Resume from '../config/resumeBtn'
import Home_Gif from '../assets/images/welcomeGif.gif';
import Menubar from './menubar'
// import './App.css';
// import Navbar
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';

const { Header, Footer,Content } = Layout;

const headerStyle= {
  margin:0,
  padding:0,
  height: 95,
  // backgroundColor:'red',
  // display:'flex',
  // paddingInline: 50,
  // lineHeight: '65px',
  backgroundColor: '#171c28',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 2250,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: ' #171c28',
};
const footerStyle= {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: ' #171c28',
  // backgroundColor: '#7dbcea',
};

const LayOut= () => {

  const [isToggled,setToggled] = useState(false)

  return(
  <Space direction="vertical" style={{ width: '100%', }} size={[0, 48]}>
    <Layout>

      <Header style={headerStyle}>
      
      <Navbar  />

      <div className="menubar">
     <MenuOutlinedIcon className='icon' onClick={()=>setToggled(!isToggled)} style={{ fontSize: '30px'} }/>
      {
        isToggled && <Menubar/>
      }
     </div>

      </Header>

      <Content style={contentStyle}>
        < Home
        Home_Contact={"Hi I'm Subhan"}
        Home_Intro={'A passionate Front End Developer having an some experience of building Web applicationswith JavaScript, Reactjs, Antd, Bootstrap and some other cool libraries and frameworks.'}
        HomeResume={ <Resume /> }
        HomeGif={<img  src={Home_Gif} alt="" />}
        
         />

        < Skills />

        <Education />

        <Projects />

        <MoreBtn />
      </Content>

      <Footer style={footerStyle}>

<Foot />

      </Footer >

    </Layout >
    
  
  </Space>
  )
}

export default LayOut;