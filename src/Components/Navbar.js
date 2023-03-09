import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <div className="navouter">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fs-5 ">
        <div className="container-fluid">
          <img className="navimg" alt="logo" src="https://o.remove.bg/downloads/34aa9599-f78d-4a40-8644-29ea90b4c434/cricket-clipart-transparent-cricket-batsman-logo-11563308330ptze4bbvyh-removebg-preview.png" />
          <div className="collapse navbar-collapse"  >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/addPlayer">
                  Add Player
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/addTeam">
                  Add Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/scheduleMatch">
                  Schedule Match
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
