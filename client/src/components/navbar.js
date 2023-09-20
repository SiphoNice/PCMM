import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="CSRI Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Incidents
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Mines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Production Figures
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
