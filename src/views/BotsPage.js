import React, {useEffect, useState} from "react";
import YourBotArmy from "../components/YourBotArmy";
import BotCollection from "./BotCollection";
import BotCard from "../components/BotCard";

function BotsPage() {
    const [botCollection, setBotCollection] = useState([])
    const [botArmy, setBotArmy] = useState([])
//fetches data for the bots to be rendered on the page from the server
    useEffect(() => {
        fetch('https://json-server-vercel-pj78p6g0t-chris-wamae.vercel.app/bots')
            .then(res => res.json())
            .then(data => setBotCollection(data))
    }, [])
//makes a delete request to the server that results in a bot being deleted from the page
    function deleteBot(bot) {
        fetch(`https://json-server-vercel-pj78p6g0t-chris-wamae.vercel.app/bots/${bot.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            setBotCollection(botCollection.filter(({id}) => id !== bot.id));
            setBotArmy(botArmy.filter(({id}) => id !== bot.id));
            console.log(res)
        })
    }

    function addRemoveBot(bot, inArmy) {
        // army === true if bot in botArmy
        if (botArmy.includes(bot) && inArmy === true) {
            // remove bot from BotArmy state
            setBotArmy(botArmy.filter(({id}) => id !== bot.id));
        } else if (botArmy.includes(bot) === false) {
            // add bot to BotArmy state
            setBotArmy(botArmy => [...botArmy, bot])
        }
    }

    return (
        <div>
            <h2>Your Bot Army</h2>
            <p>Click on a bot to add it to your army:</p>
            <hr/>
            <YourBotArmy botArmy={botArmy} addRemoveBot={addRemoveBot} deleteBot={deleteBot}/>
            <h2>Bots Collection</h2>
            <BotCollection botCollection={botCollection} addRemoveBot={addRemoveBot} deleteBot={deleteBot}/>
        </div>
    )
}

export default BotsPage;
