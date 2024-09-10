import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.svg';
import '../styling/LoadingScreen.css';
import '../styling/styles.css'; // Global Styling


  
function LoadingScreen() {

    const [visible, setVisible] = useState(true);
    const loadingScreenRef = useRef(null);
    useEffect(() => {
        // Simulate data loading delay
        const timeoutId = setTimeout(() => {
            // Hide loading screen after data is loaded
            setVisible(false);
        }, 1000); // 3 seconds delay (adjust as needed)
        return () => clearTimeout(timeoutId);
    }, []);
    
    return (
        <div 
            className= {`loading-screen ${visible ? 'fade-in' : 'fade-out'}`} ref={loadingScreenRef}>
            <AnimatePresence>
                {visible && (
                <motion.img     
                initial={{ opacity: 1 }} // Initial opacity and scale of the image
                animate={{ opacity: 1, y: -33 }} // Fade in and scale in animation
                exit={{ opacity: 0, scale: 72 }} // Scale out animation when component exits
                transition={{  duration: 2 }} // Duration of the animation
                src={logo} className="App-logo" alt="logo" />
                )}
            </AnimatePresence>
        </div>
    );
}

export default LoadingScreen;
