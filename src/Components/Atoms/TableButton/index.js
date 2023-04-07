import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import CustomModal from "../customModal";

function TableButton(props) {
  const [showModal, setShowModal] = useState(false);
  const submitModal = () => {
    setShowModal(false);
  };
  const showPlayers = () => {
    setShowModal(true);
  };
  return (
    <div>
      <button className="btn btn-outline-dark" onClick={showPlayers}>
        {props.btnText}
      </button>
      <CustomModal
        footer={false}
        header={true}
        visible={showModal}
        showModal={showModal}
        setShowModal={setShowModal}
        title={`${props.firstColumnValue}`}
        onSubmitModal={submitModal}
      >
        <ListGroup as="ol" numbered>
          {props.data.map((element) => (
            <ListGroup.Item as="li">{element.value}</ListGroup.Item>
          ))}
        </ListGroup>
      </CustomModal>
    </div>
  );
}

export default TableButton;
