import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

// import RootRouter from "./Routes/RootRouter";
import { store, persistor } from "./Redux/Store";
// import CustomRadio from "Components/Custom Components/CustomRadio";
// import MyApp from "Components/Custom Components/MyApp";
import MyRadio from "Components/Custom Components/MyRadio";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <MyRadio/>
      {/* <CustomRadio/> */}
        {/* <RootRouter /> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
