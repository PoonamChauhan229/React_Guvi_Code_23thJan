import React, { useState, createContext } from "react";
import { List } from "./List";



// Reference - https://codesandbox.io/s/elastic-panini-fupyn9?file=/src/App.js:1203-1309
// Expected output - https://csb-6qf0y.netlify.app/

// 1. Creating - createContext - ✅
// 2. Publisher - provider - context.Provider - ✅
// 3. Subscriber - useContext - useContext(context)

export const context = createContext();

export default function TestActualContext() {
  const [mode, setMode] = useState("light");
  const styles = {
    background: mode === "light" ? "black" : "white"
  };
  return (
    <context.Provider value={[mode, setMode]}>
      <div style={styles} className="App">
        <List />
      </div>
    </context.Provider>
  );
}


