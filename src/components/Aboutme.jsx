import React from "react";
import '../styles/Aboutme.css'
import profile_pic from '../imagens/profile-pic.png'
import download_icon from '../imagens/download_icon.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Aboutme(){
  return (
    <>
        <h1 className="aboutMe_title" id="AboutMe">About Me</h1>
        <hr className='line_below_title' />
      <div className='aboutMe_container'>
          <div data-aos="fade-up" className='aboutMe'>
            <img src={ profile_pic } alt="my_picture" />
            <span className="name">Diogo Fiuza Palmeira</span>
            <span className="title">Web Developer Full Stack Júnior</span>
          </div>
          <hr className='line_divides_text'/>
          <div className="aboutme_text_container">
            <p className="aboutme_text">Sou um Dev de 24 anos natural de Brasília, em busca de desafios que possam me desenvolver. Atualmente sou formado em Administração, faço graduação em Análise e Desenvolvimento de Sistemas, curso de desenvovimento Full Stack na Trybe e inglês na Wise up. Gosto de aprender e de criar conexões, nas horas vagas gosto de bater uma bolinha e jogar uns games. 
            <br />
            </p>
            <a className='curriculo_button' href="Currículo - Diogo.pdf" download>Currículo <img className='download_icon' src={download_icon} alt="download" /> </a>
          </div>
      </div>
    </>
  );
}

export default Aboutme;