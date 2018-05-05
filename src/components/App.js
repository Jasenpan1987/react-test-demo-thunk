import React, { Component } from 'react';
import { Counter } from "./counter";
import { Posts } from "./posts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello world</h2>
        <Counter />
        <hr/>
        <Posts />
      </div>
    );
  }
}

export default App;
