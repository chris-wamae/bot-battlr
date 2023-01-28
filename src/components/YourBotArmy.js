import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmy, addRemoveBot, deleteBot}) {
//Adds bots to the users army when they are clicked on in the Bots Collection
  return (
    <div>
      <div>
        <div className="botArmyContainer">
            {botArmy.map(bot => (
                <BotCard
                    key={bot.id}
                    bot={bot}
                    addRemoveBot={addRemoveBot}
                    inArmy={true}
                    deleteBot={deleteBot}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;