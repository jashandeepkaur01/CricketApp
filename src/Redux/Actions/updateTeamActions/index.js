import { UPDATETEAM } from "./actionStates"
export const updatePlayersTeam=(data)=>{
    // console.log('updateTeamData Action...',data);
    // console.log(' Action...',allPlayersData);
    return {
        type :UPDATETEAM,
        data
       
    }
}
// export const setData=(data)=>{
//     return {
//         type :SETDATA,
//         data
       
//     }
// }
