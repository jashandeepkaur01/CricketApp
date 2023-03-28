import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./style.css";
import cricketLogo from "../../../Assets/Images/cricketLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import { setLogin } from "Redux/Actions/loginActions";
import LogoutModal from "../LogoutModal";
// import LogoutModal from "../LogoutModal";
// import LogoutModal from "../LogoutModal/index.js/index"

function Navbar() {
  const [show, setShow] = useState(false);
  const loggedInPlayer = useSelector(
    (state) => state.login.loggedInPlayer
  );

  console.log(loggedInPlayer, 'loggedInPlayer')
  const dispatch = useDispatch();
  // const navigate = useHistory();
  const handleShow = () => setShow(true);

  function handleLogout() {
    handleShow();
    // alert('Logout..?');
    // navigate.push("/");
    // dispatch(setLogin(null));
  }

  return (
    <div className="navouter">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary fs-5 ">
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

                {/* <li className="nav-item">
                <NavLink  className="nav-NavLink " activeClassName="active" to="/scheduleMatch">
                  Schedule Match
                </NavLink>
              </li> */}


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
                    {/* <NavLink className="nav-NavLink " to="/logout">Logout
                    </NavLink> */}
                    <span className="nav-NavLink" onClick={handleLogout}>Logout</span>
                    {/* <Button variant="primary" onClick={handleShow}>
                      Launch static backdrop modal
                    </Button> */}
                    {/* <NavLink className="nav-NavLink"  to='/' onClick={handleShow}> Logout</NavLink> */}
                    {/* <p className="nav-NavLink" onClick={()=>alert('hi')}>Logout</p> */}
                    {/* <a class="nav-NavLink" onClick={handleShow}>Logout</a> */}
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <LogoutModal/>
    </div>
  );
}

export default Navbar;
