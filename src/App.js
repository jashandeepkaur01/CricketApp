import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { InputField } from "./Components/InputField";

import RootRouter from "./Routes/RootRouter";
import { store, persistor } from "./Redux/Store";
import { Modal } from "./Components/Modal";
import React from "react";
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const [showModal, setShowModal] = useState(false);
  const title = "Add record";
  const content = "Add content";
  const [value, setValue] = useState("");
  const handleClick = () => {
    setShowModal(!showModal);
  };
  const handleChange = () => {};
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        
        <i class="bi bi-x-circle"></i>

        <button className="btn1" onClick={handleClick}>
          Open Modal
        </button>
        <Modal
          visible={showModal}
          title={title}
          toggleModal={handleClick}
        ><InputField label="hello" type="" value="" onChange={handleChange} placeholder="hello"/>
      </Modal>
      </PersistGate>
    </Provider>
  );
}

export default App;
