import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import cricketLogo from '../../../Assets/Images/cricketLogo.png'

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
                <Link className="nav-link " to="/showPlayer">
                  Show Player
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/showTeam">
                  Show Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/selectTeam">
                  Select Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/scheduleMatch">
                  Schedule Match
                </Link>
              </li>
              <li className="nav-item nav-login">
                <Link className="nav-link " to="/login">
                  Login
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
