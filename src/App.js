// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ParentComponent />
        <br></br>
        <br></br>
        <br></br>
      </header>
    </div>
  );
}

export default App;
