// src/App.js
import React from 'react';
import './App.css';
import TimeSince from './TimeSince'; // Import the timer component
import LoadingScreen from './LoadingScreen';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className='app-container'>
        <LoadingScreen/>
        <TimeSince /> {/* Use the timer component */}
        <motion.div
      initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
      animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
      transition={{ duration: 1 , delay: 2}}>
        </motion.div>
    </div>
  );
}

export default App;