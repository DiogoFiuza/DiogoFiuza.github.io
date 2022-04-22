import React from 'react';
import '../styles/Apresentation.css';
import avatar from '../imagens/avatar.png';

function Apresentation() {
  return (
    <div className="apresentation">
      <div className="apresentation-container">
        <h1 className="hello_word">
          HELLO
          <br />
          WORLD.
        </h1>
        <p className="i_am">I’m Diogo Fiuza, Web Developer</p>
      </div>
      <div className="main-retangle">
        <div className="retangle_1" />
        <div className="retangle_2" />
        <img className="avatar" src={avatar} alt="profile" />
      </div>
    </div>
  );
}

export default Apresentation;
