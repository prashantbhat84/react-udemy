import React, { useState } from "react";

import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: "rohidas",
        age: 23
      },
      {
        name: "Aai",
        age: 50
      },
      {
        name: "Aadrita",
        age: 3
      }
    ]
  });
  const [otherState, setOtherState] = useState("some    value");
  console.log(personsState, otherState);
  const switchNameHandler = () => {
    //console.log("Was Clicked");
    setPersonsState({
      persons: [
        {
          name: "roh",
          age: 23
        },
        {
          name: "Aai",
          age: 50
        },
        {
          name: "Aadrita",
          age: 2
        }
      ]
    });
    setOtherState("some other value");
  };
  return (
    <div className="App">
      <h1> This is my first React app!!</h1>
      <p> this is a new app</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
