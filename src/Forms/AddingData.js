import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNetworkStatus } from "Hooks/NetworkStatus";
import CustomTable from "Components/Custom Components/Table/Table";

const AddingData = ({ isAuthenticated, children }) => {
  const [data, setData] = useState([])
  const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();
  const [heading, setHeading] = useState(["name", "surname"])

  const onClickHandle = () => {
    let f=[]
    axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/matches.json").then(val => {

      for (let key in val.data) {
        f.push(val.data[key])
        console.log(f,"fgedge")
        setData(f)
        
      }
    })
  }

  return (
    <>
      {/* error Msg:{errorMsg}
     networkStatus:{networkStatus? "online ":"offline"}
    {children} */}
      <button onClick={onClickHandle}>fghf</button>
      <CustomTable tableContent={data} headingDetails={heading} />
    </>
  );
};

export default AddingData;
