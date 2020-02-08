import React, {Component }from 'react';
import './App.css';
import Person from "./components/Person";

const App extends Component = props => {
  state = {
    persons: [
      { name: "Max", age: 35 },
      { name: "Eric", age: 27 },
      { name: "Rufus", age: 46 },
      { name: "Aimee", age: 28 },
    ],
    otherState: "Some other value"
  }

  switchNameHandler = () => {
    // console.log ("Switch Name Button Was Clicked");
    this.setState({
      persons: [
        { name: "Maximus", age: 15 },
        { name: "Eric", age: 27 },
        { name: "Rufus", age: 46 },
        { name: "Joe", age: 102 },
      ]
    })
  }

  return (
    <div className="App">
      <h1>First Change To App</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>

      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} />
      <Person 
        name={this.state.persons[3].name} 
        age={this.state.persons[3].age}
        click={this.switchNameHandler}>I like to code.</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      


    </div>
  );

  // This is what it used to look like to make the jsx above:

  // return (
  //   React.createElement("div", {className: "App"}, React.createElement("h1", null, "Hi I'm a React App!"))
  // )
}

export default App;



