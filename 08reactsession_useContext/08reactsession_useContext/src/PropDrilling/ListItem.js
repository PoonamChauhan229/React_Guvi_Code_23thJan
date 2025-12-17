import React from "react";
import { Button } from "./Button";


export const ListItem = ({ value, mode, setMode }) => (
  <li>
    <Button value={value} mode={mode} setMode={setMode} />
  </li>
);
