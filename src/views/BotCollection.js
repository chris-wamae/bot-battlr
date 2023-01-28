import React, {useState} from "react";
import BotCard from "../components/BotCard";

function BotCollection({botCollection, addRemoveBot, deleteBot}) {
//returns all the bots to be displayed on the page
    return (
        <div >
            <div className="botCardsContainer">
              {/* maps through all the bots and adds each one to a bot card */}
                {botCollection.map(bot => (
                    <BotCard
                        key={bot.id}
                        bot={bot}
                        addRemoveBot={addRemoveBot}
                        inArmy={false}
                        deleteBot={deleteBot}
                    />
                ))}
            </div>
        </div>
    );
}

export default BotCollection;