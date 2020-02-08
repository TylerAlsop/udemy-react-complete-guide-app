import React, { useState } from 'react';
import './App.css';
import Person from "./components/Person";

const App = props => {
  const [personsState, setPersonsState] = useState ({
    persons: [
      { name: "Max", age: 35 },
      { name: "Eric", age: 27 },
      { name: "Rufus", age: 46 },
      { name: "Aimee", age: 28 },
    ],
    otherState: "Some other value"
  });

  const switchNameHandler = () => {
    console.log ("Switch Name Button Was Clicked");
    setPersonsState({
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
      <button onClick={switchNameHandler}>Switch Name</button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age}>I like to code.</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      


    </div>
  );

  // This is what it used to look like to make the jsx above:

  // return (
  //   React.createElement("div", {className: "App"}, React.createElement("h1", null, "Hi I'm a React App!"))
  // )
}

export default App;




