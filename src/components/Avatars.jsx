import React from 'react';
import { motion } from 'framer-motion';

const Avatars = () => {
  return (
    <motion.div 
      className="avatar-container"
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="avatar avatar-1"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="User 1" /></div>
      <div className="avatar avatar-2"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" alt="User 2" /></div>
      <div className="avatar avatar-3"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="User 3" /></div>
      <div className="avatar avatar-4"><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" alt="User 4" /></div>
      <div className="avatar avatar-5"><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop" alt="User 5" /></div>
    </motion.div>
  );
};

export default Avatars;
