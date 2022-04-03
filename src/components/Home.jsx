import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="App"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="container">
        <h1>Justin's Pizzeria</h1>
        <h3>Pizza to fit any taste</h3>
        <button className="orderBtn">Order Now</button>
      </div>
    </motion.div>
  );
};

export default Home;
