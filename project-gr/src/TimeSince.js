// src/TimeSince.js
import React, { useState, useEffect } from 'react';
import './App.css';
import postcard from './postcard.jpg'
import cherubim1 from './cherubim1.svg'
import cherubim2 from './cherubim2.svg'
import cherubim3 from './cherubim3.svg'
import { motion } from 'framer-motion';

const TimeSince = () => {
  const [timeSince, setTimeSince] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-08-19T20:33:00')
    
    const calculateTimeSince = () => {
      const now = new Date();
      const diff = now - targetDate; // Difference in milliseconds
      
      const diffDate = new Date(diff);
      const years = diffDate.getUTCFullYear() - 1970; // subtract epoch start
      const months = diffDate.getUTCMonth(); // get month difference
      const daysSinceStart = Math.floor(diff / (1000 * 60 * 60 * 24)); // Total days since target date
      const weeks = Math.floor(daysSinceStart / 7); // Full weeks since target date
      const days = daysSinceStart % 7; // Remaining days after weeks
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      
      setTimeSince({ years, months, weeks, days, minutes, seconds, });
    };

    // Calculate every second
    const intervalId = setInterval(calculateTimeSince, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <motion.div 
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
        transition={{ duration: 1 , delay: 2}}
        className='main-container'>

        <div className='postcard-container'>
            <img src={postcard} className='postcard' alt="An image of a young couple in love <3"/>
        </div>

        <div className='timer-container'>
       
            <div className='timer-inner-container'>
                <p>{timeSince.years}</p>
                <p className='proximity'>years</p>
            </div>
            <div className='timer-inner-container'>
                <p>{timeSince.months}</p>
                <p className='proximity'>months</p>
            </div>
            <div className='timer-inner-container'>
                <p>{timeSince.weeks}</p>
                <p className='proximity'>weeks</p>
            </div>
            <div className='timer-inner-container'>
                <p>{timeSince.days}</p>
                <p className='proximity'>days</p>
            </div>
            <div className='timer-inner-container'>
                <p>{timeSince.minutes}</p>
                <p className='proximity'>minutes</p>
            </div>
            <div className='timer-inner-container'>
                <p>{timeSince.seconds}</p>
                <p className='proximity'>seconds</p>
            </div>
        </div>

      </motion.div>
    
    <div className='mobile-container'>
    <div className='postcard-container'>
        <img src={postcard} className='postcard' alt="An image of a young couple in love <3"/>
    </div>
    <h1>est. August 19th, 2024</h1>
    <div className='timer-container'>
       
            <div className='timer-inner-container'>
                <p className='time'>{timeSince.years}</p>
                <p className='proximity'>years</p>
            </div>
            <div className='timer-inner-container'>
                <p className='time'>{timeSince.months}</p>
                <p className='proximity'>months</p>
            </div>
            <div className='timer-inner-container'>
                <p className='time'>{timeSince.weeks}</p>
                <p className='proximity'>weeks</p>
            </div>
            <div className='timer-inner-container'>
                <p className='time'>{timeSince.days}</p>
                <p className='proximity'>days</p>
            </div>
            <div className='timer-inner-container'>
                <p className='time'>{timeSince.minutes}</p>
                <p className='proximity'>minutes</p>
            </div>
            <div className='timer-inner-container'>
                <p className='time'>{timeSince.seconds}</p>
                <p className='proximity'>seconds</p>
            </div>
        </div>
    </div>


      
    </div>
  );
};

export default TimeSince;