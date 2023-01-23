import React from "react";
import { YourArmyContext } from "../data/YourArmyContext.js";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import BotCard from "./BotCard";
import { BsShieldShaded } from "react-icons/bs";
import { ImHeartBroken } from "react-icons/im";
import { BsFillLightningFill } from "react-icons/bs";
//initial state of empty array
// is this function called in bot collection??
//function that sets state
//if the array is empty...replace it
//if it isnt...spread and add the element
//where is the array from???
// state with an array that provide that will be mapped
// maps through a list and returns bot cards
function YourBotArmy(props) {
  const { botarmy } = useContext(YourArmyContext);
  const { deletebots } = useContext(YourArmyContext);
  const [botArmy, setBotArmy] = botarmy;
  const [botDelete, setBotDelete] = deletebots;
  const [myBots, setMyBots] = useState(botArmy);
  const [deletedBots,setDeletedBots] =useState(botDelete)
  useEffect(()=>{
    setDeletedBots([...deletedBots, botDelete])
    console.log("These are the deleted bots")
    console.log(deletebots)
  },[botDelete])
  useEffect(() => {
 
  }, [botDelete]);
  useEffect(() => {
    if (myBots === null) {
      setMyBots([]);
    } else {
      setMyBots([...myBots, botArmy]);
    }
  }, [botArmy]);
  function removeBot(name) {
    const removedBot = myBots.filter((bot) => bot.name !== name);
    setMyBots(removedBot);

  }
  useEffect(() => {}, [myBots]);
  let armyRender;
  if (myBots === null) {
    armyRender = <h3>Add Bots Please</h3>;
  } else {
    // let minusDeleted = myBots.filter((element)=>{
    //   return botDelete.id !== element.id
    // })
    // let minusDeleted = botDelete.filter(function(bot) {
    //   return !myBots.includes(bot.id); 
    // })
    let deletedBots = myBots.filter((bot)=>{
     return bot.id !== botDelete
    })  
    const unique = [...new Map(deletedBots?.map((m) => [m.id, m])).values()];
    armyRender = unique.map((bot) => {
      return (
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
