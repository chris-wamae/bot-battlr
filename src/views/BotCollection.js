
//BotSpecs should be rendered inside this component
//when a bot card is clicked, its id is passed to the bot specs component
//the bot specs component uses that id to filter that bot from the list
//it renders that bot with additional information


//Bot filter should be rendered inside this component


//Sort Bar renders inside this component
//this is a select menu with three options 
//by health, by armor, by damage
//if a sort option is selected, it sorts the bots i


//All the Bot cards will be rendered here through map
//if no classes are selected


//if some classes are selected 
//run a filter method before rendering
//checkbox menu


import React, { useEffect } from 'react';
import { useState,useContext } from 'react';
import BotCard from '../components/BotCard';
import { BotContext} from '../data/BotsContext';

function BotCollection() {

    const botsContext = useContext(BotContext)
    const bots = botsContext.map((bot)=> {return <BotCard key={bot.id} bot={bot} showSpecs={showSpecs}/>}) 
    const [specs,setSpecs] = useState([])
    function showSpecs(singleBot){
        setSpecs(<h3>{singleBot.name}</h3>)
    }
 console.log(specs)
    let render;
    if(specs === []){
       render = specs
    }
    else{
        render = bots
    }
    console.log(render)
    
    return (
        <div> 
           {render}
        </div>
    );
}

export default BotCollection;