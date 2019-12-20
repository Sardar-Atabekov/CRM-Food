import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./navigation.css";

class Footer extends Component {
  render() {
    return (
      <nav className="footerComponent">
        <ul className="footerComponent">
          {/* <li className="nav-item">
            <Link to={"/sales"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/cook"} className="nav-link">
              Кухня
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/barmen"} className="nav-link">
              Бар
            </Link>
          </li> */}
        </ul>
        <span className="copyright">Copyright © 2019 Neobis</span>
      </nav>
    );
  }
}

export default Footer;
