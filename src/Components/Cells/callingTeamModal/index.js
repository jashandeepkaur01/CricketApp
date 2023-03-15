import CustomModal from 'Components/Atoms/customModal'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTeamData } from 'Redux/Actions/loginActions';
import TeamForm from '../addTeamForm'

export default function CallingTeamModal({ visible, showModal, setShowModal, title, allPlayers, teamData, setTeamData, players, setPlayers, captain, setCaptain }) {
    const dispatch = useDispatch();
    const [playerName,setPlayerName] = useState([]);
    const submitModal = () => {
        // setTeamData({...teamData,
        //   teamPlayers:players
        // })
        console.log(players,'players calling team modal')
        players.map(singlePlayer=>{
            console.log(singlePlayer.value);
            setPlayerName([...playerName,singlePlayer.value]);
        })
        dispatch(addTeamData(teamData))
        setShowModal(false);
    }
    return (
        <div>

            <CustomModal visible={visible} showModal={showModal} setShowModal={setShowModal} title={title} onSubmitModal={submitModal}>
                <TeamForm allPlayers={allPlayers} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain={captain} setCaptain={setCaptain} />
            </CustomModal>
        </div>
    )
}
