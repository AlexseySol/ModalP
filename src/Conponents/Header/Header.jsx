import React from "react";
import "./Header.scss";
import burger from "./burger.svg";

export const Header = () => {
 /*  const [text, setText] = React.useState(""); */

  let arrayImg =[
    <img  className="img_anim"   src= "/img/header1.png"  alt="" /> ,
    <img  className="img_anim1"  src= "/img/header2.png"  alt="" /> ,
    <img  className="img_anim2"  src= "/img/header3.png"  alt="" /> ,
  ]

  const [count, setCount] = React.useState(0);

/*   React.useEffect(() => {
    const timer = setTimeout(() => {
      setText("Alexsey Solyanoy");
    }, 4000);

    return () => clearTimeout(timer);
  }, []); */
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => (prev === arrayImg.length - 1 ? 0 : prev + 1));
    
    }, 6000);

    return () => clearInterval(intervalId);
  }, [count]);



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
          <div className="block__title">
            <h1 className="title">Alexsey Solyanoy</h1>
            <ul>
             <li>Height <span>177</span> </li>
             <li>Weight <span>76</span></li>
             <li>Age <span>27</span> </li>
             <li>shoe size <span>41</span> </li>
             <li>Bust-Waist-Hips <span>102-79-101</span></li>
            </ul>
          </div>
 
          {arrayImg[count]}

        </div>
      </div>
    </header>
  );
};
