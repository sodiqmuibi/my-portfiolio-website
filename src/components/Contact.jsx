import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { Wrap } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setIsLoading] = useState(false)
  
  const formRef = useRef()
 
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    emailjs.send(
      'service_cvts0ff', 
      'template_7fqq7ke',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      '7hJwuy9oOQ55Q03x0'
    ).then(() => {
      setIsLoading(false)
      alert("Thank you for reaching out. I'll get back to you as soon as possible")
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setIsLoading(false)
      console.log(error)
      alert("Message not sent, something went wrong")
    })
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
        <form ref={formRef} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='font-medium text-white mb-4'>Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='font-medium text-white mb-4'>Email</span>
            <input 
              type='text'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='font-medium text-white mb-4'>Message</span>
            <textarea 
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className='bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium'/>
          </label>
          <button type='button' onClick={handleSubmit}
            className='bg-tertiary py-3 px-8 w-fit text-white font-bold outline-none shadow-md shadow-primary rounded-xl'>
              {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default Wrap(Contact, 'contact')