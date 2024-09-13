import React, { useState, useEffect } from 'react';
import './App.css';
import postcard from './postcard.jpg'
import cherubim1 from './cherubim1.svg'
import cherubim2 from './cherubim2.svg'
import cherubim3 from './cherubim3.svg'
import { motion } from 'framer-motion';


const TimeSince = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0, 
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2024-08-19T20:08:33'); // Your start date and time

    const updateElapsedTime = () => {
      const now = new Date();
      const elapsed = getElapsedTime(startDate, now);
      setTimeElapsed(elapsed);
    };

    const intervalId = setInterval(updateElapsedTime, 1000); // Update every second
    updateElapsedTime(); // Initial calculation when the component mounts

    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []);

  const getElapsedTime = (startDate, endDate) => {
    let years = endDate.getFullYear() - startDate.getFullYear();
    
    let months = endDate.getMonth() - startDate.getMonth();
    if (months < 0) {
      months += 12;
      years--;
    }

    let days = endDate.getDate() - startDate.getDate();
    if (days < 0) {
      const prevMonthDays = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate(); // Days in the previous month
      days += prevMonthDays;
      months--;
      if (months < 0) {
        months += 12;
        years--;
      }
    }

    

    let hours = endDate.getHours() - startDate.getHours();
    let minutes = endDate.getMinutes() - startDate.getMinutes();
    let seconds = endDate.getSeconds() - startDate.getSeconds();

    // Adjust for negative seconds
    if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
  
      // Adjust for negative minutes
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
  
      // Adjust for negative hours
      if (hours < 0) {
        hours += 24;
        days--;
      }

    return {
      years,
      months,
      days,
      hours: (hours + 24) % 24, // Positive hour difference
      minutes: (minutes + 60) % 60, // Positive minute difference
      seconds: (seconds + 60) % 60
    };
  };

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
        <h1 className='date'>est. August 19th, 2024</h1>


        <div className='timer-container'>
       
            <div className='timer-inner-container'>
                <p>{timeElapsed.years}</p>
                <p className='proximity'>years</p>
            </div>
            <div className='timer-inner-container'>
                <p>{timeElapsed.months}</p>
                <p className='proximity'>months</p>
            </div>
            
            <div className='timer-inner-container'>
                <p>{timeElapsed.days}</p>
                <p className='proximity'>days</p>
            </div>
            <div className='timer-inner-container'>
                <p>{timeElapsed.hours}</p>
                <p className='proximity'>hours</p>
            </div>
            <div className='timer-inner-container'>
                <p>{timeElapsed.minutes}</p>
                <p className='proximity'>minutes</p>
            </div>
            <div className='timer-inner-container'>
                <p>{timeElapsed.seconds}</p>
                <p className='proximity'>seconds</p>
            </div>
        </div>
        <h3>
        19 = 1 + 9 = 10 = 1 + 0 = 1
        </h3>
            <p className='marriage-desktop'>
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
            <br/>
            𓆩♡𓆪
            </p>
            

      </motion.div>
    
    <div className='mobile-container'>
    <div className='postcard-container'>
        <img src={postcard} className='postcard' alt="An image of a young couple in love <3"/>
    </div>
    <h1>est. August 19th, 2024</h1>
    <div className='timer-container'>
       
       <div className='timer-inner-container'>
           <p>{timeElapsed.years}</p>
           <p className='proximity'>years</p>
       </div>
       <div className='timer-inner-container'>
           <p>{timeElapsed.months}</p>
           <p className='proximity'>months</p>
       </div>
       
       <div className='timer-inner-container'>
           <p>{timeElapsed.days}</p>
           <p className='proximity'>days</p>
       </div>
       <div className='timer-inner-container'>
           <p>{timeElapsed.hours}</p>
           <p className='proximity'>hours</p>
       </div>
       <div className='timer-inner-container'>
           <p>{timeElapsed.minutes}</p>
           <p className='proximity'>minutes</p>
       </div>
       <div className='timer-inner-container'>
           <p>{timeElapsed.seconds}</p>
           <p className='proximity'>seconds</p>
       </div>
   </div>
        <h3>
        19 = 1 + 9 = 10 = 1 + 0 = 1
           
        </h3>
        <br/>
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
            <br/>
            𓆩♡𓆪
            </p>
            
        </div>
    </div>
  );
};

export default TimeSince;