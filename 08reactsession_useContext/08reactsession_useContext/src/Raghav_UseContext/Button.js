import React, { useContext } from "react";
import { context } from "./TestActualContext";


export const Button = ({ value }) => {
  const [mode, setMode] = useContext(context);

  const styles = {
    background: mode === "light" ? "white" : "black",
    color: mode === "light" ? "black" : "white"
  };

  return (
    <button
      style={styles}
      onClick={() => setMode(value === "Light 💡" ? "light" : "dark")}
    >
      {value}
    </button>
  );
};
