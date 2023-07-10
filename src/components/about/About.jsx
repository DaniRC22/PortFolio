import React from 'react';
import "./About.css";
import ME from '../../assets/Programmer-PNG-Free-File-Download.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TiFolderOpen} from 'react-icons/ti'

const About = () => {
  return (
    <section id='about'>
      <h5>Quieres saber más</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1,5+ Años desarrollando</small>
          </article>
          <article className='about__card'>
          <FiUsers className='about__icon'/>
            <h5>Academias</h5>
            <small> 3 Companias</small>
          </article>
          <article className='about__card'>
          <TiFolderOpen className='about__icon'/>
            <h5>Proyects</h5>
            <small>10+ Completed</small>
          </article>
        </div>

        <p>
        "Inicié mi camino en la programación en 2021 a través de Argentina Programa, aprendiendo CSS, JavaScript, Html, Bootstrap, Angular, Spring Boot y Java. Reforcé mis habilidades en Angular en un curso de CoderHouse en 2022 y en 2023 comencé a estudiar React en Platzi, ampliando mis conocimientos en desarrollo web."
        </p>

        <a href="#contact" className='btn btn-primary'> Hablame</a>
      </div>
      </div>

    </section>
  )
}

export default About