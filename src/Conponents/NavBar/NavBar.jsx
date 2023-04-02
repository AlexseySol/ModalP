import "./NavBar.scss";

import Burger from "./Burger";
import { ReactComponent as BBurger } from "./burger.svg";
import { NavLink } from "react-router-dom";

import { ReactComponent as Close } from "./close.svg";
import React from "react";



export const NavBar = () => {
  const [onBurger, setOnBurger] = React.useState(false);

  let normal = "burger__item";
  let activ = "burger__item activ_menu";

  return (
    <div className="header__navbar">
      <div className="navbar__burger">
        <div className="burger" onClick={() => setOnBurger((prev) => !prev)}>
          {onBurger ? <Close /> : <BBurger />}
        </div>
        <Burger onBurger={onBurger} setOnBurger={setOnBurger} />
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activ : normal
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activ : normal
          }
          to="/Project"
        >
          Project
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activ : normal
          }
          to="/Other"
        >
          Other
        </NavLink>
      </div>
      <h1 className="header_title">Portfolio</h1>

      <div className="header__socBlock">
        <a href="https://t.me/Memory_al" target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a
          href="https://www.instagram.com/a.solyanoy/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/alexsey-solyanoy-2b1681248/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};
