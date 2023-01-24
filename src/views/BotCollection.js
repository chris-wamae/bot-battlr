
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "../components/YourBotArmy";
import { BotContext } from "../data/BotsContext";
import { YourArmyContext } from "../data/YourArmyContext";
import SortBar from "./SortBar";
import BotFilter from "./BotFilter";
import axios from "axios";
//This component is the container for all the bots on the page 
function BotCollection() {
  //get data from BotContext store
  const botsContext = useContext(BotContext);
  //sets an initial state of an empty array
  const [bots, setBots] = useState([]);
  const [botsFilter, setBotsFilter] = useState([]);
  const [classStore, setClassStore] = useState([]);
  const { botarmy, deletebots } = useContext(YourArmyContext);
  const [botDelete, setBotDelete] = deletebots;
//allows  a user to delete a bot persistently
  function handleDelete(bot) {
    axios.delete(`http://localhost:3000/bots/${bot.id}`);
    axios.get("http://localhost:3000/bots").then((d) => {
      setBots(
        d.data?.map((bot) => {
          return (
            <div className="botCardsContainer" key={bot.id}>
            <BotCard
              key={bot.id}
              bot={bot}
              showSpecs={showSpecs}
              handleDelete={handleDelete}
            />
            </div>
          );
        })
      );
    });
        setBotDelete([...botDelete, bot.id]);
  }
//Allows filtering of bots by their classes
  function filterBots(value) {
    setClassStore([...classStore, value]);
    setBotsFilter(
      botsContext.filter((botClass) => classStore.includes(botClass.bot_class))
    );
  }
  useEffect(() => {
    setBots(
      botsFilter.map((bot) => {
        return (
          <div className="botCardsContainer" key={bot.id} >
          <BotCard
            key={bot.catchphrase}
            bot={bot}
            showSpecs={showSpecs}
            handleDelete={handleDelete}
          />
          </div>
        );
      })
    );
  }, [classStore]);
//Allows bots to be sorted according to their health,armor or damage
  function sortBots(value) {
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
          return (
            <div className="botCardsContainer" key={bot.id}>
            <BotCard
              key={bot.catchphrase}
              bot={bot}
              showSpecs={showSpecs}
              handleDelete={handleDelete}
            />
            </div>
          );
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
          return (
            <div className="botCardsContainer" key={bot.id}>
            <BotCard
              key={bot.catchphrase}
              bot={bot}
              showSpecs={showSpecs}
              handleDelete={handleDelete}
            />
            </div>
          );
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
          return (
            <div className="botCardsContainer" key={bot.id}>
            <BotCard
              key={bot.catchphrase}
              bot={bot}
              showSpecs={showSpecs}
              handleDelete={handleDelete}
            />
            </div>
          );
        })
      );
    }
  }
//renders all the bots in a random order the first time the page loads
  useEffect(() => {
    //sets the state to use botsContext after its value has data from the fetch
    //completing in BotsContext
    setBots(
      botsContext.map((bot) => {
        return (
          <div className="botCardsContainer" key={bot.id}>
          <BotCard
            key={bot.catchphrase}
            bot={bot}
            showSpecs={showSpecs}
            handleDelete={handleDelete}
          />
          </div>
        );
      })
    );
  }, [botsContext]);
  //gets data for which bot is clicked,making displaying only one bot by clicking on it
  //possible

  const [botArmy, setBotArmy] = botarmy;
  function showSpecs(singleBot) {
    setBotArmy(singleBot);
    //   setBots(<h3>{singleBot.name}</h3>);
  }

  function removeBotDOM(){
  }
  removeBotDOM()
  return (
    <div>
      <SortBar sortBots={sortBots} />
      <BotFilter filterBots={filterBots} />
      
      {bots}
    </div>
  );
}

export default BotCollection;
