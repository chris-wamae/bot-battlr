import { createContext,useState } from "react";

const YourArmyContext = createContext()

const YourArmyContextProvider  = (props) => {
    const [botArmy,setBotArmy] = useState(null)
    return(
       <YourArmyContext.Provider value={[botArmy,setBotArmy]}>
        {props.children}
       </YourArmyContext.Provider>
    )
}

export {YourArmyContext}
export {YourArmyContextProvider}
