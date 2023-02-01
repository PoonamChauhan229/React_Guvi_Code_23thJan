import React, { useState} from "react";


export default function Testcontext() {
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

const List = ({ mode, setMode }) => (
  <ul>
    <ListItem value="Light 💡" mode={mode} setMode={setMode} />
    <ListItem value="Dark 🌙" mode={mode} setMode={setMode} />
  </ul>
);

const ListItem = ({ value, mode, setMode }) => (
  <li>
    <Button value={value} mode={mode} setMode={setMode} />
  </li>
);

const Button = ({ value, mode, setMode }) => {
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

// Task (Don't delete or edit components)
// 1. Complete with props drilling - 15mins
// 2. Complete with useContext (avoiding props drilling) - 10mins

// Reference - https://codesandbox.io/s/elastic-panini-fupyn9?file=/src/App.js:1203-1309
// Expected output - https://csb-6qf0y.netlify.app/

