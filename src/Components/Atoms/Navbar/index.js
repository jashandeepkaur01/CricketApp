import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import cricketLogo from '../../../Assets/Images/cricketLogo.png'

import { useSelector } from "react-redux";

import Nav from 'react-bootstrap/Nav';
import { setToken } from "Redux/Actions/loginActions";
import { useDispatch } from "react-redux";

import NavDropdown from 'react-bootstrap/NavDropdown';




function Navbar() {
  const dispatch=useDispatch()
  const tokenData = useSelector((state) => state.loginReducer.token);

  const token=tokenData.length
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
              {token?<li className="nav-item">
                <Link className="nav-link " to="/selectTeam">
                  Select Team
                </Link>
              </li>:null}
              {token? <li className="nav-item">
                <Link className="nav-link " to="/scheduleMatch">
                  Schedule Match
                </Link>
              </li>:null}
           

              {!token?<li className="nav-item nav-login">
                <Link className="nav-link " to="/login">
                  Login
                </Link>
              </li>:null}
              {token?<li className="nav-item nav-login">
              <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={tokenData[0].Name}
              menuVariant="dark"
            >
              <NavDropdown.Item href="/" onClick={()=>dispatch(setToken([]))}>logout</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
              </li>:null}
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
