import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import ListFood from './components/ListFood'
import AddFood from './components/AddFood'



class App extends Component {
  render() {
    return (
      <div className="App container">
        <ListFood/>
      </div>
    );
  }
}

export default App;
