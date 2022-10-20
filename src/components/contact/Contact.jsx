import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiTelegramLine} from 'react-icons/ri'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_huqzbkm', 'template_yx8ou3v', form.current, 'o4RLWHGMAIiladUK9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
              <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>umidarakhimova34@gmail.com</h5>
              <a href="mailto:umidarakhimova34@gmail.com" target='_blank'>Send A Message </a>
          </article>

          <article className='contact__option'>
              <RiTelegramLine className='contact__option-icon'/>
              <h4>Telegram</h4>
              <h5>+998 97 440 30 34</h5>
              <a href="https://t.me/XCBsU" target='_blank'>Send A Message </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact