import React, { useContext, useState } from "react";
import ModeContext from "./utils/ModeContext";


export const Button = () => {
  const [light, dark,DarkBtn]= useContext(ModeContext);
  const[mode,setMode]=useState(light)
  const [btnVal,setBtnVal]=useState(DarkBtn)
  // console.log(mode)

  const styles = {
    background: mode === "light" ? "white" : "black",
    color: mode === "light" ? "black" : "white"
  };

  return (
    <button
      style={styles}
      onClick={() => {
      setMode(mode===light?"dark":"light")
      setBtnVal(btnVal==="Dark 🌙"?"Light 💡":"Dark 🌙")
     }}
      >
      {btnVal}
    </button>
  );
};
