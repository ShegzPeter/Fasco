import React from 'react';
import { motion } from 'framer-motion';

const LogosCarousel = () => {
  const logos = [
    { src: "../images/denim.png", alt: "Denim Logo" },
    { src: "../images/prada.png", alt: "Prada Logo" },
    { src: "../images/louis.png", alt: "Louis Logo" },
    { src: "../images/chanel.png", alt: "Chanel Logo" },
    { src: "../images/calvin.png", alt: "Calvin Logo" },
  ];

  return (
    <div className='overflow-hidden mt-[30px]'>
      <motion.div
        className="flex space-x-[60px]"
        animate={{ x: ['100%', '-100%'] }} // Move from right to left
        transition={{ duration: 10, ease: "linear", repeat: Infinity }} // Continuous loop
      >
        {logos.map((logo, index) => (
          <motion.img 
            key={index}
            src={logo.src} 
            alt={logo.alt} 
            className='w-[110px] h-[20px]' 
            initial={{ opacity: 0, x: 20 }} // Start slightly off to the right
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to position
            transition={{ duration: 0.5, delay: index * 0.1 }} 
          />
        ))}
      </motion.div>
    </div>
  );
}

export default LogosCarousel;