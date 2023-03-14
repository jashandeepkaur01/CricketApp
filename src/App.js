import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'

import RootRouter from "./Routes/RootRouter";
import {  persistor } from "./Redux/Store";

import loginStore from "Redux/loginStore";

function App() {
 
  return (
    

    <Provider store={loginStore} >
      <PersistGate persistor={persistor}>
      <RootRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
