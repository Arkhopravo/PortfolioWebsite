import React from 'react'
import './Header.scss'
import {motion } from 'framer-motion'
import {AppWrap} from '../../wrapper'

import {images} from '../../constants'

const scaleVariants = {
  whileInView:{
        scale: [0,1],
        opacity: [0,1],
        transition: {
          duration: 1,
          ease: 'easeInOut'
        }
  }
}

const Header = () => {
  return (
    <div
      className="header-backgroud"
    >
      {/* <motion.div
         whileInView={{x: [-100, 0], opacity: [0,1]}}
         transition={{ duration:0.5}}
         className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'> Hello, I am</p>
              <h1 className='head-text'>Arkhopravo</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Devaloper</p>
            <p className="">Freelancer</p>
          </div>
        </div>

      </motion.div>
      <motion.div
      whileInView={{ opacity: [0,1]}}
      transition={{ duration:0.5, delayChildren: 0.5}}
      className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" className='my__profile-picture' />
        </motion.div>
      <motion.img
         whileInView={{ scale: [0,1]}}
         transition={{ duration:1, delayChildren: 'easeInOut'}}
         src={images.circle} 
         alt="profile__circle" 
         className="overlay__circle"
         >

      </motion.img>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"

      >
        {[images.node, images.redux, images.sass].map((circle,index)=>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}

      </motion.div> */}
     <img src="images\1.png" className='background-cover'/>
      <img src="images/Login Page Mobile Prototype.png" alt="" className='portfloio-image-mobile'/>
     <img src="images\2.png" className='background-cover'/>
    </div>
  )
}

export default AppWrap(Header, 'home')