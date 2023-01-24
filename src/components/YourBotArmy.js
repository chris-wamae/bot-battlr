import React from "react";
import { YourArmyContext } from "../data/YourArmyContext.js";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import BotCard from "./BotCard";
import { BsShieldShaded } from "react-icons/bs";
import { ImHeartBroken } from "react-icons/im";
import { BsFillLightningFill } from "react-icons/bs";
//This component contains bots that a user has chose to add to their army
function YourBotArmy(props) {
  const { botarmy } = useContext(YourArmyContext);
  const { deletebots } = useContext(YourArmyContext);
  const [botArmy, setBotArmy] = botarmy;
  const [botDelete, setBotDelete] = deletebots;
  const [myBots, setMyBots] = useState(botArmy);
  const [deletedBots,setDeletedBots] =useState(botDelete)
  useEffect(()=>{
    console.log(botDelete)
    console.log(deletedBots)
  },[botDelete])
  useEffect(() => {
    if (myBots === null) {
      setMyBots([]);
    } else {
      setMyBots([...myBots, botArmy]);
    }
  }, [botArmy]);

//allows  a user to remove a bot from their army by clicking on it 
  function removeBot(name) {
    const removedBot = myBots.filter((bot) => bot.name !== name);
    setMyBots(removedBot);
  }
  useEffect(() => {}, [myBots]);
  let armyRender;
  if (myBots === null) {
    armyRender = <h3>Add Bots Please</h3>;
  } else {

    let deletedBots = myBots.filter((bot)=>{
     return bot.id !== botDelete
    })  
    //filters out repeated bots allowing a user to only add a specific bot to their army once
    const unique = [...new Map(deletedBots?.map((m) => [m.id, m])).values()];
    armyRender = unique.map((bot) => {
      return (
        // returns a bot that has been selected by the user
        <div onClick={() => removeBot(bot.name) }className="armyCard" key={bot.id}>
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} />
          <p>{bot.catchphrase}</p>
          <ul>
          <li>
              <BsShieldShaded/>Armor:{bot.armor}</li>
            <li>
              <ImHeartBroken/>Health:{bot.health}</li>
            <li>Damage:{bot.damage}</li>
            <li>
              <BsFillLightningFill/>Class:{bot.bot_class}</li>
          </ul>
        </div>
      );
    });
  }
  return (
    <div className="botArmyContainer">
      {/* bot support */}
      {/* when a bot from the bot collection is clicked on   */}
      {armyRender}
    </div>
  );
}
export default YourBotArmy;
