import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./Redux/Store";
import './App.css'
// import RootRouter from "Routes/RootRouter";
import ScoreCard from "Views/ScoreCard";

function App() {
  return (
    

    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <ScoreCard/>
      {/* <RootRouter /> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
