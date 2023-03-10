import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import cricketLogo from '../Assets/Images/cricketLogo.png';

function Navbar() {
  return (
    <div className="navouter">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fs-5 ">
        <div className="container-fluid">
          <img className="navimg" alt="logo" src={cricketLogo} />
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
