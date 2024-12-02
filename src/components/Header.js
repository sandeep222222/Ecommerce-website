import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="container">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;