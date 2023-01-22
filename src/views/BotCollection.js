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
import SortBar from "./SortBar";
import BotFilter from "./BotFilter";
function BotCollection() {
  //get data from BotContext store
  const botsContext = useContext(BotContext);
  //sets an initial state of an empty array
  const [bots, setBots] = useState([]);
  const [botsFilter, setBotsFilter] = useState([]);
  const [classStore,setClassStore] = useState([])

  function filterBots(value) {
    setClassStore([...classStore, value])
    console.log(classStore)
    if(classStore.length !== 0){
    setBotsFilter(
      botsContext.filter((botClass) => classStore.includes(botClass.bot_class))
    )};
  }
  useEffect(() => {
    setBots(
      botsFilter.map((bot) => {
        return <BotCard key={bot.id} bot={bot} showSpecs={showSpecs} />;
      })
    );
  }, [botsFilter]);

  function sortBots(value) {
    console.log(value);
    if (value === "health") {
      let sorted = botsContext.sort((a, b) => {
        if (a.health < b.health) {
          return 1;
        } else if (a.health > b.health) {
          return -1;
        } else {
          return 0;
        }
      });
      setBots(
        sorted.map((bot) => {
          return <BotCard key={bot.id} bot={bot} showSpecs={showSpecs} />;
        })
      );
    } else if (value === "armor") {
      let sorted = botsContext.sort((a, b) => {
        if (a.armor < b.armor) {
          return 1;
        } else if (a.armor > b.armor) {
          return -1;
        } else {
          return 0;
        }
      });
      setBots(
        sorted.map((bot) => {
          return <BotCard key={bot.id} bot={bot} showSpecs={showSpecs} />;
        })
      );
    } else if (value === "damage") {
      let sorted = botsContext.sort((a, b) => {
        if (a.damage < b.damage) {
          return 1;
        } else if (a.damage > b.damage) {
          return -1;
        } else {
          return 0;
        }
      });
      setBots(
        sorted.map((bot) => {
          return <BotCard key={bot.id} bot={bot} showSpecs={showSpecs} />;
        })
      );
    }
  }

  useEffect(() => {
    //sets the state to use botsContext after its value has data from the fetch
    //completing in BotsContext
    setBots(
      botsContext.map((bot) => {
        return <BotCard key={bot.id} bot={bot} showSpecs={showSpecs} />;
      })
    );
  }, [botsContext]);
  //gets data for which bot is clicked,making displaying only one bot by clicking on it
  //possible
  const [botArmy, setBotArmy] = useContext(YourArmyContext);
  function showSpecs(singleBot) {
    // setBots to  div w/
    // bot class
    // bot name
    // bot stats(li*3)
    // catchphrase
    // enlist button:
    //adds the bot to YourBotArmy:
    // onClick runs fn that changes state of army
    // [] => [singleBot]
    // go back button:
    //displays the whole collection of bots again
    setBotArmy(singleBot);
    //   setBots(<h3>{singleBot.name}</h3>);
  }

  return (
    <div>
      <BotFilter filterBots={filterBots} />
      <SortBar sortBots={sortBots} />
      {bots}
    </div>
  );
}

export default BotCollection;
