import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="footer-navigation">
      <ul id="footer-list">
        <li>
          <Link to="/lander">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/invite">INVITE</Link>
        </li>
        <li>
          <Link to="/support">SUPPORT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
