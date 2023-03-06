import { useSelector } from "react-redux";

import { useNetworkStatus } from "Hooks/NetworkStatus";

const AppLayout = ({ isAuthenticated, children }) => {
  const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();

  return (
    <>
      error Msg: {errorMsg}
      network status: {networkStatus ? "online" : "offline"}
      {children}
    </>
  );
};

export default AppLayout;
