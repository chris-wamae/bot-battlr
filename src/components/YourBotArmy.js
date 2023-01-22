import React from "react";
import { YourArmyContext } from "../data/YourArmyContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import BotCard from "./BotCard";

//initial state of empty array

// is this function called in bot collection??

//function that sets state

//if the array is empty...replace it

//if it isnt...spread and add the element

//where is the array from???

// state with an array that provide that will be mapped

// maps through a list and returns bot cards

function YourBotArmy(props) {
  const [botArmy, setBotArmy] = useContext(YourArmyContext);
  const [myBots, setMyBots] = useState(botArmy);
  useEffect(() => {
    if (myBots === null) {
      setMyBots([]);
    } else {
      setMyBots([...myBots, botArmy])
    }
  }, [botArmy]);
  useEffect(()=>{
    
     },[myBots]);

  let armyRender;
if(myBots === null){
    armyRender = <h3>Add Bots Please</h3>
  }
 else{
    const unique = [...new Map(myBots.map((m) => [m.id, m])).values()];
    armyRender = unique.map((bot) => {
        return <h3 key={bot.name}>{bot.name}</h3>;
      })
 }

  return (
    <div>
      {/* bot support */}
      {/* when a bot from the bot collection is clicked on   */}
      {armyRender}
    </div>
  );
}

export default YourBotArmy;
