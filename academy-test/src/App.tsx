import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from './components/AnimatedBackground';
import { BlurText } from './components/BlurText';
import { WistiaVideoPlayer } from './components/WistiaVideoPlayer';
import { 
  ArrowUpRight,
  ImageIcon, MovieIcon, LightbulbIcon 
} from './components/Icons';

declare const anime: any;

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating navbar animation
  useEffect(() => {
    anime({
      targets: '.anime-float-nav',
      translateY: [-3, 3],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 3500
    });
  }, []);

  const sharedMotion = {
    initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
    whileInView: { filter: 'blur(0px)', opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: 'easeOut' as const }
  };

  return (
    <div ref={containerRef} className="bg-black min-h-[500vh] selection:bg-white/20 selection:text-white relative">
      <AnimatedBackground />

      {/* Navbar - Glassmorphism, Fixed globally */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 lg:px-16 bg-white/[0.02] backdrop-blur-xl border-b border-white/10 pointer-events-auto">
        {/* Logo - Hidden on mobile */}
        <div className="hidden md:flex flex-col items-start justify-center">
          <span className="font-heading italic text-2xl font-bold text-white tracking-tight">Zen Academy</span>
          <span className="text-[9px] uppercase tracking-widest text-white/40 font-semibold font-body">by Zen Acquisition™</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Thesis', 'Systems', 'Capabilities'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold tracking-wider text-white/70 uppercase font-body hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
        
        {/* Mobile controls & Apply Button */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          {/* Hamburger Menu (Mobile Only) */}
          <button className="md:hidden text-white/80 hover:text-white p-2 -ml-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>

          <a 
            href="https://cal.com/kgphustlehouse/seo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-auto bg-white text-black text-xs uppercase tracking-wide font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
          >
            Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      <div className="relative z-10">
        
        {/* SCROLL 1: THE ELITE HERO */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-16 px-4 text-center">
          <motion.div 
            {...sharedMotion}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 mb-8 border border-white/5"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase font-body text-white/90">
              Zen Academy Founding Cohort Open
            </span>
          </motion.div>

          <BlurText 
            text="Train Your Team To Land 20-30 Clients In 90 Days"
            className="text-5xl md:text-7xl lg:text-[5.8rem] font-heading italic text-white leading-[0.9] tracking-[-3px] max-w-5xl drop-shadow-2xl"
          />

          <motion.p 
            {...sharedMotion}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-base md:text-lg text-white/70 max-w-2xl font-body font-light leading-relaxed"
          >
            We build predictable cold outreach engines, autonomous AI robots, and inbound LinkedIn systems directly inside your agency. Implement it as taught or get a full refund.
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
            <a href="https://cal.com/kgphustlehouse/seo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 liquid-glass px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all">
              <span className="w-5 h-5 rounded-full bg-white/20 text-white font-bold flex items-center justify-center text-[10px]">2</span>
              <span>Book Enrollment Call</span>
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
            className="flex items-center justify-center"
          >
            <a 
              href="https://cal.com/kgphustlehouse/seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative liquid-glass-strong rounded-full px-8 py-4 flex items-center gap-3 text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95 border border-white/10 shadow-lg shadow-white/5"
            >
              <span className="font-semibold tracking-wide text-sm uppercase">Schedule Your Free Enrollment Call</span> 
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </section>

        {/* SCROLL 2: THE PROBLEM (AGITATION) */}
        <section id="thesis" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24">
          <div className="max-w-4xl w-full">
            <motion.div {...sharedMotion} className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">
              // The Reality
            </motion.div>
            
            <motion.h2 
              {...sharedMotion}
              className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-none tracking-[-2px] mb-12"
            >
              Most agencies plateau because they rely on referrals and outdated outbound.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Unpredictable Revenue", desc: "Feast or famine cycles make it impossible to hire top talent or scale operations confidently." },
                { title: "Commoditized Positioning", desc: "Looking exactly like every other agency, forcing you to compete purely on price rather than value." }
              ].map((pain, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="pl-6 border-l border-white/10"
                >
                  <h3 className="text-xl font-body font-medium text-white mb-2">{pain.title}</h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{pain.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SCROLL 3: THE FRAMEWORK (SOLUTION/PRICING) */}
        <section id="systems" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-16 py-24">
          <div className="max-w-6xl w-full">
             <motion.div {...sharedMotion} className="text-center mb-16">
              <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">// The Systems</div>
              <h2 className="text-5xl md:text-7xl font-heading italic text-white tracking-[-3px] leading-none">
                Elite Growth Infrastructure
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tier 1 */}
              <motion.div 
                {...sharedMotion}
                className="liquid-glass rounded-[2rem] p-8 md:p-12 border border-white/5 flex flex-col"
              >
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-2xl font-body font-medium text-white">75-Day Team Program</h3>
                    <p className="text-sm text-white/50 mt-1">For agency owners & internal teams.</p>
                  </div>
                  <div className="text-4xl font-heading italic text-white tracking-[-1px]">₹60k</div>
                </div>
                
                <ul className="space-y-4 mb-12 flex-1">
                  {['75-Day Team Training & Cohort Access', 'Cold Calling & WhatsApp B2B Outreach', 'LinkedIn Inbound Personal Brand Engine', 'Unlimited Team Seats Included', '20-30 Clients Stated Target Outcome'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/80 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Tier 2 */}
              <motion.div 
                {...sharedMotion}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="liquid-glass-strong rounded-[2rem] p-8 md:p-12 border border-white/10 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-white text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Recommended
                  </span>
                </div>
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-2xl font-body font-medium text-white">AI & Scale Architecture</h3>
                    <p className="text-sm text-white/70 mt-1">The complete automated transformation.</p>
                  </div>
                  <div className="text-4xl font-heading italic text-white tracking-[-1px]">₹99k</div>
                </div>
                
                <ul className="space-y-4 mb-12 flex-1">
                  {['Everything in 75-Day Team Program', 'Autonomous Scraper Robots Setup', 'Custom LLM Cold Outreach Personalizer', 'Automated Lead Qualification & Booking Agents', '90-Day Direct Scaling Partnership'].map((item, i) => (
                    <li key={item} className={`flex items-center gap-3 text-sm ${i === 0 ? 'text-white/60' : 'text-white/90'} font-light`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SCROLL 4: CAPABILITIES */}
        <section id="capabilities" className="min-h-screen w-full flex flex-col justify-center px-4 md:px-16 lg:px-20 py-24">
          <motion.div {...sharedMotion} className="mb-16">
            <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-6">// Studio & Systems Craft</div>
            <h2 className="font-heading italic text-5xl md:text-7xl leading-[0.9] tracking-[-3px] text-white max-w-3xl">
              Predictable growth engineered.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <ImageIcon className="w-6 h-6" />,
                title: "Outbound & Cold Outreach",
                tags: ["Cold Calling", "WhatsApp", "B2B"],
                body: "Scripted, repeatable cold outreach engines built directly for your team. Turn cold lists into high-intent sales conversations."
              },
              {
                icon: <MovieIcon className="w-6 h-6" />,
                title: "Robots & LLM Outreach",
                tags: ["AI Bots", "LLMs", "Scrapers"],
                body: "Autonomous scraper bots and LLM personalization engines that research prospects, craft customized openers, and automate booking."
              },
              {
                icon: <LightbulbIcon className="w-6 h-6" />,
                title: "Inbound Authority & Brand",
                tags: ["LinkedIn", "Content", "Offers"],
                body: "Position your agency as the clear category authority with high-converting offer design and compounding organic LinkedIn engines."
              }
            ].map((card, i) => (
              <motion.div 
                key={card.title}
                initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
                whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="liquid-glass rounded-[1.5rem] p-8 border border-white/5 flex flex-col hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/80 border border-white/10">
                    {card.icon}
                  </div>
                  <div className="flex flex-col gap-1.5 items-end">
                    {card.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="font-heading italic text-3xl tracking-[-1px] text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/60 font-body font-light leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SCROLL 5: FINAL PUSH */}
        <section className="min-h-[80vh] w-full flex flex-col items-center justify-center px-4 md:px-16 py-24 text-center">
          <motion.div 
            {...sharedMotion}
            className="liquid-glass-strong rounded-[3rem] p-12 md:p-24 border border-white/10 w-full max-w-5xl flex flex-col items-center relative overflow-hidden"
          >
            {/* Ambient glow inside final card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
            
            <h2 className="text-5xl md:text-7xl font-heading italic text-white tracking-[-2px] leading-[0.9] mb-8 relative z-10">
              Ready to land <br /> 20-30 clients in 90 days?
            </h2>
            <p className="text-white/60 font-body max-w-lg mb-12 relative z-10">
              Schedule a 15-minute qualification call to see if Zen Academy aligns with your agency's goals.
            </p>
            
            <a 
              href="https://cal.com/kgphustlehouse/seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 bg-white text-black text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Apply for Enrollment <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-20 flex flex-col items-center gap-6"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
              Trusted by 40+ agency founders across India & global markets
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/30">
              {['Zenith', 'Vela', 'Apex', 'Orbit', 'Zeno'].map(logo => (
                <span key={logo} className="font-heading italic text-2xl md:text-3xl tracking-tight transition-colors hover:text-white/60 cursor-default">
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="w-full border-t border-white/5 pt-16 pb-8 px-8 md:px-16 bg-black/50 backdrop-blur-md relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex flex-col items-start justify-center">
                <span className="font-heading italic text-2xl font-bold text-white tracking-tight">Zen Academy</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 font-semibold font-body">by Zen Acquisition™</span>
              </div>
              <p className="text-sm text-white/50 font-body leading-relaxed">
                Zen Academy trains agency owners and their internal teams to build predictable outbound, AI LLM engines, and inbound acquisition systems to land 20-30 high-ticket clients.
              </p>
            </div>
            
            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="text-white/80 font-bold text-xs uppercase tracking-widest mb-2">Navigation</h4>
                <a href="#thesis" className="text-sm text-white/50 hover:text-white transition-colors">Thesis</a>
                <a href="#systems" className="text-sm text-white/50 hover:text-white transition-colors">Systems</a>
                <a href="#capabilities" className="text-sm text-white/50 hover:text-white transition-colors">Capabilities</a>
              </div>
              
              <div className="flex flex-col gap-4">
                <h4 className="text-white/80 font-bold text-xs uppercase tracking-widest mb-2">Standards</h4>
                <a href="/robots.txt" target="_blank" className="text-sm text-white/50 hover:text-white transition-colors">Robots Directive</a>
                <a href="/llms.txt" target="_blank" className="text-sm text-white/50 hover:text-white transition-colors">LLMs Manifest</a>
                <a href="https://zenacquisition.com/terms-and-conditions" className="text-sm text-white/50 hover:text-white transition-colors">UDYAM Disclosures</a>
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30 font-body">
            <p>&copy; {new Date().getFullYear()} Zen Academy (Zen Acquisition™). All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://zenacquisition.com/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="https://zenacquisition.com/terms-and-conditions" className="hover:text-white/60 transition-colors">Terms of Service</a>
              <a href="https://zenacquisition.com/earning-disclaimer" className="hover:text-white/60 transition-colors">Earnings Disclaimer</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
