import React from "react";
import "./Header.scss";
import burger from "./burger.svg"




export const Header = () => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setText('Alexsey Solyanoy');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
 
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__navbar">
          <div className="navbar__burger">
      <img className="burger" src={burger} alt="" /> 
            <a href="#">Portfolio</a>
            <a href="#">Other</a>
          </div>
          <ul className="header__socBlock">
            <li>
              <a href="#">Telegramm</a>
              <a href="#">Instagramm</a>
              <a href="#">FaceBoock</a>
            </li>
          </ul>
        </div>
        <div className="block__backgr">
          <div className="header__backgr_left"></div>
          <div className="header__backgr_right"></div>
        </div>
        <h1 className="header_title">{text}</h1>
      </div>
    </header>
  );
};
