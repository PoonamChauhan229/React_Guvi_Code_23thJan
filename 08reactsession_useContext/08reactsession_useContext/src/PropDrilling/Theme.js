import React, { useState} from "react";
import { List } from "./List";


export default function Theme() {
  const [mode, setMode] = useState("light");
  const styles = {
    background: mode === "light" ? "black" : "white"
  };
  return (
    <div style={styles} className="App">
      <List mode={mode} setMode={setMode} />
    </div>
  );
}


