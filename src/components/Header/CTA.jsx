import React from 'react'
import CV from '../../assets/Rivero Esteban-2025.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Descargar CV</a>
    <a href="#contact" className='btn btn-primary'>Contactame</a>
    </div>
  )
}

export default CTA