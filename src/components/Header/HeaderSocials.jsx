import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/esteban-daniel-rivero-a6919a251/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Danirc22" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials