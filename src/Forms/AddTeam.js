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
                <div className="tableData">
                    <table className="table table-striped">
                        <thead className='table-primary'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@John</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AddTeam