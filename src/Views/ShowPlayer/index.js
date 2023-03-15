
import CustomTable from 'Components/Cells/customTable';
import { useSelector } from 'react-redux'


// const arr = ["Player name", "Player PhoneNo", "Player Age", "JerseyyNo", "PlayerCountry", "sixes", "fours", "fiftys", "Hundreds", "Score", "Avg score", "inings played"];
const arr=[
  {
  label:"Name",
  key:"Name"
  },
  {
    label:"Age",
    key:"Age"
    },
    {
      label:"JerseyNo",
      key:"JerseyNo"
      },
      {
        label:"PhoneNo",
        key:"PhoneNo"
        },
        {
          label:"Country",
          key:"Country"
          },
          {
            label:"Fours",
            key:"Fours"
            },
            {
              label:"Sixes",
              key:"Sixes"
              },{
                label:"Half Centuries",
                key:"Fifties"

              },
              {
                label:"Centuries",
                key:"Hundreds"
              },
              {
                label:"Total Score",
                key:"Score"
              },
              {
                label:"Avg score",
                key:"AvgScore"
              },
              {
                label:"Innings",
                key:"InningsPlayed"
              }
]
function Main() {
const data = useSelector((state) => state.loginReducer.players);

return (
    <div>
      <CustomTable tableContent={data} headingDetails={arr} />
    </div>
  )
}

export default Main
