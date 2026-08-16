import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from './components/AnimatedBackground';
import { BlurText } from './components/BlurText';
import { WistiaVideoPlayer } from './components/WistiaVideoPlayer';
import { CalEmbed } from './components/CalEmbed';
import { CurriculumAccordion } from './components/CurriculumAccordion';
import { FaqAccordion } from './components/FaqAccordion';
import { TestimonialsLightbox } from './components/TestimonialsLightbox';
import { 
  ArrowUpRight,
  ImageIcon, MovieIcon, LightbulbIcon 
} from './components/Icons';

declare const anime: any;

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating navbar animation
  useEffect(() => {
    if (typeof anime !== 'undefined') {
      anime({
        targets: '.anime-float-nav',
        translateY: [-3, 3],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 3500
      });
    }
  }, []);

  const sharedMotion = {
    initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
    whileInView: { filter: 'blur(0px)', opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: 'easeOut' as const }
  };

  return (
    <div ref={containerRef} className="bg-black min-h-screen selection:bg-white/20 selection:text-white relative">
      <AnimatedBackground />

      {/* Navbar - Glassmorphism, Fixed globally */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 lg:px-16 bg-white/[0.02] backdrop-blur-xl border-b border-white/10 pointer-events-auto">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start justify-center">
          <span className="font-heading italic text-2xl font-bold text-white tracking-tight">Zen Academy</span>
          <span className="text-[9px] uppercase tracking-widest text-white/40 font-semibold font-body">by Zen Acquisition™</span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Problem', href: '#problem' },
            { label: 'Results', href: '#results' },
            { label: 'Curriculum', href: '#curriculum' },
            { label: 'AI Engines', href: '#ai-engine' },
            { label: 'Deliverables', href: '#deliverables' },
            { label: 'FAQ', href: '#faq' },
          ].map((item) => (
            <a key={item.label} href={item.href} className="text-xs font-semibold tracking-wider text-white/70 uppercase font-body hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Apply Button */}
        <div className="flex items-center justify-between gap-4">
          <a 
            href="#booking" 
            className="bg-white text-black text-xs uppercase tracking-wide font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-white/10"
          >
            Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      <div className="relative z-10">
        
        {/* SCROLL 1: HERO & VSL */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-16 px-4 text-center">
          <motion.div 
            {...sharedMotion}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 mb-8 border border-white/5"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase font-body text-white/90">
              A 90-Day Training Program for Agency Owners, Coaches & Consultants
            </span>
          </motion.div>

          <BlurText 
            text="We Train Your Team To Land 20 to 30 High-Ticket Clients In 90 Days."
            className="text-4xl md:text-6xl lg:text-[5.2rem] font-heading italic text-white leading-[0.95] tracking-[-3px] max-w-5xl drop-shadow-2xl"
          />

          <motion.p 
            {...sharedMotion}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-base md:text-lg text-white/70 max-w-2xl font-body font-light leading-relaxed"
          >
            Implement it as taught or get a full refund. We train your team to run predictable cold outreach, AI LLM engines, and inbound acquisition in-house — so you never pay a lead gen agency again.
          </motion.p>

          {/* Flow steps indicator */}
          <motion.div 
            {...sharedMotion}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="my-8 flex flex-wrap items-center justify-center gap-4 text-xs tracking-wider uppercase font-body text-white/80"
          >
            <a href="#vsl-video" className="flex items-center gap-2 liquid-glass px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all">
              <span className="w-5 h-5 rounded-full bg-white text-black font-bold flex items-center justify-center text-[10px]">1</span>
              <span>Watch The Video</span>
            </a>
            <div className="hidden sm:block w-8 h-[1px] bg-white/20" />
            <a href="#booking" className="flex items-center gap-2 liquid-glass px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all">
              <span className="w-5 h-5 rounded-full bg-white/20 text-white font-bold flex items-center justify-center text-[10px]">2</span>
              <span>Book Your Enrollment Call</span>
            </a>
          </motion.div>

          {/* VSL Video Section */}
          <motion.div 
            id="vsl-video"
            {...sharedMotion}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full max-w-4xl mt-2 mb-10 px-2"
          >
            <WistiaVideoPlayer mediaId="8tc28mlc5m" />
          </motion.div>

          <motion.div 
            {...sharedMotion}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center justify-center mb-16"
          >
            <a 
              href="#booking" 
              className="group relative liquid-glass-strong rounded-full px-8 py-4 flex items-center gap-3 text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95 border border-white/10 shadow-lg shadow-white/5"
            >
              <span className="font-semibold tracking-wide text-sm uppercase">Schedule Your Free Enrollment Call</span> 
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </section>

        {/* SCROLL 2: THE REAL PROBLEM */}
        <section id="problem" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24">
          <div className="max-w-5xl w-full">
            <motion.div {...sharedMotion} className="text-xs font-bold tracking-widest text-white/40 uppercase mb-6">
              // The Real Problem
            </motion.div>
            
            <motion.h2 
              {...sharedMotion}
              className="text-4xl md:text-6xl font-heading italic text-white leading-none tracking-[-2px] mb-8"
            >
              Most coaches & agency owners don't have a delivery problem.<br />
              They have <span className="text-white/40">a pipeline problem.</span>
            </motion.h2>

            <motion.p {...sharedMotion} className="text-base md:text-lg text-white/70 font-body font-light mb-12 max-w-3xl">
              Every month looks different. Some months you're fully booked. Other months you're refreshing your inbox. And the worst part? You can't pinpoint why it keeps happening.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                "Spending hours every week on outreach that goes nowhere",
                "Posting content and waiting for it to somehow convert into booked calls",
                "Relying on referrals you can't predict, control, or scale",
                "Jumping between strategies — cold DMs one week, LinkedIn the next, email after",
                "Paying an agency every month for pipeline you never actually own",
                "Closing well when people show up — the problem is getting them to show up",
                "Watching other agencies scale while your lead flow stays inconsistent"
              ].map((pain, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="liquid-glass rounded-2xl p-5 border border-white/5 flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-red-400/80 mt-2 shrink-0" />
                  <p className="text-sm text-white/80 font-body font-light leading-relaxed">{pain}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              {...sharedMotion}
              className="liquid-glass-strong rounded-3xl p-8 md:p-10 border border-white/10"
            >
              <h3 className="text-xl font-heading italic text-white mb-4">The Truth About Scaling</h3>
              <p className="text-sm md:text-base text-white/75 font-body font-light leading-relaxed">
                The gap between where you are and where you want to be isn't your offer. It isn't your skills. It isn't your pricing. It's the absence of one thing — <strong className="text-white font-medium">a team that knows how to run outbound and land high-ticket clients predictably.</strong>
                <br /><br />
                That's not a you problem. That's a skills-and-systems gap inside your team. And that's exactly what we install over 90 days — not by running it for you, but by training your team to run it themselves, so you never have to pay another agency again.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SCROLL 3: RESULTS & TESTIMONIALS */}
        <section id="results" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24">
          <div className="max-w-6xl w-full text-center mb-16">
            <motion.div {...sharedMotion} className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">
              // Results From The System
            </motion.div>
            <motion.h2 {...sharedMotion} className="text-4xl md:text-6xl font-heading italic text-white tracking-[-2px] leading-none mb-6">
              Real clients. <span className="text-white/40">Real outcomes.</span>
            </motion.h2>
            <motion.p {...sharedMotion} className="text-base text-white/60 font-body font-light max-w-xl mx-auto">
              20+ coaches and agency owners across India have used the system. Click any screenshot below to inspect actual client result proof.
            </motion.p>
          </div>

          <TestimonialsLightbox />

          <motion.div {...sharedMotion} className="mt-16 text-center">
            <a 
              href="#booking" 
              className="inline-flex items-center gap-2 bg-white text-black text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:scale-105 transition-transform"
            >
              Schedule Your Free Enrollment Call <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-white/40 font-body mt-3">Helping coaches and agencies train their own outbound teams</p>
          </motion.div>
        </section>

        {/* SCROLL 4: THE 90-DAY SYSTEM & CURRICULUM */}
        <section id="curriculum" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24">
          <div className="max-w-6xl w-full">
            <motion.div {...sharedMotion} className="text-center mb-16">
              <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">// How It Works</div>
              <h2 className="text-4xl md:text-6xl font-heading italic text-white tracking-[-2px] leading-tight max-w-4xl mx-auto">
                We Train Your Team To Run The Exact Appointment Engine We Use, In 90 Days.
              </h2>
              <p className="text-base text-white/60 font-body font-light max-w-2xl mx-auto mt-4">
                A complete 90-day implementation program designed to take your team from inconsistent outreach to a trained, repeatable client acquisition system they run independently.
              </p>
            </motion.div>

            {/* 3 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { num: "01", title: "Foundation", desc: "We identify your ideal clients, sharpen your positioning, build your targeting criteria, and establish the foundation your team needs before outreach begins." },
                { num: "02", title: "Outbound", desc: "Your team learns the complete outbound engine — lead sourcing, cold email, LinkedIn, cold calling, messaging, follow-up, and daily execution." },
                { num: "03", title: "Mastery", desc: "We review real conversations, fix objections, improve qualification, increase booking rates, and train your team until they operate the system without depending on us." }
              ].map((step, i) => (
                <motion.div 
                  key={step.num}
                  {...sharedMotion}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  className="liquid-glass rounded-3xl p-8 border border-white/5 flex flex-col"
                >
                  <span className="font-heading italic text-4xl text-white/30 font-bold mb-6">{step.num}</span>
                  <h3 className="text-2xl font-heading italic text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-white/65 font-body font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* System Metrics Banner */}
            <motion.div 
              {...sharedMotion}
              className="liquid-glass-strong rounded-3xl p-8 md:p-12 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20"
            >
              <div>
                <span className="block text-4xl md:text-5xl font-heading italic text-white font-bold">90</span>
                <span className="text-xs uppercase tracking-widest text-white/50 font-body mt-2 block">Days of Implementation</span>
              </div>
              <div className="md:border-x border-white/10 px-4">
                <span className="block text-4xl md:text-5xl font-heading italic text-white font-bold">13</span>
                <span className="text-xs uppercase tracking-widest text-white/50 font-body mt-2 block">Weeks of Training</span>
              </div>
              <div>
                <span className="block text-4xl md:text-5xl font-heading italic text-white font-bold">20–30</span>
                <span className="text-xs uppercase tracking-widest text-white/50 font-body mt-2 block">Target Client Outcomes</span>
              </div>
            </motion.div>

            {/* Curriculum Accordion */}
            <motion.div {...sharedMotion} className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest text-white/40 uppercase mb-2 block">// 90-Day Curriculum</span>
              <h3 className="text-3xl font-heading italic text-white">What Your Team Will Learn</h3>
              <p className="text-sm text-white/60 font-body mt-2">Expand each week to see the exact implementation topics.</p>
            </motion.div>

            <CurriculumAccordion />
          </div>
        </section>

        {/* SCROLL 5: ROBOTS & LLM ENGINES */}
        <section id="ai-engine" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24">
          <div className="max-w-6xl w-full">
            <motion.div {...sharedMotion} className="text-center mb-16">
              <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">// Modern Tech Stack</div>
              <h2 className="text-4xl md:text-6xl font-heading italic text-white tracking-[-2px] leading-tight max-w-3xl mx-auto">
                Autonomous AI Robots & LLM Outreach Engines
              </h2>
              <p className="text-base text-white/60 font-body font-light max-w-xl mx-auto mt-4">
                We equip your agency with cutting-edge AI scraper bots and LLM personalization prompts that automate cold prospect research and outreach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <ImageIcon className="w-6 h-6" />,
                  title: "Lead Scraper Robots",
                  tags: ["B2B Data", "Bots", "Verification"],
                  body: "Automated scraper bots that scour LinkedIn, company directories, and web databases to extract verified decision-maker emails and phone numbers."
                },
                {
                  icon: <MovieIcon className="w-6 h-6" />,
                  title: "LLM Personalizer",
                  tags: ["ChatGPT", "Claude", "Prompts"],
                  body: "Custom LLM prompts that analyze prospect websites and recent posts to craft hyper-contextual personalized cold emails and DMs at scale."
                },
                {
                  icon: <LightbulbIcon className="w-6 h-6" />,
                  title: "Booking Agents",
                  tags: ["Qualification", "Cal.com", "Auto"],
                  body: "Automated qualification agents that answer initial prospect FAQs, filter low-budget inquiries, and route hot leads directly to your sales calendar."
                }
              ].map((card, i) => (
                <motion.div 
                  key={card.title}
                  {...sharedMotion}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="liquid-glass rounded-3xl p-8 border border-white/5 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/80 border border-white/10">
                      {card.icon}
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      {card.tags.map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-wider text-white/40 font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-heading italic text-2xl tracking-[-1px] text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/60 font-body font-light leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SCROLL 6: FOR WHO VS NOT FOR WHO */}
        <section id="for-who" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24">
          <div className="max-w-5xl w-full">
            <motion.div {...sharedMotion} className="text-center mb-16">
              <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">// Mutual Fit</div>
              <h2 className="text-4xl md:text-6xl font-heading italic text-white tracking-[-2px]">
                The right fit <span className="text-white/40">matters.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For You */}
              <motion.div 
                {...sharedMotion}
                className="liquid-glass rounded-3xl p-8 md:p-10 border border-green-500/20 bg-green-950/[0.03]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <h3 className="text-2xl font-heading italic text-white">This Is For You If</h3>
                </div>
                <ul className="space-y-4 font-body">
                  {[
                    "You run a coaching business or agency doing at least ₹2L+/month",
                    "You have a proven offer that has closed at least one paying client",
                    "You want your own team running outbound in-house — not renting it every month",
                    "You've tried ads or content and want something predictable and permanent"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80 font-light leading-relaxed">
                      <span className="text-green-400 font-bold text-base leading-none">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Not For You */}
              <motion.div 
                {...sharedMotion}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="liquid-glass rounded-3xl p-8 md:p-10 border border-red-500/20 bg-red-950/[0.03]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <h3 className="text-2xl font-heading italic text-white">This Is NOT For You If</h3>
                </div>
                <ul className="space-y-4 font-body">
                  {[
                    "You don't have an offer that has closed at least one paying client",
                    "You're looking for a magic button with zero involvement from your team",
                    "You can't commit your team to the 90-day training and implementation window"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80 font-light leading-relaxed">
                      <span className="text-red-400 font-bold text-base leading-none">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SCROLL 7: DELIVERABLES */}
        <section id="deliverables" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24">
          <div className="max-w-5xl w-full">
            <motion.div {...sharedMotion} className="text-center mb-16">
              <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">// Deliverables</div>
              <h2 className="text-4xl md:text-6xl font-heading italic text-white tracking-[-2px] leading-tight">
                Everything your team needs to own acquisition in 90 days.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "A 90-day live training and implementation program for your team",
                "Ideal client profile framework and targeting playbook, yours to keep permanently",
                "Cold email + LinkedIn + calling scripts and sequences, fully editable and owned by you",
                "Lead qualification framework so your team only books calls worth taking",
                "Weekly live coaching and pipeline reviews during the 90 days",
                "Direct access to your trainer throughout the entire program"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...sharedMotion}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="liquid-glass rounded-2xl p-6 border border-white/5 flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-white/60 mt-2 shrink-0" />
                  <p className="text-sm text-white/80 font-body font-light leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Stated Target Outcome Card */}
            <motion.div 
              {...sharedMotion}
              className="liquid-glass-strong rounded-3xl p-8 md:p-10 border border-white/10 text-center"
            >
              <h3 className="text-xl font-heading italic text-white mb-2">The Guaranteed Target Outcome</h3>
              <p className="text-sm md:text-base text-white/90 font-body font-light leading-relaxed max-w-2xl mx-auto">
                <strong>20 to 30 qualified show-up appointments in 90 days — guaranteed, when you implement the program as taught.</strong> No ongoing retainer after that. Your team runs it permanently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SCROLL 8: FAQ */}
        <section id="faq" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24">
          <div className="max-w-5xl w-full">
            <motion.div {...sharedMotion} className="text-center mb-16">
              <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">// FAQ</div>
              <h2 className="text-4xl md:text-6xl font-heading italic text-white tracking-[-2px]">
                Common <span className="text-white/40">Questions.</span>
              </h2>
            </motion.div>

            <FaqAccordion />
          </div>
        </section>

        {/* SCROLL 9: BOOKING & FOOTER */}
        <section id="booking" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24 text-center">
          <motion.div {...sharedMotion} className="mb-12">
            <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">// Book Your Call</div>
            <h2 className="text-4xl md:text-6xl font-heading italic text-white tracking-[-2px] leading-tight mb-4">
              Ready to Train <span className="text-white/40">Your Team?</span>
            </h2>
            <p className="text-white/60 font-body max-w-lg mx-auto">
              Pick a time below. No pressure, no hard pitch. Just a focused conversation about your business, pipeline, and team capacity.
            </p>
          </motion.div>

          <motion.div {...sharedMotion} className="w-full max-w-4xl mx-auto mb-16">
            <CalEmbed calLink="zenacquisition/strategy" />
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mb-16 flex flex-col items-center gap-6"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
              Trusted by 40+ agency founders across India & global markets
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/30">
              {['Zenith', 'Vela', 'Apex', 'Orbit', 'Zeno'].map(logo => (
                <span key={logo} className="font-heading italic text-2xl md:text-3xl tracking-tight hover:text-white/60 transition-colors cursor-default">
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>

          {/* FOOTER */}
          <footer className="w-full border-t border-white/5 pt-16 pb-8 px-4 md:px-16 bg-black/50 backdrop-blur-md relative z-10 text-left">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
              <div className="flex flex-col gap-4 max-w-sm">
                <div className="flex flex-col items-start justify-center">
                  <span className="font-heading italic text-2xl font-bold text-white tracking-tight">Zen Academy</span>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 font-semibold font-body">by Zen Acquisition™</span>
                </div>
                <p className="text-xs text-white/50 font-body leading-relaxed">
                  Zen Academy is a client acquisition training division operated under Zen Acquisition™ (UDYAM-WB-18-0184983, Proprietor: Sujit Samanta). We train agency owners and their internal teams to build predictable outbound, AI LLM engines, and inbound client acquisition systems.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-12 md:gap-16">
                <div className="flex flex-col gap-3">
                  <h4 className="text-white/80 font-bold text-xs uppercase tracking-widest mb-1">Navigation</h4>
                  <a href="#problem" className="text-xs text-white/50 hover:text-white transition-colors">The Problem</a>
                  <a href="#results" className="text-xs text-white/50 hover:text-white transition-colors">Results</a>
                  <a href="#curriculum" className="text-xs text-white/50 hover:text-white transition-colors">Curriculum</a>
                  <a href="#ai-engine" className="text-xs text-white/50 hover:text-white transition-colors">AI Engines</a>
                  <a href="#deliverables" className="text-xs text-white/50 hover:text-white transition-colors">Deliverables</a>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h4 className="text-white/80 font-bold text-xs uppercase tracking-widest mb-1">Standards</h4>
                  <a href="/robots.txt" target="_blank" className="text-xs text-white/50 hover:text-white transition-colors">Robots Directive</a>
                  <a href="/llms.txt" target="_blank" className="text-xs text-white/50 hover:text-white transition-colors">LLMs Manifest</a>
                  <a href="https://zenacquisition.com/terms-and-conditions" className="text-xs text-white/50 hover:text-white transition-colors">UDYAM Ownership</a>
                </div>
              </div>
            </div>
            
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30 font-body gap-4">
              <p>&copy; {new Date().getFullYear()} Zen Academy (Zen Acquisition™). All rights reserved.</p>
              <div className="flex gap-6">
                <a href="https://zenacquisition.com/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
                <a href="https://zenacquisition.com/terms-and-conditions" className="hover:text-white/60 transition-colors">Terms of Service</a>
                <a href="https://zenacquisition.com/earning-disclaimer" className="hover:text-white/60 transition-colors">Earnings Disclaimer</a>
              </div>
            </div>
          </footer>
        </section>

      </div>
    </div>
  );
}

export default App;
