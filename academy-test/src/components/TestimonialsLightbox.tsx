import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const screenshots = [
  { src: '/t1.webp', title: 'Client Result 1' },
  { src: '/t2.webp', title: 'Client Result 2' },
  { src: '/t3.webp', title: 'Client Result 3' },
  { src: '/t4.webp', title: 'Client Result 4' },
  { src: '/t5.webp', title: 'Client Result 5' },
  { src: '/t6.webp', title: 'Client Result 6' },
];

export const TestimonialsLightbox: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Screenshots Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {screenshots.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImg(item.src)}
            className="liquid-glass border border-white/10 rounded-2xl overflow-hidden cursor-pointer group relative aspect-[4/3] bg-black/60 shadow-lg"
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs uppercase font-bold tracking-widest text-white bg-black/60 px-4 py-2 rounded-full border border-white/20">
                Click to Enlarge
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              alt="Enlarged Client Result"
              className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/20 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
