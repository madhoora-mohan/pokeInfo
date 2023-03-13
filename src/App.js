import "./App.css";
import { useState } from "react";
import Explore from "./pages/Explore";
import FormTeam from "./pages/FormTeam";
import GuessingGame from "./pages/GuessingGame";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Route, Routes } from "react-router-dom";
// import { Logout } from "./pages/Logout";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  // const [logStatus, setLogStatus] = useState("loggedout");
  // const toggleLog = (logName) => {
  //   setLogStatus(logName);
  // };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Explore />} />
        {/* <Route path="/FormTeam" element={<FormTeam />} /> */}
        {/* <Route path="/GuessingGame" element={<GuessingGame />} />s */}
        {currentForm === "login" ? (
          <Route path="/Login" element={<Login onFormSwitch={toggleForm} />} />
        ) : (
          <Route
            path="/Login"
            element={<Register onFormSwitch={toggleForm} />}
          />
        )}
        {/* {logStatus === "loggedout" ? (
          ""
        ) : (
          <Route path="/Login" element={<Logout logFormSwitch={toggleLog} />} />
        )} */}
      </Routes>
    </div>
  );
}

export default App;
