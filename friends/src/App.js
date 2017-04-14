import React, { Component } from 'react';
import './App.css';
import Friends from './components/friendsList';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="friends">
          <Friends/>
        </div>
      </div>
    );
  }
}

export default App;
