import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-navigation">
      <ul id="header-list">
        <li>
          <Link to="/">SRC CODE</Link>
        </li>
        <li>
          <Link to="/about">REPORT BUGS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
