import { useSelector } from "react-redux";
import { useNetworkStatus } from "Hooks/NetworkStatus";

import SelectTeam from "Views/TeamComponent";






const AppLayout = ({ isAuthenticated, children }) => {

  const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();

  return (
    <>

      <SelectTeam/>
      error Msg:{errorMsg}
      networkStatus:{networkStatus ? "online " : "offline"}
      {children}
    </>
  );
};

export default AppLayout;


{/* error Msg: {errorMsg}
network status: {networkStatus ? "online" : "offline"} */}

{/* {children} */}
