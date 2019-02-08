import React from "react";
import "./UserInput.css";
import { className } from "postcss-selector-parser";

const input = props => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.changed} value={props.username} />
    </div>
  );
};
export default input;
