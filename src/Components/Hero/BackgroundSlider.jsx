import { useEffect, useState } from "react";
import "./BackgroundSlider.css";
import { motion } from "framer-motion";

import imageSlide from "../../data/Hero/heroData";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 2,
    },
  },
};
function BackgroundSlider() {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 1) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  return (
    <div className="container-style mb-5">
      <div style={bgImageStyle}></div>
      <div className="transparent-background"></div>
      <div className="description">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
        >
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
            className="text-primary"
          >
            {imageSlide[currentState].title}
          </motion.p>
          <motion.h2
            initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
          >
            {imageSlide[currentState].body}
          </motion.h2>
        </motion.div>
        <div className="carousel-boult">
          {imageSlide.map((imageSlide, currentState) => (
            <span
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackgroundSlider;
