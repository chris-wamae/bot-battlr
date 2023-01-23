import React from "react";
import { useState } from "react";
function BotFilter({ filterBots }) {
  function handleChange(e) {
    filterBots(e.target.value);
  }

  return (
    <section>
      <h3>Filter Bots by Classes</h3>
      <form className="filterForm">
        <div>
          <label htmlFor="support">Support</label>
          <input
            name="support"
            type="checkbox"
            value="Support"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="medic">Medic</label>
          <input
            name="medic"
            type="checkbox"
            value="Medic"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="assault">Assault</label>
          <input
            name="assault"
            type="checkbox"
            value="Assault"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="defender">Defender</label>
          <input
            name="defender"
            type="checkbox"
            value="Defender"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="captain">Captain</label>
          <input
            name="captain"
            type="checkbox"
            value="Captain"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="witch">Witch</label>
          <input
            name="witch"
            type="checkbox"
            value="Witch"
            onChange={handleChange}
          ></input>
        </div>
      </form>
    </section>
  );
}

export default BotFilter;
