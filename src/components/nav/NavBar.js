import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <div className="logo-and-title">
        <picture>
          <img
            src={require("./Logo 2 final.png")}
            alt="Auto Focus Garage Logo"
          />
        </picture>
        <h1 className="site-title">
          Auto Focus Garage
          <h5 className="site-title">Your car spotting database</h5>
        </h1>
      </div>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cars">
              Garage
            </Link>
          </li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
