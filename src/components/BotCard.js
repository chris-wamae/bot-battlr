import React, { useState } from "react";

function BotCard({ bot ,showSpecs, handleDelete}) {

  function redner() {
    let test;
    if (bot === undefined) {
      console.log("loading...");
    } else {
        function getId(){
            showSpecs(bot)
        }
        function getDelete(){
          handleDelete(bot.id)
        }
      return (test = (
        <div onClick={getId}>
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} />
          <p>{bot.catchphrase}</p>
          <ul>
            <li>Armor:{bot.armor}</li>
            <li>Health:{bot.health}</li>
            <li>Damage:{bot.damage}</li>
            <li>Class:{bot.bot_class}</li>
          </ul>
          <button onClick={getDelete}>X</button>
          {/*red button removes bot from the army,collection
          and server*/}
        </div>
      ));
    }
  }
  return <>{redner()}</>;
}

export default BotCard;
