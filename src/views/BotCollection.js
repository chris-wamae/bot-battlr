//BotSpecs should be rendered inside this component
//when a bot card is clicked, its id is passed to the bot specs component
//the bot specs component uses that id to filter that bot from the list
//it renders that bot with additional information

//Bot filter should be rendered inside this component

//Sort Bar renders inside this component
//this is a select menu with three options
//by health, by armor, by damage
//if a sort option is selected, it sorts the bots i

//All the Bot cards will be rendered here through map
//if no classes are selected

//if some classes are selected
//run a filter method before rendering
//checkbox menu

import React, { useEffect } from "react";
import { useState, useContext } from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "../components/YourBotArmy";
import { BotContext } from "../data/BotsContext";
import { YourArmyContext } from "../data/YourArmyContext";
function BotCollection() {
  //get data from BotContext store
  const botsContext = useContext(BotContext);
  //sets an initial state of an empty array
  const [bots, setBots] = useState([]);
  useEffect(() =>{
    //sets the state to use botsContext after its value has data from the fetch 
    //completing in BotsContext
    setBots(botsContext.map((bot) => {
        return <BotCard key={bot.id} bot={bot} showSpecs={showSpecs} />;
      })
    );
  },[botsContext])
  //gets data for which bot is clicked,making displaying only one bot by clicking on it
  //possible

  return <div>{bots}</div>;
  }
 


export default BotCollection;
