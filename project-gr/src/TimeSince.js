// src/TimeSince.js
import React, { useState, useEffect } from 'react';

const TimeSince = () => {
  const [timeSince, setTimeSince] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-08-19T00:00:00');
    
    const calculateTimeSince = () => {
      const now = new Date();
      const diff = now - targetDate; // Difference in milliseconds
      
      const diffDate = new Date(diff);
      const years = diffDate.getUTCFullYear() - 1970; // subtract epoch start
      const months = diffDate.getUTCMonth(); // get month difference
      const daysSinceStart = Math.floor(diff / (1000 * 60 * 60 * 24)); // Total days since target date
      const weeks = Math.floor(daysSinceStart / 7); // Full weeks since target date
      const days = daysSinceStart % 7; // Remaining days after weeks
      
      setTimeSince({ years, months, weeks, days });
    };

    // Calculate every second
    const intervalId = setInterval(calculateTimeSince, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Time Since August 19th, 2024</h1>
      <p>{timeSince.years} Years</p>
      <p>{timeSince.months} Months</p>
      <p>{timeSince.weeks} Weeks</p>
      <p>{timeSince.days} Days</p>
    </div>
  );
};

export default TimeSince;