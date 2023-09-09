import React from "react";
import "./App.css";
import NavigationBar from "./layouts/NavigationAndFooter/NavigationBar";
import HomePage from "./layouts/HomePage/HopePage";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./layouts/HomePage/components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/search"></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
