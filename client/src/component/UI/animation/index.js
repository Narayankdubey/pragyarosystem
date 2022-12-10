import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    // y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const Animation = ({ children }) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        <h1>animation</h1>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Animation;
