import React, { useContext, useState } from "react";
import ModeContext from "./utils/ModeContext";


export const Button = () => {
  // const [light,dark,lightBtn] = useContext(ModeContext);
  const [theme,setTheme] = useContext(ModeContext);
  console.log(theme)

  const styles = {
    background: theme.DarkBtn === "Light 💡" ? "pink" : "black",
    color: theme.DarkBtn === "Light 💡" ? "black" : "pink"
  };

  return (
    <button
      style={styles}
      onClick={() => {
      setTheme({...theme,status:!theme.status,
                DarkBtn:theme.DarkBtn === "Light 💡" ? "Dark 🌙" : "Light 💡"
      })
  }}>
      { theme.DarkBtn}
    </button>
  );
};
