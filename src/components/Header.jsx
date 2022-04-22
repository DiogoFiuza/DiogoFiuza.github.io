import React from 'react';
import '../styles/Header.css';

function Header() {
  const logo = '<D/>';
  return (
    <header id="luxbar" className="luxbar-fixed nav">
      <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
      <div className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
        <ul className="luxbar-navigation">
          <li className="luxbar-header">
            <a href="#Apresentation" className="luxbar-brand logo">{logo}</a>
            <label
              className="luxbar-hamburger luxbar-hamburger-spin"
              id="luxbar-hamburger"
              htmlFor="luxbar-checkbox"
            >
              {' '}
              <span />
              {' '}

            </label>
          </li>
          <li className="luxbar-item"><a href="#AboutMe">About me</a></li>
          <li className="luxbar-item"><a href="#MyStacks">My Stacks</a></li>
          <li className="luxbar-item"><a href="#Projects">Projects</a></li>
          <li className="luxbar-item"><a href="#Contacts">Contacts</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
