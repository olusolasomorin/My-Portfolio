import { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import dp from  '../assets/dp3.PNG'

/**
 * LoadingScreen Component
 * Updated to use a custom image instead of the SVG logo.
 */
const LoadingScreen = ({ onFinished }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const duration = 2500; 
    const intervalTime = 20; 
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 500);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
    >
      <div className="relative flex flex-col items-center">
        {/* User Image replacing the SVG Logo */}
        <div className="mb-12 relative">
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="w-50 h-50 md:w-50 md:h-50 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shadow-blue-500/20"
          >
            <img 
              src={dp} 
              alt="Olusola"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Subtle spinning ring around image */}
          <motion.div 
            className="absolute -inset-2 border border-dashed border-white/10 rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-baseline font-mono">
            <motion.span 
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              {Math.floor(counter)}
            </motion.span>
            <span className="text-xl md:text-2xl font-light text-gray-500 ml-1">%</span>
          </div>
          
          <div className="w-40 h-px bg-white/10 mt-2 relative overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${counter}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-10 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium"
      >
        Initializing Portfolio
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;