import { useSelector } from "react-redux";
<<<<<<< HEAD

import Navbar from "Components/Atoms/Navbar";

import { useNetworkStatus } from "Hooks/NetworkStatus";


const AppLayout = ({ isAuthenticated, children }) => {
  // const errorMsg = useSelector((state) => state.error.msg);
=======
import { useNetworkStatus } from "Hooks/NetworkStatus";

import SelectTeam from "Views/TeamComponent";






const AppLayout = ({ isAuthenticated, children }) => {

  const errorMsg = useSelector((state) => state.error.msg);
>>>>>>> teamComponent
  const networkStatus = useNetworkStatus();

  return (
    <>
<<<<<<< HEAD
      <Navbar/>
      {/* error Msg: {errorMsg} */}
      <div className="d-flex justify-content-end w-100">
     {networkStatus ? <label className=" m-2 px-4 py-2 text-success">Online</label> : <label className=" m-2 px-4 py-2  text-danger">Offline</label>}
      </div>
=======

      <SelectTeam/>
      error Msg:{errorMsg}
      networkStatus:{networkStatus ? "online " : "offline"}
>>>>>>> teamComponent
      {children}
    </>
  );
};

export default AppLayout;


{/* error Msg: {errorMsg}
network status: {networkStatus ? "online" : "offline"} */}

{/* {children} */}
