import { createContext, useState } from "react";
import { useEffect } from "react";

const YourArmyContext = createContext();

const YourArmyContextProvider = (props) => {
  const [botArmy, setBotArmy] = useState(null);
  const [botDelete, setBotDelete] = useState([]);
  useEffect(()=>{
  console.log(botDelete)
  },[botDelete])
  return (
    <YourArmyContext.Provider
      value={{
        botarmy: [botArmy, setBotArmy],
        deletebots: [botDelete, setBotDelete],
      }}
    >
      {props.children}
    </YourArmyContext.Provider>
  );
};

export { YourArmyContext };
export { YourArmyContextProvider };
