import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {

const [activeNav, setActiveNav] = useState(' ')

  return (
    <nav>
        <a href="#" className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
        <a href="#about"> <AiOutlineUser/> </a>
        <a href="#experience"> <BiBook/> </a>
        <a href="#contact"> < BiMessageSquareDetail/> </a>
    </nav>
  )
}

export default Nav