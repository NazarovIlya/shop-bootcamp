import React from "react";
import "./App.css";
import NavigationBar from "./layouts/NavigationAndFooter/NavigationBar";
import HomePage from "./layouts/HomePage/HopePage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
    </div>
  );
}

export default App;
