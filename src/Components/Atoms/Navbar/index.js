import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import cricketLogo from "../../../Assets/Images/cricketLogo.png";
import { useSelector } from "react-redux";
function Navbar() {
  const loggedInPlayer = useSelector(
    (state) => state.loginReducer.loggedInPlayer
  );

  return (
    <div className="navouter">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fs-5 ">
        <div className="container-fluid">
          <img className="navimg" alt="logo" src={cricketLogo} />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink
                  exact={true}
                  className="nav-NavLink"
                  activeClassName="active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-NavLink"
                  activeClassName="active"
                  to="/showPlayer"
                >
                  Show Player
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-NavLink "
                  activeClassName="active"
                  to="/showTeam"
                >
                  Show Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " activeClassName="active" to="/pastMatches">
                  Matches
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-NavLink "  activeClassName="active" to="/selectTeam">
                  Select Team
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink  className="nav-NavLink " activeClassName="active" to="/scheduleMatch">
                  Schedule Match
                </NavLink>
              </li> */}
              {!loggedInPlayer ? (
                <li className="nav-item nav-login">
                  <NavLink className="nav-NavLink " to="/login">
                    Login
                  </NavLink>
                </li>
              ) : null}
              {loggedInPlayer ? (
                <li className="nav-item nav-login">
                  <NavLink className="nav-NavLink " to="/logout">
                    Logout
                  </NavLink>
                </li>
              ) : null}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import './style.css'
// import cricketLogo from '../../../Assets/Images/cricketLogo.png'
// import { useSelector } from "react-redux";
// function Navbar() {
//   const loggedInPlayer = useSelector((state) => state.loginReducer.loggedInPlayer);
//   return (
//     <div className="navouter">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fs-5 ">
//         <div className="container-fluid">
//           <img className="navimg" alt="logo" src={cricketLogo} />
//           <div className="collapse navbar-collapse"  >
//             <ul className="navbar-nav ">
//               <li className="nav-item ">
//                 <Link className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link " to="/showPlayer">
//                   Show Player
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link " to="/showTeam">
//                   Show Team
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link " to="/selectTeam">
//                   Select Team
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link " to="/scheduleMatch">
//                   Schedule Match
//                 </Link>
//               </li>
//               {!loggedInPlayer?<li className="nav-item nav-login">
//                 <Link className="nav-link " to="/login">
//                   Login
//                 </Link>
//               </li>:null}
//               {loggedInPlayer?<li className="nav-item nav-login">
//                 <Link className="nav-link " to="/logout">
//                   Logout
//                 </Link>
//               </li>:null}

//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
