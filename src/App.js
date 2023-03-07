import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import React from "react";
import RootRouter from "./Routes/RootRouter";
import { store, persistor } from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootRouter />
        IN APP
      </PersistGate>
    </Provider>
  );
}

export default App;
