import React from "react";

import { useViewportScroll, motion, useTransform } from "framer-motion";

function ParallaxBackground() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 3000], [-2500, 0]);
  const y2 = useTransform(scrollY, [70, 3000], [-3000, 0]);
  const y3 = useTransform(scrollY, [30, 2000], [-5000, 0]);

  return (
    <>
      <div className="bodyDiv">
        <motion.div className="box" style={{ y: y1, x: -50 }} />
        <motion.div
          className="box"
          style={{ y: y2, x: 50, background: "salmon" }}
        />
        <motion.div
          className="box"
          style={{ y: y3, x: 0, background: "green" }}
        />
      </div>
    </>
  );
}
