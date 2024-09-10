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
    <img className='cherubim' id="cherubim1" src={cherubim1} alt="cherubim" />
    <img className='cherubim' id="cherubim2" src={cherubim2} alt="cherubim" />
    <img className='cherubim' id="cherubim3" src={cherubim3} alt="cherubim" />

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
        <h3>
            19 = 1 + 9 = 10 = 1 + 0 = 1
        </h3>
            <p className='marriage'>
            You were born together, and together you
            shall be forevermore.
            You shall be together when the white
            wings of death scatter your days.
            Ay, you shall be together even in the
            silent memory of God.
            But let there be spaces in your togetherness,
            And let the winds of the heavens dance
            between you.
            <br/><br/>
            Love one another, but make not a bond
            of love:
            Let it rather be a moving sea between
            the shores of your souls.
            Fill each other’s cup but drink not from
            one cup.
            Give one another of your bread but eat
            not from the same loaf.
            Sing and dance together and be joyous,
            but let each one of you be alone,
            Even as the strings of a lute are alone
            though they quiver with the same music.
            <br/><br/>
            Give your hearts, but not into each
            other’s keeping.
            For only the hand of Life can contain
            your hearts.
            And stand together yet not too near
            together:
            For the pillars of the temple stand apart,
            And the oak tree and the cypress grow
            not in each other’s shadow.
            </p>
        </div>
    </div>
  );
};

export default TimeSince;