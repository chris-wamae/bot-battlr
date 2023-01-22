import { createContext,useState } from "react";

const YourArmyContext = createContext()

const YourArmyContextProvider  = (props) => {
    const [botArmy,setBotArmy] = useState(null)
    console.log(botArmy)
    return(
       <YourArmyContext.Provider value={[botArmy,setBotArmy]}>
        {props.children}
       </YourArmyContext.Provider>
    )
}

export {YourArmyContext}
export {YourArmyContextProvider}
