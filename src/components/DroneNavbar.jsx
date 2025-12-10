import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, UserCheck } from 'lucide-react';
import { AuthModal } from './AuthModal';

// Your Original Drone — Untouched & Beautiful
const DroneSVG = ({ spinning = true, side }) => (
  <svg width="120" height="80" viewBox="0 0 120 80" className="drop-shadow-2xl overflow-visible">
    <defs>
      <linearGradient id="metal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="50%" stopColor="#475569" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <filter id="blur-rotor">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
      </filter>
    </defs>

    <motion.g
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: side === 'left' ? 0 : 1 }}
    >
      <g transform="translate(10, 10)">
        <motion.ellipse
          cx="0"
          cy="0"
          rx="25"
          ry="4"
          fill="rgba(45, 212, 191, 0.3)"
          stroke="#2dd4bf"
          strokeWidth="1"
          animate={{ rotate: spinning ? 360 : 0 }}
          transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
        />
      </g>
      <g transform="translate(110, 10)">
        <motion.ellipse
          cx="0"
          cy="0"
          rx="25"
          ry="4"
          fill="rgba(45, 212, 191, 0.3)"
          stroke="#2dd4bf"
          strokeWidth="1"
          animate={{ rotate: spinning ? -360 : 0 }}
          transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
        />
      </g>

      <path d="M30 20 L90 20 L100 35 L80 45 L40 45 L20 35 Z" fill="url(#metal-grad)" stroke="#1e293b" strokeWidth="1" />
      <rect x="50" y="25" width="20" height="10" rx="2" fill="#0f172a" />
      <circle cx="55" cy="30" r="2" fill={spinning ? '#22c55e' : '#ef4444'} className="animate-pulse" />
      <circle cx="65" cy="30" r="2" fill="#2dd4bf" className="animate-pulse" style={{ animationDelay: '0.5s' }} />

      <path d="M40 45 L35 55" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
      <path d="M80 45 L85 55" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
    </motion.g>
  </svg>
);

export const DroneNavbar = ({ isLanded = false }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 768 : true));

  // keep track of viewport width so we can opt out behaviors on mobile
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', onResize);
    // set initial (in case SSR -> hydration)
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Only treat "scrolled" as true for desktop (so mobile won't trigger navbar move or rope)
  useMotionValueEvent(scrollY, 'change', (latest) => {
    // safe guard - treat as scrolled only when desktop width
    const scrolledNow = latest > 50 && (typeof window !== 'undefined' ? window.innerWidth >= 768 : true);
    setIsScrolled(scrolledNow);
  });

  const droneVariants = {
    hiddenLeft: { x: '-100vw', y: -100, opacity: 0 },
    hiddenRight: { x: '100vw', y: -100, opacity: 0 },
    dockedLeft: {
      x: 'calc(50vw - 320px)',
      y: 20,
      opacity: 1,
      rotate: 5,
      transition: { type: 'spring', stiffness: 60, damping: 15 },
    },
    dockedRight: {
      x: 'calc(50vw + 200px)',
      y: 20,
      opacity: 1,
      rotate: -5,
      transition: { type: 'spring', stiffness: 60, damping: 15 },
    },
    landedLeft: {
      x: 'calc(50vw - 300px)',
      y: 'calc(100vh - 150px)',
      rotate: 0,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
    landedRight: {
      x: 'calc(50vw + 180px)',
      y: 'calc(100vh - 150px)',
      rotate: 0,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  const handleAuthClick = () => !isLoggedIn && setIsAuthOpen(true);
  const handleLoginSuccess = () => setIsLoggedIn(true);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-electric-teal text-clinical-900 font-bold text-center py-1 text-xs uppercase tracking-wider overflow-hidden">
        Project by Raviteja for Mom's Pharmacy Assessment
      </div>

      {/* Navbar */}
      <motion.nav
        className="fixed top-8 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none"
        // only shift the navbar down on desktop when scrolled
        animate={{ y: isScrolled && isDesktop ? 70 : 0 }}
      >
        <div
          className={`relative pointer-events-auto transition-all duration-500 ease-out
          ${isScrolled
            ? 'w-[92%] max-w-2xl bg-clinical-900/90 backdrop-blur-md border border-electric-teal/30 shadow-[0_10px_40px_-10px_rgba(45,212,191,0.3)] rounded-2xl px-5 py-3.5'
            : 'w-full px-8 py-6 bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'bg-electric-teal' : 'bg-clinical-900'}`}
              >
                <span className="text-white">P</span>
              </div>
              <span className={`transition-colors ${isScrolled ? 'text-white' : 'text-clinical-900'}`}>PharmDelivery</span>
            </div>

            {/* Desktop Links — Now Responsive & Spacious */}
            <div className={`hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium ${isScrolled ? 'text-gray-300' : 'text-slate-600'}`}>
              <a href="#" className="hover:text-electric-teal transition-colors">Solutions</a>
              <a href="#" className="hover:text-electric-teal transition-colors">Coverage</a>
              <a href="#" className="hover:text-electric-teal transition-colors">Tracking</a>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Login Button */}
              <button
                onClick={handleAuthClick}
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all
                  ${isLoggedIn
                  ? 'bg-electric-green/20 text-electric-green border border-electric-green/30'
                  : (isScrolled
                      ? 'bg-electric-teal text-clinical-900 hover:bg-white'
                      : 'bg-clinical-900 text-white hover:bg-electric-teal'
                    )
                }`}
              >
                {isLoggedIn ? (
                  <>
                    <UserCheck size={14} />
                    <span>Logged In</span>
                  </>
                ) : (
                  'Client Login'
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button className="md:hidden text-electric-teal" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Compact Links for Tablet/Mobile When Scrolled */}
          {isScrolled && (
            <div className="flex justify-center gap-6 mt-3 text-xs font-medium text-gray-400 lg:hidden">
              <a href="#" className="hover:text-electric-teal">Solutions</a>
              <a href="#" className="hover:text-electric-teal">Coverage</a>
              <a href="#" className="hover:text-electric-teal">Tracking</a>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Drones — Your Original Masterpiece */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        <motion.div className="absolute top-0 left-0 origin-center" initial="hiddenLeft" animate={isLanded ? 'landedLeft' : (isScrolled ? 'dockedLeft' : 'hiddenLeft')} variants={droneVariants}>
          <div className="relative">
            {/* Rope/line is hidden on mobile (md breakpoint); only animate/show when desktop */}
            <motion.div
              animate={{
                height: isScrolled && !isLanded && isDesktop ? 40 : 0,
                opacity: isScrolled && !isLanded && isDesktop ? 1 : 0,
              }}
              className="hidden md:block absolute left-[85px] top-[55px] w-[2px] bg-gradient-to-b from-slate-400 to-electric-teal origin-top"
            />
            <DroneSVG spinning={!isLanded} side="left" />
          </div>
        </motion.div>

        <motion.div className="absolute top-0 left-0 origin-center" initial="hiddenRight" animate={isLanded ? 'landedRight' : (isScrolled ? 'dockedRight' : 'hiddenRight')} variants={droneVariants}>
          <div className="relative">
            {/* Rope/line is hidden on mobile (md breakpoint); only animate/show when desktop */}
            <motion.div
              animate={{
                height: isScrolled && !isLanded && isDesktop ? 40 : 0,
                opacity: isScrolled && !isLanded && isDesktop ? 1 : 0,
              }}
              className="hidden md:block absolute left-[35px] top-[55px] w-[2px] bg-gradient-to-b from-slate-400 to-electric-teal origin-top"
            />
            <DroneSVG spinning={!isLanded} side="right" />
          </div>
        </motion.div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLogin={handleLoginSuccess} />

      {/* Mobile Menu — Your Original Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-clinical-900/95 z-50 flex flex-col items-center justify-center gap-8 text-white md:hidden"
          >
            <button className="absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <a href="#" className="text-2xl font-light hover:text-electric-teal" onClick={() => setMobileMenuOpen(false)}>
              Solutions
            </a>
            <a href="#" className="text-2xl font-light hover:text-electric-teal" onClick={() => setMobileMenuOpen(false)}>
              Coverage Map
            </a>
            <a href="#" className="text-2xl font-light hover:text-electric-teal" onClick={() => setMobileMenuOpen(false)}>
              Tracking
            </a>
            <button
              className="text-2xl font-bold text-electric-teal flex items-center gap-2"
              onClick={() => {
                setMobileMenuOpen(false);
                handleAuthClick();
              }}
            >
              {isLoggedIn ? 'Access Dashboard' : 'Client Login'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
