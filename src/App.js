import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { InputField } from "./Components/InputField";

import RootRouter from "./Routes/RootRouter";
import { store, persistor } from "./Redux/Store";
import { Modal } from "./Components/Modal";
import React from "react";
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AddPlayer } from "Forms/AddPlayer";


function App() {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <AddPlayer/>
      </PersistGate>
    </Provider>
  );
}

export default App;
