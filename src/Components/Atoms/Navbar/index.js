import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import cricketLogo from "../../../Assets/Images/cricketLogo.png";
import { useDispatch, useSelector } from "react-redux";
import LogoutModal from "../LogoutModal";

function Navbar() {
  const [show, setShow] = useState(false);
  const loggedInPlayer = useSelector(
    (state) => state.login.loggedInPlayer
  );

  const dispatch = useDispatch();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function handleLogout() {
    handleShow();
  }

  return (
    <div className="navouter mb-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fs-5 ">
        <div className="container-fluid">
          <img className="navimg" alt="logo" src={cricketLogo} />
          <div className="collapse navbar-collapse d-flex justify-content-between">
            <div className="nav-leftSide">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <NavLink exact={true} className="nav-NavLink" activeClassName="active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-NavLink" activeClassName="active" to="/showPlayer">
                    Show Player
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-NavLink " activeClassName="active" to="/showTeam">
                    Show Team
                  </NavLink>
                </li>
                {loggedInPlayer ? (
                  <li className="nav-item">
                    <NavLink className="nav-NavLink " activeClassName="active" to="/selectTeam">
                      Select Team
                    </NavLink>
                  </li>
                ) : null}


              </ul>
            </div>
            <div className="nav-rightSide">
              <ul className="navbar-nav ">

                {loggedInPlayer ? (
                  <li className="nav-item">
                    <NavLink className="nav-NavLink " activeClassName="active" to={'/playerInfo/' + loggedInPlayer.Name}>
                      {loggedInPlayer.Name}
                    </NavLink>
                  </li>
                ) : null}
                {!loggedInPlayer ? (
                  <li className="nav-item nav-login">
                    <NavLink className="nav-NavLink " to="/login">
                      Login
                    </NavLink>
                  </li>
                ) : null}
                {loggedInPlayer ? (
                  <li className="nav-item nav-login">
                    <span className="nav-NavLink logoutBtn" onClick={handleLogout}>Logout</span>
                  </li>
                ) : null}

              </ul>
            </div>
          </div>
        </div>
      </nav>
      {show ?
        <LogoutModal handleClose={handleClose} title='Logout' />
        : null
      }
    </div>
  );
}

export default Navbar;
