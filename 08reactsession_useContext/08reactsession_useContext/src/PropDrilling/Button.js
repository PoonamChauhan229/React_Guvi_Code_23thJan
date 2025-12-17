import React from "react";


export const Button = ({ value, mode, setMode }) => {
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
