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
            <small>3 Años desarrollando</small>
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
        "Inicié mi camino en la programación en 2021 a través de Argentina Programa. Reforcé mis habilidades en Angular en un curso de CoderHouse en 2022. En 2023 comencé a estudiar en Platzi, ampliando mis conocimientos en desarrollo web. Actualmente, me encuentro en un curso de Java y en la universidad para la tecnicatura en programación. Mi pasión por la tecnología y el aprendizaje continuo me impulsan a seguir creciendo en este emocionante campo. Estoy emocionado por lo que el futuro depara y listo para enfrentar nuevos desafíos."
        </p>

        <a href="#contact" className='btn btn-primary'> Hablame</a>
      </div>
      </div>

    </section>
  )
}

export default About