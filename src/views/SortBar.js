import React from "react";
import { useContext } from "react";
import { BotContext } from "../data/BotsContext";

function SortBar({ sortBots }) {
  function runSortBots(e) {
    sortBots(e.target.value);
  }
  return (
    <select onChange={runSortBots}>
      <option>Sort</option>
      <option value="health">Sort by Health</option>
      <option value="damage">Sort by Damage</option>
      <option value="armor">Sort by Armor</option>
    </select>
  );
}

export default SortBar;
