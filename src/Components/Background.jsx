import React, { useEffect } from 'react';
// import Shery from 'sheryjs'; // Corrected import statement
// import  './BackgroundImage.css'; // Custom styles if needed
import backgroundImage from '../../public/Images/background-Image.jpg'; // Replace with your actual image path

const BackgroundImage = () => {
  useEffect(() => {
    // Initialize the Shery.js animation with configuration
    // Shery.init({
    //   color1: '#ffffff', // White
    //   color2: '#ff6b00', // Orange
    //   animationType: 'wave', // Hypothetical animation type
    //   responsive: true,
    // });
  }, []);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-white to-orange-100"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div id="shery-animation" className="absolute inset-0"></div>
    </div>
  );
};

export default BackgroundImage;


