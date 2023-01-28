import React from "react";
//This component creates a single bot from data passes on to it from BotsCollection component
const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
};

function BotCard({bot, addRemoveBot, inArmy, deleteBot}) {
    return (
        <div className="botCard">
          {/* //adds the bot id to the page */}
            <div
                className="ui card"
                key={bot.id}
                onClick={() => {
                    addRemoveBot(bot, inArmy)
                }}
            >
                   {/* //adds the bot image to the page */}
                <div className="image">
                    <img alt="oh no!" src={bot.avatar_url}/>
                </div>
                     {/* //adds the bot class to the page */}
                <div className="content">
                    <div className="botCardName">
                        {bot.name}
                        <i className={botTypeClasses[bot.bot_class]}/>
                    </div>
                      {/* //adds the  bots catchphrase to the page */}
                    <div className="meta text-wrap">
                        <small>{bot.catchphrase}</small>
                    </div>
                </div>
                <div className="extra content">
                   {/* //adds the  bots stats to the page */}
          <span>
            <i className="icon heartbeat"/>
              {bot.health}
          </span><span>
            <i className="icon lightning"/>
                        {bot.damage}
          </span>
                    <span>
            <i className="icon shield"/>
                        {bot.armor}
          </span>
                    <span>
            <div className="ui center aligned segment basic">
              <button
                 id="delete-button"
                  onClick={() => {
                      deleteBot(bot)
                  }}
              >
                x
              </button>
            </div>
          </span>
                </div>
            </div>
        </div>
    );
}

export default BotCard;