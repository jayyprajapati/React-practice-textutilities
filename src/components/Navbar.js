import React from "react";
import { Link } from "react-router-dom";
import logoimage from "../imgs/logo1.png";
import "./nav.css";
// import props from "react";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        style={{ color: props.mode === "dark" ? "#FEFBF6" : "#2C3333" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logoimage} alt="logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkMode"
                onClick={props.changeMode}
              />
              <label className="form-check-label" htmlFor="darkMode">
                Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
