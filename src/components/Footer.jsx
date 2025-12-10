import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Twitter, Instagram, Linkedin, ArrowRight, Phone, MapPin, Globe } from 'lucide-react';

export const Footer = ({ onInViewChange }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 }); // Trigger slightly earlier

  useEffect(() => {
    onInViewChange(isInView);
  }, [isInView, onInViewChange]);

  return (
    <footer 
      ref={ref}
      className="bg-clinical-900 text-slate-300 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-electric-teal to-transparent opacity-50"></div>
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric-teal/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-bold text-2xl text-white">
              <div className="w-8 h-8 bg-electric-teal rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                <span className="text-white">P</span>
              </div>
              <span className="tracking-tight">PharmDelivery</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Pioneering autonomous medical logistics. We bridge the gap between critical care and rapid delivery infrastructure.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-electric-teal hover:border-electric-teal hover:text-white transition-all duration-300"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-electric-teal hover:border-electric-teal hover:text-white transition-all duration-300"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-electric-teal hover:border-electric-teal hover:text-white transition-all duration-300"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Platform</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-electric-teal transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-electric-teal rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Coverage Map</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-electric-teal rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Live Tracking</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-electric-teal rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Safety Protocols</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-electric-teal rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Partner API</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hub Locations</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-electric-teal shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.5)] transition-all" />
                <span>
                  <strong className="text-white block mb-1">Hyderabad HQ</strong>
                  Hi-Tech City, Phase 2,<br/>Telangana 500081
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <Globe className="w-5 h-5 text-electric-teal shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.5)] transition-all" />
                <span>
                  <strong className="text-white block mb-1">Bengaluru Node</strong>
                  Electronic City, Tech Park,<br/>Karnataka 560100
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Flight Updates</h3>
            <p className="text-xs text-slate-500 mb-4">Real-time alerts on network status and new coverage zones.</p>
            <div className="flex gap-2 relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm w-full focus:ring-1 focus:ring-electric-teal focus:border-electric-teal outline-none transition-all placeholder:text-slate-600"
              />
              <button className="absolute right-1 top-1 bottom-1 aspect-square bg-electric-teal text-clinical-900 rounded-md flex items-center justify-center hover:bg-electric-green transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <Phone className="w-3 h-3" />
              <span>Support: +91 40 1234 5678</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <p>© 2024 PharmDelivery Systems Inc. • All systems normal</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};