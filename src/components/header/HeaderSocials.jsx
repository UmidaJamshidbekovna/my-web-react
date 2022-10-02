import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/umida-rakhimova-08b037222" target='_blank'> <BsLinkedin/> </a>
        <a href="https://github.com/UmidaJamshidbekovna" target='_blank'> <BsGithub/> </a>
        <a href="https://t.me/XCBsU" target='_blank'> <BsTelegram/> </a>
    </div>
  )
}

export default HeaderSocials