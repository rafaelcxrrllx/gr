// src/App.js
import React from 'react';
import './App.css';
import TimeSince from './TimeSince'; // Import the timer component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimeSince /> {/* Use the timer component */}
        <h1>est. August 19th, 2024</h1>

      </header>
    </div>
  );
}

export default App;