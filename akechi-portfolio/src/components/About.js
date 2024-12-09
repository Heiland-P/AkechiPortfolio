import React from 'react'

import BgAbout from "../assets/image/Bg_About.png"

import '../css/AboutStyle.css'

function About() {
  return (
    <div className='AboutParent'>
      <img src={BgAbout} alt="BgAbout" className="BgAbout" />
    </div>
  )
}

export default About