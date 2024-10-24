import React from 'react'
import "./Service.css"
import {BsCheck} from 'react-icons/bs'
const Service = () => {
  return (
    <section id='services'>
      <h5>what i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>FrontEnd web</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Ofrezco habilidades en CSS, HTML y JavaScript.</p>
            </li>
            
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Desarrollo aplicaciones web complejas utilizando React y Angular.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Garantizo soluciones de alta calidad y satisfacción del cliente.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Enfoque en diseño, interactividad y experiencia de usuario.</p>
            </li>
            
          </ul>

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Desarrollador web</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Como desarrollador web, ofrezco servicios en front-end y back-end.  </p> 
              </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Habilidades en CSS, HTML y JavaScript para interfaces atractivas.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Conocimientos en node js</p></li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Desarrollo integral de soluciones web con funcionalidad y seguridad.</p></li>
            
          
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Servicios completos de desarrollo web adaptados a tus necesidades. </p></li>
            
          
          </ul>

        </article>


        <article className="service">
          <div className="service__head">
            <h3>Habilidades</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Trabajo en equipo: colaboración efectiva y metas alcanzadas.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Solución de problemas: encontrar respuestas rápidas y eficientes.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Liderazgo: guía y motivación para el éxito.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Comunicación asertiva: mensajes claros y efectivos.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Organización de tiempo: gestión eficiente de plazos.</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Service