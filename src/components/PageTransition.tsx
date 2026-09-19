import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    initial: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 16,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)'
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
      filter: shouldReduceMotion ? 'none' : 'blur(2px)',
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.25,
        ease: 'easeIn'
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* Subtle architectural top scanline accent on page load */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9383A] to-transparent origin-left z-50 pointer-events-none"
        />
      )}
      {children}
    </motion.div>
  );
};
