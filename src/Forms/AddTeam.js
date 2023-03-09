import CustomTable from 'Components/Custom Components/Table/Table';
import { Modal } from '../Modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import 'AddTeam.css'
function AddTeam() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [allplayers, setAllPlayers] = useState([]);
    const title = "Add record";
    const [teamsData, setTeamsData] = useState({
        TeamNo: "",
        TeamName: ""
    });
    useEffect(() => {
        let s = [];
        axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json").then(val => {

            for (let key in val.data) {
                s.push(val.data[key]);
                console.log(s);
            }
            setAllPlayers(s)
        })
        let playerHeading = [];
        for (let heading of allplayers) {
            console.log(heading, 'heading');
        }
    }, [])




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
                <CustomTable headingDetails={['JerseyNo', 'PlayerCountry', 'playerage', 'playername']} tableContent={allplayers} />
            </div>
        </div>
    )
}

export default AddTeam