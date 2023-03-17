import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import CustomModal from '../customModal';

function ShowTeamPlayers(playerArr) {
    const [showModal, setShowModal] = useState(false);
    const teamName = 'RCB';
    // console.log(playerArr.players,'playerArr')

    const handleShow = () => setShowModal(true);
    
    const submitModal = () => {
        setShowModal(false);
    }
    const showPlayers = () => {
        console.log('show players/..', playerArr);
        setShowModal(true);
    }
    return (
        <div>
            <button className='btn btn-outline-dark' onClick={showPlayers}>View Players</button>
            <CustomModal footer={false} header={true} visible={showModal} showModal={showModal} setShowModal={setShowModal} title={`${teamName} Players`} onSubmitModal={submitModal}>
                <ListGroup as="ol" numbered>
                    
                    {playerArr.players.map(player=><ListGroup.Item as="li">{player.value}</ListGroup.Item>)}
                    
                </ListGroup>
            </CustomModal>
        </div>
    )
}

export default ShowTeamPlayers
