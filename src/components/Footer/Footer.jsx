import React from 'react';
import "./Footer.css";
import {GrInstagram} from 'react-icons/gr';
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dani Code</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#testimonials">testimonials</a> </li>
      </ul>

    <div className="footer__socials">
      <a href="https://www.instagram.com/danirivero.ok/"> <GrInstagram/> </a>
    </div>

    </footer>
  )
}

export default Footer