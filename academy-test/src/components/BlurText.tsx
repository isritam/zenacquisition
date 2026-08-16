import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
declare const anime: any;

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Example of combining anime.js for a subtle floating effect after entrance
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isInView && containerRef.current) {
      anime({
        targets: containerRef.current.children,
        translateY: ['0px', '-2px', '0px'],
        duration: 3000,
        loop: true,
        easing: 'easeInOutSine',
        delay: anime.stagger(100, { start: 1000 })
      });
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className}>
      <div 
        ref={containerRef}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '0.1em' }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.1,
              ease: 'easeOut',
            }}
            style={{ display: 'inline-block', marginRight: '0.28em' }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
