import { createContext} from "react";


const ModeContext=createContext(
    // ['lightTheme','darkTheme','DarkBtn']
    // ["light", "dark","Dark 🌙"]
    {
        light:"lightTheme",
        dark:"darkTheme",
        DarkBtn:"DarkBtn",
        status:true
    }
    )
export default ModeContext;