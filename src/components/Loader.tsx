import { motion } from "motion/react";
import React, { useEffect } from "react";

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void; key?: React.Key }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000); // 2 seconds loading text
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-[#080808] flex items-center justify-center flex-col"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-black tracking-tighter text-white"
      >
        S<span className="text-indigo-500">.</span>
      </motion.div>
      
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "120px", opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="h-[2px] bg-neutral-800 mt-8 relative overflow-hidden"
      >
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
          className="absolute inset-0 bg-indigo-500"
        />
      </motion.div>
    </motion.div>
  );
}
