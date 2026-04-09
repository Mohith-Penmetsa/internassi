import React from 'react';
import '../styles/sectionsplit.css';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SectionSplit = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="about container"
    >
      {/* Wave background decorative */}
      <div className="about-wave-bg">
        <svg viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200 C300 0, 700 400, 1000 200" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="about-block about-block-1">
        <div className="about-text-content">
          <h2 className="about-title">
            <span className="pill-text pill-pink">Tomorrow</span> should<br/>
            be better than <span className="pill-text pill-green">today</span>
          </h2>
          <p className="about-desc">
            We are a team of strategists, designers communicators, researchers. 
            Togeather, we belive that progress only hghapens when you refuse
            to play things safe.
          </p>
          <a href="#" className="read-more">Read more <span className="read-more-line"></span> <ArrowRight size={16} /></a>
        </div>
        <div className="about-image-content">
          <div className="about-shape-rect"></div>
          <div className="about-img-circle large-circle right-circle">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop" alt="Team meeting" />
          </div>
        </div>
      </div>

      <div className="about-block about-block-2">
        <div className="about-image-content">
          <div className="about-shape-triangle"></div>
          <div className="about-img-circle large-circle left-circle">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" alt="Working on laptop" />
          </div>
        </div>
        <div className="about-text-content about-text-right">
          <h2 className="about-title">
            <span className="pill-text pill-green">See</span> how we can<br/>
            help you <span className="underline-text">progress<span className="underline-shape"></span></span>
          </h2>
          <p className="about-desc">
            We add a layer of fearless insights and action that allows change 
            makers to accelerate their progress in areas such as brand, design 
            digital, comms and social research.
          </p>
          <a href="#" className="read-more">Read more <span className="read-more-line"></span> <ArrowRight size={16} /></a>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionSplit;
