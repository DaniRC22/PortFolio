import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from '../../assets/paginas-para-crear-portafolios.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hola soy</h5>
        <h1>Esteban Daniel Rivero</h1>
        <h5 className='text-light'>Full Stack Developer jr</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src="" alt="" />
          <h1>
            Dani Code
            </h1>
        </div>

        <a href="#contact" className="scroll__down"> scroll</a>
      </div>
    </header>
  )
}

export default Header