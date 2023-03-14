export const [teamData,setTeamData] = useState({
    teamName:"",
    teamType:"",
    teamPlayers:[],
    teamCaptain:"",
    
})

export const postData = (data=teamData,action)=>{
    console.log("reducer Called",action)
    switch(action.type){
        case "POSTDATA":
            return [action.data]
            
        default:
            return data;
    }
}