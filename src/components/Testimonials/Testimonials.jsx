import React from 'react'
import "./Testimonials.css"
// import AVTR1 from '../../assets/avatar1.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src="{AVTR1}" alt="Avatar 0ne" />
            </div>
           
            <h5 className='client__name'> Archivo</h5>
            <small className='client__review'>
              Lorem ipsique numquam at est soluta ab, esse sequi eius fugiat quae dolores, non quisquam.
            </small>
            
        </article>
      </div>
    </section>
  )
}

export default Testimonials