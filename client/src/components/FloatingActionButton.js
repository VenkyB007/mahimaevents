import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingActionButton() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToContact}
        className="bg-accent hover:bg-accent/90 text-white w-16 h-16 rounded-full shadow-2xl transition-all duration-300 animate-pulse-slow"
      >
        <i className="fas fa-comments text-xl"></i>
      </motion.button>
    </motion.div>
  );
}