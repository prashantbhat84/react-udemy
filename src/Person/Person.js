import React from "react";

const person = props => {
  return (
    <div>
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
