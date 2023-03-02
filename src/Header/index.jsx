import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/">
              <a href="home" className="nav-item nav-link">
                Home
              </a>{" "}
            </Link>
            <Link to="/pricing">
              <a href="pricing" className="nav-item nav-link">
                Pricing
              </a>{" "}
            </Link>
            <Link to="/gallary">
              {" "}
              <a href="gallary" className="nav-item nav-link">
                Gallary
              </a>
            </Link>
            <Link to="/contact">
              {" "}
              <a href="contact" className="nav-item nav-link">
                Contact
              </a>
            </Link>
            <Link to="/appfeature">
              {" "}
              <a href="appfeature" className="nav-item nav-link">
                App Feature
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
