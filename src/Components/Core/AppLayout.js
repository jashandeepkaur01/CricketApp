import { useSelector } from "react-redux";

import { useNetworkStatus } from "Hooks/NetworkStatus";
import PlayerRecords from "PlayerRecords";
import Modal from "Modal";
import Input from "Input";
const AppLayout = ({ isAuthenticated, children }) => {
  const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();

  return (
    <>
    <Modal title="Modals">
   <Input/>
    </Modal>
      <PlayerRecords/>
      
    </>
  );
};

export default AppLayout;

{/* error Msg: {errorMsg}
network status: {networkStatus ? "online" : "offline"} */}

{/* {children} */}