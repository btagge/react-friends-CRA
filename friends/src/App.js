import React, { Component } from 'react';
import './App.css';
import Friends from './components/friendsList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>The <strong>facebook</strong> Friend Machine</h1>
    
        <div className="friends">
          <Friends/>
        </div>
      </div>
    );
  }
}

export default App;
