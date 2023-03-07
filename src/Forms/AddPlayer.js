import { InputField } from "Components/InputField";
import React from "react";
import { Modal } from "Components/Modal";
import { useState } from "react";

export function AddPlayer() {
  const [showModal, setShowModal] = useState(false);
  const title = "Add record";
  const content = "Add content";
  const [data, setData] = useState({
    playerNo: "",
    country: ""
  });

  const handleClick = () => {
    setShowModal(!showModal);
  };
  const handleChange = (e) => {
    setData({...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button
        type="button"
        id="btn"
        class="btn btn-primary"
        onClick={handleClick}
      >
        Add Player
      </button>
      <Modal visible={showModal} title={title} toggleModal={handleClick}>
        <form>
          <InputField
            name="playerNo"
            type="number"
            placeholder="Enter the player No."
            value={data.playerNo}
            onChange={handleChange}
          />
          <br />
          <InputField
            name="country"
            type="text"
            placeholder="Enter the country name"
            value={data.country}
            onChange={handleChange}
          />
          <br />
        </form>
      </Modal>
    </div>
  );
}
