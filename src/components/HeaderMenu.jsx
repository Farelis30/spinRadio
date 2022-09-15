import React from "react";
import "./HeaderMenu.css";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <div className="header-box animate__animated animate__slideInDown">
      <div className="header-container">
        <Link to="/" className="logo-container-link">
          <div className="logo-container">
            <p>SPIN RADIO</p>
          </div>
        </Link>
        <div>
          <div className="user-container">{<BsFillPersonFill />}</div>
        </div>
      </div>
    </div>
  );
}
