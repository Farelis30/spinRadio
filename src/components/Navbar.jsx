import React, { useState } from "react";
import "./Navbar.css";
import { BsList, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = (e) => {
    e.preventDefault();
    setSidebar(!sidebar);
  };

  return (
    <div className="bg-primary-1">
      <div className="container">
        <ul className="navbar-container animate__animated animate__slideInUp">
          <a href="/" className="menu-link" onClick={showSidebar}>
            <li className="menu">
              <BsList />
              <p>MENU</p>
            </li>
          </a>

          <li className="navbar-list">
            <Link to="/home">LISTEN</Link>
          </li>
          <li className="navbar-list">
            <Link to="/watch">WATCH</Link>
          </li>
          <li className="navbar-list">
            <Link to="/news">NEWS</Link>
          </li>
          <li className="navbar-list">
            <a href="/home">CHART</a>
          </li>
          <li className="navbar-list">
            <a href="/home">EVENTS</a>
          </li>
        </ul>
      </div>
      <div
        className={
          sidebar === false ? "sidebar" : "sidebar-active animate__slideInLeft"
        }
      >
        <div className="sidebar-container">
          <BsChevronLeft className="back-icons" onClick={showSidebar} />
          <ul className="sidebar-list">
            <li className="sidebar-items">
              <Link className="sidebar-link" to="/home">
                LISTEN
              </Link>
            </li>
            <li className="sidebar-items">
              <Link className="sidebar-link" to="/watch">
                WATCH
              </Link>
            </li>
            <li className="sidebar-items">
              <Link className="sidebar-link" to="/news">
                NEWS
              </Link>
            </li>
            <li className="sidebar-items">
              <Link className="sidebar-link" to="/home">
                CHART
              </Link>
            </li>
            <li className="sidebar-items">
              <Link className="sidebar-link" to="/home">
                EVENTS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
