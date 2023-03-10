//Provides data of all the bots currently in the server to the page
import { createContext, useState, useEffect } from "react";
import axios from "axios";
//Initializes context, when imported it will allow us to use the store of data that will be defined
//in the  function below
const BotContext = createContext();

//Data that the context will store is defined in this function
const BotProvider = (props) => {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    axios.get("https://json-server-vercel-pj78p6g0t-chris-wamae.vercel.app/bots").then((d) => {
      setBots(d.data);
    });
  }, []);
  return (
    <BotContext.Provider value={bots}>{props.children}</BotContext.Provider>
  );
};
export { BotContext };
export { BotProvider };
