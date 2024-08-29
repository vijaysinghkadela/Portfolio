import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Background = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, window.innerHeight], [-15, 15]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          rotateX,
          rotateY,
          backgroundImage: `url(${"../../public/Images/background-Image.jpg"})`,
        }}
      />
    </div>
  );
};

export default Background;
