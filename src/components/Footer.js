import React from 'react'
import './styles/Footer.css'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiTwitter, FiPhone } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineHome, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <footer className='top'>
        <p>Dawid Metelski</p>
        <div className='links'>
            <div>
                <h2>Links</h2>
                <a href='https://www.google.com/' target='_blank' rel='noreferrer'>Policy</a><br/>
                <a href='https://www.google.com/' target='_blank' rel='noreferrer'>Terms of Use</a><br/>
            </div>
            <div>
                <h2>Contact</h2>
                <p><AiOutlineHome/> Białystok, Poland</p>
                <p><AiOutlineMail/> dawidmetelski00@gmail.com</p>
                <p> <FiPhone/> +48 536383528</p>
            </div>
        </div>
        </footer>
        <footer className='bottom'>
            <div className='legal'>
                <span>Copyright © 2023, PokeSphere</span>
                <a>License</a>
            </div>
            <div className='links'>
            <a href='https://github.com/dawid628' rel='noreferrer' target="_blank"><AiFillGithub className='footer-icon'/></a>
            <a href='https://github.com/dawid628' rel='noreferrer' target="_blank"><FiTwitter className='footer-icon'/></a>
            <a href='https://www.facebook.com/dawid.metelski/' rel='noreferrer' target="_blank"> <RiFacebookCircleLine className='footer-icon'/></a>
            <a href='https://www.linkedin.com/in/dawid-metelski-805709186/' rel='noreferrer' target="_blank"><AiOutlineLinkedin className='footer-icon'/></a>
            </div>
        </footer>
        {/* <div className='footer-socials'>
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
        </div> */}

    </>
  )
}

export default Footer