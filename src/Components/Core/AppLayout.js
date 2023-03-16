import { useSelector } from "react-redux";

import Navbar from "Components/Atoms/Navbar";

import { useNetworkStatus } from "Hooks/NetworkStatus";


const AppLayout = ({ isAuthenticated, children }) => {
  // const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();

  return (
    <>
      <Navbar/>
    
      {children}
    </>
  );
};

export default AppLayout;


