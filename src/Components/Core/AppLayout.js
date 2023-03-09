import { useSelector } from "react-redux";
import { useNetworkStatus } from "Hooks/NetworkStatus";
import PlayerRecords from "PlayerRecords";
import Addplayer from "Addplayer";






const AppLayout = ({ isAuthenticated, children }) => {

  const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();

  return (
    <>
   <Addplayer/>
      <PlayerRecords/>
{/*       
     error Msg:{errorMsg}
     networkStatus:{networkStatus? "online ":"offline"} */}
    {children}

    </>
  );
};

export default AppLayout;


{/* error Msg: {errorMsg}
network status: {networkStatus ? "online" : "offline"} */}

{/* {children} */}
