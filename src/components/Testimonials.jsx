import React from 'react';
import '../styles/testimonials.css';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="testimonials container"
    >
      <div className="testimonials-content">
        <h2 className="testimonials-title">
          <span className="pill-text pill-green">What</span> our customer<br />
          says <span className="underline-text">About Us<span className="underline-shape"></span></span>
        </h2>
        
        <div className="testimonial-card">
          <div className="quote-icon">“</div>
          <p className="testimonial-text">
            Elementum delivered the site within the timeline as requested. They also had an impressive ability to use technologies that...
          </p>
        </div>
      </div>

      {/* Floating avatars */}
      <div className="test-avatar t-avatar-1 main"><img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" alt="Customer" /></div>
      <div className="test-avatar t-avatar-2"><img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop" alt="Customer" /></div>
      <div className="test-avatar t-avatar-3"><img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop" alt="Customer" /></div>
      <div className="test-avatar t-avatar-4"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Customer" /></div>
      <div className="test-avatar t-avatar-5"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Customer" /></div>
      <div className="test-avatar t-avatar-6"><img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop" alt="Customer" /></div>
    </motion.section>
  );
};

export default Testimonials;
