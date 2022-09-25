import "./App.css";
import Navbar from "./components/Navbar";
import UserText from "./components/UserText";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import logoimage from "./imgs/logo.png";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#FEFBF6";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2C3333";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, tag) => {
    setAlert({
      tag: tag,
      msg: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar logo={logoimage} mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <div>
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={<UserText mode={mode} showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
