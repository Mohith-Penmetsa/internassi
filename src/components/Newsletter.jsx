import React from 'react';
import '../styles/cta.css';

const Newsletter = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        
        {/* Decorative arrows */}
        <div className="cta-arrows">
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10 Q 50 -10, 80 30 T 40 70" stroke="#f87171" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M35 60 L 40 70 L 50 65" stroke="#f87171" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            
            <path d="M40 20 Q 70 0, 90 40 T 60 75" stroke="#f87171" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M55 65 L 60 75 L 70 70" stroke="#f87171" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h2 className="cta-title">
          Subscribe to<br />
          our newsletter
        </h2>
        
        <p className="cta-desc">
          To make your stay special and even more memorable
        </p>
        
        <button className="btn-primary cta-btn">
          Subscribe Now
        </button>

        <div className="cta-shape-purple"></div>
      </div>
    </section>
  );
};

export default Newsletter;
