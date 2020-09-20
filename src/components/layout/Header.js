import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-navigation">
      <ul>
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

export default Header;
