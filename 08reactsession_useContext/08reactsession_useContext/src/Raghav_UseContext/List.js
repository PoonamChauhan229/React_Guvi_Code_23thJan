import React from "react";
import { ListItem } from "./ListItem";

// List, ListItem - free from props
export const List = () => (
  <ul>
    <ListItem value="Light 💡" />
    <ListItem value="Dark 🌙" />
  </ul>
);
