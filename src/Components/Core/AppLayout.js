// import { useSelector } from "react-redux";

import Navbar from "Components/Atoms/Navbar";

// import { useNetworkStatus } from "Hooks/NetworkStatus";


const AppLayout = ({ isAuthenticated, children }) => {
  // const errorMsg = useSelector((state) => state.error.msg);
  // const networkStatus = useNetworkStatus();

  return (
    <>
      <Navbar/>
      {/* error Msg: {errorMsg} */}
      {/* <div className="d-flex justify-content-end w-100">
     {networkStatus ? <label className=" m-2 px-4 py-2 rounded round-4 bg-success text-white">Online</label> : <label className=" m-2 px-4 py-2 bg-danger  rounded round-4  text-white">Offline</label>} */}
      {/* </div> */}
      {children}
    </>
  );
};

export default AppLayout;
