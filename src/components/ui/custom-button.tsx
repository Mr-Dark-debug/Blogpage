"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomButton = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Link href="/blog">
      <motion.button 
        className="flex w-[200px] h-fit bg-[#1d2129] rounded-[40px] shadow-lg shadow-gray-300 dark:shadow-gray-950 justify-between items-center border-none cursor-pointer group hover:bg-[#252932] transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-[155px] h-full flex items-center justify-center text-white text-[1.1em] tracking-[1.2px]">
          {isLoading ? (
            <motion.div 
              className="flex space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.1 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.3 }}
              />
            </motion.div>
          ) : (
            "Read Articles"
          )}
        </span>
        <span className="w-[45px] h-[45px] bg-[#f59aff] flex items-center justify-center rounded-full border-[3px] border-[#1d2129] group-hover:border-[#252932] transition-colors">
          <AnimatePresence>
            {!isLoading && (
              <motion.svg 
                width={16} 
                height={19} 
                viewBox="0 0 16 19" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="animate-none group-hover:animate-arrow"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black" />
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black" />
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black" />
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black" />
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black" />
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black" />
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black" />
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black" />
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black" />
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black" />
              </motion.svg>
            )}
          </AnimatePresence>
        </span>
      </motion.button>
    </Link>
  );
}

export default CustomButton; 