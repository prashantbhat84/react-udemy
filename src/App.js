import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";
import { white } from "ansi-colors";

class App extends Component {
  state = {
    persons: [
      {
        id: "1",
        name: "rohidas",
        age: 23
      },
      {
        id: "2",
        name: "Aai",
        age: 50
      },
      {
        id: "3",
        name: "Aadrita",
        age: 3
      }
    ],
    username: "Prashant Rohidas bhat",
    showPersons: true
  };
  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };
  togglePersonsHandler = () => {
    const deosShow = this.state.showPersons;
    this.setState({ showPersons: !deosShow });
  };

  render() {
    const style = {
      backgroundColor: white,
      font: "inherit",
      border: "1 px solid blue",
      cursor: "pointer",
      padding: "8px"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1> This is my first React app!!</h1>
        <p> this is a new app</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
