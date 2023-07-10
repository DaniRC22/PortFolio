import React from 'react'
import "./Portafolio.css"
import IMG1 from '../../assets/React.png'
import IMG2 from '../../assets/Coder.jpg'
import IMG3 from '../../assets/java y spring.png'
import IMG4 from '../../assets/Angular.png'

const Portafolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis trabajos</h5>
      <h2>Mi Portafolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IMG1} alt="" />
        </div>
        <h3>Anotador de Tareas/React</h3>
        <small>Hecho con Platzi, tiene organizacion de estructura de forma profesional,
          componentes detallados, incluye LocalStorage
        </small>
        <div className="portfolio__item-cta">
        <a href="https://github.com/DaniRC22/ReactTdos" className='btn' target='_blank'>Git Hub</a>
        <a href="https://danirc22.github.io/ReactTdos/" className='btn btn-primary' target='_blank'>Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IMG2} alt="" />
        </div>
        <h3>Incripcion a Cursos / CoderHouse</h3>
        <small>Menu, dinamico. Contiene Redux, NGRX. Estructura de componentes de forma profesional</small>
        <div className="portfolio__item-cta">
        <a href="https://github.com/DaniRC22/2do-trabajo-final" className='btn' target='_blank'>Git Hub</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IMG3} alt="" />
        </div>
        <h3>Base de datos</h3>
        <small>Spring Boot y Java, sesión JWT estructura armada a base de Argentina Programa</small>
        <div className="portfolio__item-cta">
        <a href="https://github.com/DaniRC22/DanielRiveroBackEnd" className='btn' target='_blank'>Git Hub</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IMG4} alt="" />
        </div>
        <h3>Perfil Full stack jr</h3>
        <small>Inicio de sesión, JWT, consume api de JAVA, Organizado con Argentina Programa</small>
        <div className="portfolio__item-cta">
        <a href="https://github.com/DaniRC22/ArgentinaProgramo" className='btn' target='_blank'>Git Hub</a>
        </div>
        </article>
        
       
        
      </div>
    </section>
  )
}

export default Portafolio