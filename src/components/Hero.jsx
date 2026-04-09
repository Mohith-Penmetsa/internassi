import React from 'react';
import '../styles/hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="hero container"
    >
      <div className="hero-content">
        <h1 className="hero-title">
          The <span className="underline-text">thinkers<span className="underline-shape"></span></span> and <br />
          doers were <span className="highlight-pill highlight-pink">changing</span> <br />
          the <span className="highlight-pill highlight-green">status</span> Quo with
        </h1>
        
        <p className="hero-subtitle">
          We are a team of strategists, designers communicators, researchers. Togeather, <br />
          we belive that progress only hghapens when you refuse to play things safe. 
        </p>

        <div className="shape-line shape-left-1"></div>
        <div className="shape-line shape-left-2"></div>
        <div className="shape-purple"></div>
        <div className="shape-red"></div>
      </div>
    </motion.section>
  );
};

export default Hero;
