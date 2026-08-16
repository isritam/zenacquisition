import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WeekItem {
  week: string;
  title: string;
  desc: string;
  bullets: string[];
}

const curriculumData: WeekItem[] = [
  {
    week: "01",
    title: "Foundation & Client Acquisition Strategy",
    desc: "Establish the foundation for the acquisition system. Define the business model, offer, ideal client profile, target market, acquisition goals, and current pipeline.",
    bullets: [
      "Ideal Client Profile & Niche Selection",
      "Offer Positioning & Value Architecture",
      "Client Acquisition Goals & Target Revenue",
      "Baseline Pipeline Audit & Bottleneck Removal"
    ]
  },
  {
    week: "02",
    title: "Prospecting Psychology & Outreach Fundamentals",
    desc: "Build the mindset and execution fundamentals required for consistent outbound without relying on motivation, referrals, or paid ads.",
    bullets: [
      "Outbound Sales Psychology & B2B Trust",
      "Understanding Buyer Intent & Triggers",
      "Prospecting Execution Principles",
      "Common Outreach Pitfalls to Avoid",
      "Building a Daily Execution Routine"
    ]
  },
  {
    week: "03",
    title: "Lead Sourcing & Targeting Playbook",
    desc: "Teach your team how to consistently identify and build targeted lists of qualified decision-makers instead of buying junk lists.",
    bullets: [
      "Decision-Maker Sourcing & Research",
      "Target Account Identification (ICP)",
      "Lead Qualification & Verification Criteria",
      "Building & Enrichment of Prospect Database"
    ]
  },
  {
    week: "04",
    title: "Messaging, Scripts & Outreach Infrastructure",
    desc: "Build the actual communication assets your team will use across cold email, LinkedIn, WhatsApp, and cold calling.",
    bullets: [
      "High-Converting Cold Email Scripts",
      "LinkedIn Direct Outreach Frameworks",
      "Cold Calling Scripts & Conversation Starters",
      "Multi-Channel Follow-Up Sequences",
      "Hyper-Personalization Framework"
    ]
  },
  {
    week: "05",
    title: "Live Outreach Execution & Activity Tracking",
    desc: "Your team begins executing the system against real prospects while receiving live feedback, activity auditing, and correction.",
    bullets: [
      "Daily Prospecting & Outreach Execution",
      "Live Call Audits & Message Testing",
      "Pipeline Activity & KPI Tracking",
      "Real-Time Response Handling"
    ]
  },
  {
    week: "06",
    title: "Follow-Up & Appointment Generation Engine",
    desc: "Turn initial prospect conversations into consistent multi-touch follow-up routines and qualified booked sales appointments.",
    bullets: [
      "Follow-Up Psychology & Frequency",
      "Multi-Touch Omni-Channel Sequences",
      "Appointment Setting & Calendar Booking",
      "Strict Lead Show-Up Qualification"
    ]
  },
  {
    week: "07",
    title: "First Performance Checkpoint & Bottleneck Removal",
    desc: "Review the team's real-world campaign performance and eliminate the highest-impact bottlenecks in your acquisition engine.",
    bullets: [
      "Comprehensive Pipeline Review",
      "Recorded Call & Conversation Review",
      "Outreach Response & Conversion Analysis",
      "Targeted Corrective Action Plan"
    ]
  },
  {
    week: "08",
    title: "Objection Handling & Conversation Control",
    desc: "Train the team to handle resistance confidently, neutralize common objections, and keep qualified sales conversations advancing.",
    bullets: [
      "Neutralizing Price & Retainer Objections",
      "Overcoming Timing & 'Send Me Info' Objections",
      "Authority & Decision-Maker Routing",
      "Maintaining Conversation Control"
    ]
  },
  {
    week: "09",
    title: "Campaign Optimization & Conversion Improvement",
    desc: "Use real campaign data to sharpen targeting, refine message scripts, increase show-up rates, and optimize overall throughput.",
    bullets: [
      "Campaign Data & Analytics Deep Dive",
      "A/B Script & Message Iteration",
      "Lead Quality & Qualification Upgrades",
      "Pipeline Throughput Optimization"
    ]
  },
  {
    week: "10",
    title: "Advanced Calling & Sales Closing Skills",
    desc: "Develop high-ticket discovery and closing skills through live roleplaying, recorded call scoring, and advanced negotiation.",
    bullets: [
      "Advanced B2B Discovery Call Structure",
      "Uncovering Pain & Financial Impact",
      "Qualifying Budget & Need Urgency",
      "Live Roleplaying & Call Scoring"
    ]
  },
  {
    week: "11",
    title: "Second Performance Checkpoint & Team Assessment",
    desc: "Conduct a second deep performance audit using live campaign metrics, booking rates, and team execution benchmarks.",
    bullets: [
      "Pipeline Metric & Show-Up Rate Audit",
      "Individual Team Member Competency Scoring",
      "Closing Rate & Retainer Value Analysis",
      "Final Engine Optimization Plan"
    ]
  },
  {
    week: "12",
    title: "Systemization, SOPs & Management Dashboards",
    desc: "Turn the 90-day training into a permanent internal operating system that runs predictably without daily owner supervision.",
    bullets: [
      "Creation of Custom Outbound SOPs",
      "Team Role Definitions & Daily KPIs",
      "Executive Management Dashboards",
      "Internal Quality Control Framework"
    ]
  },
  {
    week: "13",
    title: "Final Mastery & 90-Day Independence",
    desc: "Complete the final assessment and ensure your team independently operates, optimizes, and scales the appointment engine permanently.",
    bullets: [
      "Final Performance & Target Checkpoint",
      "Complete Acquisition System Audit",
      "Long-Term Scaling & Growth Roadmap",
      "Permanent In-House Independence"
    ]
  }
];

export const CurriculumAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {curriculumData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.week}
            className="liquid-glass border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="font-heading italic text-xl text-white/50 font-bold min-w-[2.5rem]">
                  W{item.week}
                </span>
                <span className="font-body font-medium text-lg text-white">
                  {item.title}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0 ml-4">
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
                    <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-white/80 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
