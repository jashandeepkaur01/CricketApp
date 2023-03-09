import { Modal } from 'Components/Modal';
import React, { useState } from 'react'
// import 'AddTeam.css'
function AddTeam() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const title = "Add record";
    const [teamsData, setTeamsData] = useState({
        TeamNo: "",
        TeamName: ""
    });
    const handleShowModal = () => {
        console.log(isModalVisible);
        setIsModalVisible(true);
    };
    const handleSubmitModal = () => {
        // console.log('playerData : ', data);
        setIsModalVisible(!isModalVisible);
    }
    const handleAddTeam = () => {

    }
    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={handleShowModal}>Add Team</button>
                <Modal visible={isModalVisible} title={title} setIsModalVisible={setIsModalVisible} submitModal={handleSubmitModal}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ullam aspernatur optio, temporibus impedit sunt. Repudiandae non, necessitatibus fugiat officia sit maxime quos?</p>
                </Modal>
              
            </div>
        </div>
    )
}

export default AddTeam