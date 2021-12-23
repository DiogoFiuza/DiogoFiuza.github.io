import React from "react";
import '../styles/Header.css';

function Header(){
  const logo = "<D/>"
  return (
    <nav>
      <h1 className="logo rotate-center">{ logo }</h1>
      <ul className='menu'>
        <li>About me</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}

export default Header;
