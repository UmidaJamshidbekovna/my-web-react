import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'></a>

        <ul className='permalinks'>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
        </ul>

        <div className="footer__socials">

          <a href="https://linkedin.com/in/umida-rakhimova-08b037222" target='_blank'> <BsLinkedin/> </a>
          <a href="https://github.com/UmidaJamshidbekovna" target='_blank'> <BsGithub/> </a>
         <a href="https://t.me/XCBsU" target='_blank'> <BsTelegram/> </a>

        </div>

        <div className="footer__copyright">
            <small>&copy; Rakhimova Umida Profile.    All right reserved.</small>
        </div>
    </footer>
  )
}

export default Footer