
import CustomTable from 'Components/Cells/customTable';
import { useSelector } from 'react-redux'


const arr = ["Player name", "Player PhoneNo", "Player Age", "JerseyyNo", "PlayerCountry", "sixes", "fours", "fiftys", "Hundreds", "Score", "Avg score", "inings played"];
function Main() {
const data = useSelector((state) => state.data.players);

return (
    <div>
      <CustomTable tableContent={data} headingDetails={arr} />
    </div>
  )
}

export default Main
