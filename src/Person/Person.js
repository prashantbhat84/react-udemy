import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.switch}>
        I am a {props.name} and {props.age} years old
      </p>
      <p onClick={props.switch}>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;

//in class based components it becmes this.props
