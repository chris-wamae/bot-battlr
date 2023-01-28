import React, { Component } from "react";
import BotsPage from "./views/BotsPage";
import "./App.css";
import SortBar from "./views/SortBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;