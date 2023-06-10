import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ mode, setMode }) => (
  <ul>
    <ListItem value="Light 💡" mode={mode} setMode={setMode} />
    <ListItem value="Dark 🌙" mode={mode} setMode={setMode} />
  </ul>
);
