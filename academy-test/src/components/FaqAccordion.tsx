import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How is this different from hiring an agency?",
    answer: "An agency runs your pipeline for you, every month, for as long as you keep paying them retainer fees. Zen Academy is a 90-day training & system implementation program — we train your internal team to run the exact acquisition system we use, so by day 90 your team owns it outright and you never have to pay a lead gen agency again."
  },
  {
    question: "How quickly do we start seeing results?",
    answer: "Most teams start booking qualified sales calls within the first 7–10 business days of executing the outbound protocols. The full engine ramps up over the 90-day implementation window, with months 2 and 3 generating compounding pipeline."
  },
  {
    question: "What do I need to have ready before starting?",
    answer: "A proven offer that has closed at least one paying client, someone on your team who can dedicate time to outbound execution, and a calendar booking link. We train your team on everything else — copy, lead targeting, script execution, objections, and CRM management."
  },
  {
    question: "Do you run paid ads?",
    answer: "No. We train a 100% organic, highly targeted outbound and inbound acquisition engine — cold outreach, WhatsApp B2B, LinkedIn authority branding, and AI LLM personalization. No ad spend required, keeping your margins high and ROI clean."
  },
  {
    question: "What industries do you work with?",
    answer: "Primarily digital marketing agencies, dev shops, B2B consulting, coaching, and professional services companies in India and global emerging markets. If you have a high-ticket service offer (₹50k-₹5L+) and a team ready to be trained, our systems apply directly."
  },
  {
    question: "What happens on the enrollment call?",
    answer: "It's a focused 30-minute call to evaluate your current offer, sales pipeline, and team capacity. We'll outline what the 90-day program covers, explain how the 20-30 client guarantee works, and determine if it's the right mutual fit."
  }
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="liquid-glass border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-body font-medium text-lg text-white pr-4">
                {item.question}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                <span className="text-xl leading-none">{isOpen ? '−' : '+'}</span>
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 font-body">
                    <p className="text-white/70 text-sm font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
