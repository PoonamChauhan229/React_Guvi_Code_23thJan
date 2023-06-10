import { createContext} from "react";


const ModeContext=createContext(
    // ['lightTheme','darkTheme','DarkBtn']
    ["light", "dark","Dark 🌙"]
    // theme:{
    //     light:"light",
    //     dark:"dark",
    //     DarkBtn:"Dark 🌙",
    //     status:true
    // }}
    )
export default ModeContext;