import React from 'react';
import '../styles/services.css';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="services container"
    >
      <div className="services-header">
        <h2 className="services-title">
          What we <span className="pill-text pill-green">can</span><br/>
          <span className="underline-text">offer<span className="underline-shape"></span></span> you!
        </h2>
      </div>

      <div className="services-list">
        <div className="service-item">
          <div className="service-desc">
            Office of multiple<br/>interest content
          </div>
          <h3 className="service-name">Colaborative & partnership</h3>
          <div className="service-arrow">
            <ArrowRight size={24} strokeWidth={1} />
          </div>
        </div>

        <div className="service-item">
          <div className="service-desc">
            The hanger US Air force<br/>digital experimental
          </div>
          <h3 className="service-name">We talk about our weight</h3>
          <div className="service-arrow">
            <ArrowRight size={24} strokeWidth={1} />
          </div>
        </div>

        <div className="service-item">
          <div className="service-desc">
            Delta faucet content,<br/>social, digital
          </div>
          <h3 className="service-name relative">
            Piloting digital con
            <span className="image-mask-text">fi</span>
            dence
            <div className="text-image-mask"></div>
          </h3>
          <div className="service-arrow">
            <ArrowRight size={24} strokeWidth={1} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
