import React from 'react'
import './styles/Footer.css'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiTwitter, FiPhone } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineHome, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-socials'>
            <a href='https://github.com/dawid628' rel='noreferrer' target="_blank"><AiFillGithub className='footer-icon'/></a>
            <a href='https://github.com/dawid628' rel='noreferrer' target="_blank"><FiTwitter className='footer-icon'/></a>
            <a href='https://www.facebook.com/dawid.metelski/' rel='noreferrer' target="_blank"> <RiFacebookCircleLine className='footer-icon'/></a>
            <a href='https://www.linkedin.com/in/dawid-metelski-805709186/' rel='noreferrer' target="_blank"><AiOutlineLinkedin className='footer-icon'/></a>
        </div>
        <div className='footer-links'>
            <a href='https://www.google.com/' target='_blank' rel='noreferrer'>Policy</a>
            <a href='https://www.google.com/' target='_blank' rel='noreferrer'>Terms of Use</a>
            <p>Copyright © 2023, PokeWiki</p>
        </div>
        <div className='contact'>
            <p>Contact me</p>
            <ul>
                <li><AiOutlineHome/> Białystok, Poland</li>
                <li><AiOutlineMail/> dawidmetelski00@gmail.com</li>
                <li> <FiPhone/> +48 536383528</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer