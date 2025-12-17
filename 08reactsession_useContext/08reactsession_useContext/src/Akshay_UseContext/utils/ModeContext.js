import { createContext} from "react";


const ModeContext=createContext(
    ["light", "dark","Dark 🌙"]
    // theme:{
    //     light:"light",
    //     dark:"dark",
    //     DarkBtn:"Dark 🌙",
    //     status:true
    // }}
    )
export default ModeContext;