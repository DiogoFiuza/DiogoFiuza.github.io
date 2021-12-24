import React from "react";
import hand from '../imagens/hand.png'
import "../styles/Footer.css"
import { BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

export default function Footer(){
  return(
    <>
      <h1 className="title-contact">Contact Me</h1>
      <hr className="line_below_title" />
      <section className="contact-container">
        <div className="contact-box shadow-drop-2-lr" ><BsInstagram className="contact-icon rotate-center" /></div>
        <div className="contact-box"> <BsGithub className="contact-icon rotate-center" /> </div>
        <div className="contact-box" ><BsLinkedin className="contact-icon rotate-center" /></div>
      </section>
      <img className="hand-image" src={ hand } alt="Rock'n roll hand" />
      <footer><p>Criado por Diogo Fiuza </p></footer>
    </>
  )
}