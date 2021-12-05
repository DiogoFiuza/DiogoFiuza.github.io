import React from "react";
import '../styles/Apresentation.css'
import avatar from '../imagens/avatar.png'

function Apresentation(){
  return (
    <>
      <h1 className="hello_word">HELLO WORLD.</h1>
      <div className="retangle_1" />
      <div className="retangle_2" />
      <img className="avatar" src={ avatar } alt="profile"/>
      <p className="i_am">I’m Diogo Fiuza, Web Developer</p>
    </>
  );
}

export default Apresentation;