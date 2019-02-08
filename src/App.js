import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";
import { white } from "ansi-colors";
import UserOutput from "./Person/UserOutput";
import UserInput from "./Person/UserInput";

class App extends Component {
  state = {
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
    ],
    username: "Prashant Rohidas bhat"
  };
  switchNameHandler = newName => {
    //console.log("Was Clicked");
    this.setState({
      persons: [
        {
          name: newName,
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
  };
  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: "rohidas",
          age: 23
        },
        {
          name: event.target.value,
          age: 50
        },
        {
          name: "Aadrita",
          age: 3
        }
      ]
    });
  };
  changeStateUsername = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    const style = {
      backgroundColor: white,
      font: "inherit",
      border: "1 px solid blue",
      cursor: "pointer",
      padding: "8px"
    };
    return (
      <div className="App">
        <h1> This is my first React app!!</h1>
        <p> this is a new app</p>
        <button style={style} onClick={() => this.switchNameHandler("guru")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          switch={this.switchNameHandler.bind(this, "kombu")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <br />
        <br />
        <UserOutput name={this.state.username} />
        <UserOutput name="Gauri" />
        <UserInput changed={this.changeStateUsername} />
      </div>
    );
  }
}

export default App;
