import React, { Component } from 'react';

import Title from "./Components/Title/Title";
import Window from './Components/Window/Window';

class App extends Component {
  render() {
    return (
      <div>
        <Title/> 
        <Window/>
      </div>
    );
  }
}

export default App;
