import { useSelector } from "react-redux";

import Navbar from "Components/Atoms/Navbar";

import { useNetworkStatus } from "Hooks/NetworkStatus";


const AppLayout = ({ isAuthenticated, children }) => {
  // const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();

  return (
    <>
      <Navbar/>
      {/* error Msg: {errorMsg} */}
      <div className="d-flex justify-content-end w-100">
     {networkStatus ? <label className=" m-2 px-4 py-2 text-success">Online</label> : <label className=" m-2 px-4 py-2  text-danger">Offline</label>}
      </div>
      {children}
    </>
  );
};

export default AppLayout;
