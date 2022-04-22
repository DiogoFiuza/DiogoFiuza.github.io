import React from "react";
import hand from '../imagens/hand.png'
import "../styles/Footer.css"
import { BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

export default function Footer(){
  return(
    <>
      <h1 className="title-contact" id="Contacts">Contact Me</h1>
      <hr className="line_below_title" />
      <section className="contact-container">
        <a href="https://github.com/DiogoFiuza" target="_blank" className="contact-box" rel="noreferrer">
          <BsGithub className="contact-icon rotate-center" />
        </a>
        <a href="https://www.linkedin.com/in/diogo-fiuza/" target="_blank" className="contact-box" rel="noreferrer" >
          <BsLinkedin className="contact-icon rotate-center" /></a>
        <a href="https://www.instagram.com/fiuzadiogo/" target="_blank" className="contact-box shadow-drop-2-lr" rel="noreferrer" >
          <BsInstagram className="contact-icon rotate-center" />
        </a>
      </section>
      <img className="hand-image" src={ hand } alt="Rock'n roll hand" />
      <footer><p>Criado por Diogo Fiuza </p></footer>
    </>
  )
}