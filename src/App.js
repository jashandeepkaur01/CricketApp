import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./Redux/Store";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from "Components/Home";
import AddPlayer from "Components/AddPlayer";
import AddTeam from "Components/AddTeam";
import ScheduleMatch from "Components/ScheduleMatch";

function App() {
  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/addPlayer' element={<AddPlayer />} />
        <Route path="/addTeam" element={<AddTeam />} />
        <Route path="/schedulematch" element={<ScheduleMatch />} />
      </Routes>
    </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
