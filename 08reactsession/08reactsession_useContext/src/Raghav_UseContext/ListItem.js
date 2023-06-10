import React from "react";
import { Button } from "./Button";


export const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);
