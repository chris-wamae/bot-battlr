import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import BotCard from "./components/BotCard";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./views/BotCollection";
import { YourArmyContextProvider } from "./data/YourArmyContext";
import SortBar from "./views/SortBar";

function App() {
  return (
    <div className="App">
      {/* pseudo code 
      -the YourBotArmy component should be rendered here
      */}
      <YourArmyContextProvider>
      <h2>Your bot army</h2>
      <p>Click on a bot to add it to your army:</p>
      <YourBotArmy />
      <hr></hr>
        <BotCollection />
      </YourArmyContextProvider>
    </div>
  );
}

export default App;
