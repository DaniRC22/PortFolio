import React, { useRef } from 'react';
import "./contact.css";
import {HiOutlineMail} from 'react-icons/hi';
import {BsWhatsapp} from 'react-icons/bs';
import {GrLinkedin} from 'react-icons/gr'

import emailjs from 'emailjs-com';

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oucheqx', 'template_ggrakmj', form.current, 'b6SGeyFjc-M6TJ7Z1')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>Edanielrivero@hotmail.com</h5>
          <a href="mailto:Edanielrivero@hotmail.com" target='_blank'>Enviar un Email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+5401156036283</h5>
          <a href="https://api.whatsapp.com/send?phone=5401156036283" target='_blank'>Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <GrLinkedin className='contact__option-icon'/>
          <h4>linkedin</h4>
          <h5></h5>
          <a href="https://www.linkedin.com/in/esteban-daniel-rivero-a6919a251/" target='_blank'>Visitar Perfil</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tu nombre completo' required />
          <input type="email" name='email' placeholder='Tu Email' required />
          <textarea name="message" rows="7" placeholder="Tu mensaje" required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact