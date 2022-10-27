// import { MotionConfig } from 'framer-motion'
import React from 'react'
import './Footer.scss'
import {motion} from 'framer-motion'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <>
       <div
           className='app__profile-item'
           
       >
       <h1>Contact Me:</h1> 
          <div><h3> <LocalPhoneIcon/> 9433355284 </h3></div>
           <div style={{flexDirection: "row"}}> <MailOutlineIcon/>  arkho.psarkar@gmail.com </div>      
       </div>
    </>
  )
}

export default Footer