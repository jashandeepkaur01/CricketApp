import CustomModal from 'Components/Atoms/customModal'
import React from 'react'
import TeamForm from '../addTeamForm'

export default function CallingTeamModal({visible,showModal,setShowModal,title,allPlayers,teamData,setTeamData,players,setPlayers,captain, setCaptain}) {
    return (
        <div>

            <CustomModal visible={visible} showModal={showModal} setShowModal={setShowModal} title={title}>
                <TeamForm allPlayers={allPlayers} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain={captain} setCaptain={setCaptain} />
            </CustomModal>
        </div>
    )
}
