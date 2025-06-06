import React from 'react'
import "./Nav.css"
import {AiTwotoneHome, AiOutlineUser} from 'react-icons/ai';
import {BiBookOpen} from 'react-icons/bi';
import {RiServiceLine, RiContactsFill} from 'react-icons/ri'
import { useState } from 'react';

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      {/* <a href="#" onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/></a> */}
      <button onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}><AiTwotoneHome/></button>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBookOpen/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === 'services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === 'contact' ? 'active' : ''}><RiContactsFill/></a>
    </nav>
  )
}

export default Nav