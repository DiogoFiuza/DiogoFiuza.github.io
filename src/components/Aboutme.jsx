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
        <h1 className="aboutMe_title">About Me</h1>
        <hr className='line_below_title' />
      <div className='aboutMe_container'>
          <div data-aos="fade-up" className='aboutMe'>
            <img src={ profile_pic } alt="my_picture" />
            <span className="name">Diogo Fiuza Palmeira</span>
            <span className="title">Web Developer Full Stack Júnior</span>
          </div>
          <hr className='line_divides_text'/>
          <p className="aboutme_text">Sou um Dev de 24 anos natural de Brasília, em busca de desafios que possam me desenvolver. Atualmente sou formado em Administração, faço graduação em Análise e Desenvolvimento de Sistemas, curso de desenvovimento Full Stack na <a href='https://www.betrybe.com/' alt='site_da_trybe' target="_blank" rel="noreferrer">Trybe</a> e inglês na Wise up. Gosto de aprender e de criar conexões, nas horas vagas gosto de bater uma bolinha e jogar uns games. 
          <br />
          <button className='curriculo_button'>Currículo <img className='download_icon' src={download_icon} alt="download" /> </button>
          </p>
      </div>
    </>
  );
}

export default Aboutme;