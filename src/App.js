import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import BotCard from './components/BotCard';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './views/BotCollection';


function App() {
 
  return (
    <div className="App">
      {/* pseudo code 
      -the YourBotArmy component should be rendered here
      */}
      <BotCard/>
      <BotCollection/>

    </div>
  );
}

export default App;
