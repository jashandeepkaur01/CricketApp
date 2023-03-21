import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import RootRouter from "./Routes/RootRouter";

import { persistorlogin } from "Redux/loginStore";

import loginStore from "Redux/loginStore";

function App() {
  return (
    <Provider store={loginStore}>
      <PersistGate persistor={persistorlogin}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
