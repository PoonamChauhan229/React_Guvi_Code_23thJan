import React, { useState, createContext, useContext } from "react";



// Reference - https://codesandbox.io/s/elastic-panini-fupyn9?file=/src/App.js:1203-1309
// Expected output - https://csb-6qf0y.netlify.app/

// 1. Creating - createContext - ✅
// 2. Publisher - provider - context.Provider - ✅
// 3. Subscriber - useContext - useContext(context)

const context = createContext();

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

// List, ListItem - free from props
const List = () => (
  <ul>
    <ListItem value="Light 💡" />
    <ListItem value="Dark 🌙" />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);

const Button = ({ value }) => {
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
