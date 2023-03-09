import React from "react";
import { Modal } from "Components/Modal";
import { useState } from "react";
import Form from "./Form";
// import { InputField } from "Components/InputField";

export function AddPlayer() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const title = "Add record";
  // const content = "Add content";

  const [data, setData] = useState({
    playerNo: "",
    country: ""
  });

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmitModal = () =>{
    console.log('playerData : ', data);
    setIsModalVisible(!isModalVisible);
  }

  return (
    <div>
      <button
        type="button"
        id="btn"
        className="btn btn-primary"
        onClick={handleShowModal}
      >
        Add Player
      </button>
      <Modal visible={isModalVisible} title={title} setIsModalVisible={setIsModalVisible} submitModal={handleSubmitModal}>
        <Form data={data} setData={setData}/>
      </Modal>
    </div>
  );
}
