import React,{useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { urlFor, client } from '../../client'
import './About.scss'
import {AppWrap} from '../../wrapper'
import { images } from '../../constants'
import { MotionWrap } from '../../wrapper'
// const abouts = [
//   { title: "Full Stack Web Development", description:'I am a good web development.', imgUrl:images.about01},
//   { title: "Web Design", description:'I am a good web development.', imgUrl:images.about02},
//   { title: "UI/UX", description:'I am a good web development.', imgUrl:images.about03},
//   { title: "MERN Stack", description:'I am a good web development.', imgUrl:images.about04}
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type== "abouts"]'
    client.fetch(query).then((data)=>{
      setAbouts(data);
    })
  }, [])
  

  return (
    <>
       <h2 className="head-text">
        I know that 
        <span> Good Design</span> 
        <br/>
        means
        <span> Good business</span>
        </h2>
        <div className='app__profiles'>
              {abouts.map((about, index) =>(
                <motion.div
                  whileInView={{opacity:1}}
                  whileHover={{scale:1.1}}
                  transition={{duration: 0.5, type:'tewwn'}}
                  className='app__profile-item'
                  key={about.title + index}
                >
                    <img src={urlFor(about.imgUrl)} alt={about.title} />
                    <h2 className='bold-text' style={{marginTop:20, fontSize:"25px"}}>{about.title}</h2>
                    <p className='bold-text' style={{marginTop:10}}>{about.description}</p>
                </motion.div>
              ))}
        </div>
    </>
  )
}

export default AppWrap(
// MotionWrap(About,'about'),
// 'about', "app__whitebg"
   About, 'about'
)