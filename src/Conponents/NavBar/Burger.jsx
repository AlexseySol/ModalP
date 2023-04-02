import React from "react";
import { NavLink } from "react-router-dom";
import "../../mixin.scss"






const Burger = ({ onBurger,setOnBurger }) => {
  let normalBurger = "burger__wrapper_item";
  let activBurger = "burger__wrapper_item activ_menu_burger";

  return (
    <div className={`burger__wrapper ${onBurger ? "open" : ""}`}>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activBurger : normalBurger
        }
        onClick={({ isActive }) =>
        isActive ? false : setOnBurger(false)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activBurger : normalBurger
        }
        onClick={({ isActive }) =>
          isActive ? false : setOnBurger(false)}
        to="/Project"
      >
        Project
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? activBurger : normalBurger
        }
        onClick={({ isActive }) =>
        isActive ? false : setOnBurger(false)}
        to="/Other"
      >
        Other
      </NavLink>
      <div className="burger_social">
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

export default Burger;
