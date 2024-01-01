import React from "react";
import logo from "../logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header--brand">
        <img src={logo} className="header--logo"></img>
        <p className="header--title">Meme Generator</p>
      </div>

      <p className="header--text">React Course - Project 3</p>
    </header>
  );
};

export default Header;
