import {createContext,useState,useEffect} from "react"
import axios from "axios"
const BotContext = createContext()

const BotProvider = (props) =>{
const [bots,setBots] = useState([])
useEffect(() =>{
    axios.get("http://localhost:3000/bots")
    .then(d =>{
        setBots(d.data)
    })  
},[])
return(
    <BotContext.Provider value={bots}>
    {props.children}
    </BotContext.Provider>
)
}
export {BotContext};
export {BotProvider};