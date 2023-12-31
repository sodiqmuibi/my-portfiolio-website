import React from 'react'
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { Wrap } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div options={{
            max: 45,
            scale: 1,
            speed: 450
          }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt='icon' className='w-16 h-16 object-contain'/>
            <h3 className='font-bold text-[20px] text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p className='mt-4 text-secondary max-w-3xl leading-[30px] text-[17px]' variants={fadeIn("", "", 0.1, 1)}>
      I'm a skilled frontend developer with experience in HTML, CSS,
      Javascript, Typescript, React, Nodejs and Nextjs. Bringing
      expertise in design, testing and maintenance of web system. I'm 
      a quick learner and collaborate closely with team members and clients
      to create efficient, scalable and user-friendly solutions that 
      solve problems.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default Wrap(About, "about")