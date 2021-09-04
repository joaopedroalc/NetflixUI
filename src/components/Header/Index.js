import React from 'react';
import Logo from '../../images/netflix_logo.png';
import Avatar from '../../images/avatar.png';
import './Header.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
  return(
    <header className={black ? 'black': ''}>
      <div className="header--logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={Avatar} alt="logo" />
        </a>
      </div>
    </header>
  )
}