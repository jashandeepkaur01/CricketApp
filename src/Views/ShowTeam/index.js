import React from "react";
import { useSelector } from "react-redux";
import CustomTable from "Components/Cells/customTable";
function ShowTeam() {
  const  data = useSelector((state) => state.data.teamData);
  
  const teamHeadings = [
    {
      label: "TeamName",
      key: "teamName",
    },
    {
      label: "TeamCaptain",
      key: "teamCaptain",
    },
    {
      label: "TeamType",
      key: "teamType",
    },
    {
      label: "TeamPlayers",
      key: "teamPlayers",
    },
  ];

  console.log("hello",data);
  return (
    <>
      {/* {data.map((e) => (
        <h2>{e.teamCaptain}</h2>
      ))} */}
      <CustomTable tableContent={data} headingDetails={teamHeadings} />
    </>
  );
}

export default ShowTeam;
