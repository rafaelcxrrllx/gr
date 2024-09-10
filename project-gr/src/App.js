// src/App.js
import React from 'react';
import './App.css';
import TimeSince from './TimeSince'; // Import the timer component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimeSince /> {/* Use the timer component */}
      </header>
    </div>
  );
}

export default App;