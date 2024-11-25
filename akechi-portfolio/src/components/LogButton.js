import React from 'react'
import { motion } from 'framer-motion'

import ButtonIcon from '../assets/image/Btn_Icon.png'
import ComplexButton from './ComplexButton'

import '../css/LogButtonStyle.css'

function LogButton() {
  return (
    <div className='Log'>
      <button className="LogButton">
        <motion.img className="LBImge" src={ButtonIcon} alt="" 
          whileHover={{ scale: 1.3 }}
        />
      </button>
      <ComplexButton className="test" text='TestButton'/>
    </div>
  )
}

export default LogButton