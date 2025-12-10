import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Activity, Zap } from 'lucide-react';

export const Hero = () => {
  const ref = useRef(null);
  
  // Mouse interaction state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col md:flex-row items-center overflow-hidden bg-gradient-to-b from-clinical-50 to-clinical-200"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 z-10 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-teal/10 text-electric-teal border border-electric-teal/20 text-xs font-mono uppercase tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-electric-green animate-pulse"></span>
          System Operational
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-clinical-900 leading-[1.1]"
        >
          Precision Delivery. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-blue-600">
            Vital Speed.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-500 max-w-md"
        >
          Autonomous drone logistics for urgent pharmaceutical needs. From the lab to your doorstep in under 10 minutes.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <button className="group relative px-8 py-4 bg-clinical-900 text-white rounded-lg overflow-hidden flex items-center gap-3 font-medium transition-transform hover:scale-105 active:scale-95">
             <div className="absolute inset-0 bg-electric-teal/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             <span className="relative">Check Delivery Coverage</span>
             <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-4 px-6 text-sm text-gray-500 font-mono">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-electric-teal" />
              <span>&lt; 30m ETA</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-electric-teal" />
              <span>Temp Control</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Visual - 3D Parallax */}
      <div className="w-full md:w-1/2 h-[500px] md:h-full flex items-center justify-center relative perspective-1000">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-full max-w-lg aspect-square"
        >
          {/* Abstract Drone Representation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-teal/10 to-transparent rounded-full blur-3xl transform translate-z-[-50px]"></div>
          <video 
              muted 
              autoPlay 
              loop 
              className="w-full h-full object-contain drop-shadow-2xl relative z-10 rounded-5xl"
              style={{
                  transform: "translateZ(20px)"
              }}
          >
              {/* This line was updated: added the trailing slash for JSX compatibility */}
              <source src="/HeroVideo.mp4" type="video/mp4" />

              {/* Fallback text */}
              Your browser does not support the video tag.
          </video>


          
          {/* Floating UI Elements */}
          <motion.div 
            className="absolute -top-10 -right-10 bg-white/80 backdrop-blur p-4 rounded-lg shadow-lg border border-gray-100 font-mono text-xs z-20"
            style={{ transform: "translateZ(50px)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-gray-400 mb-1 z-1000">BATTERY</div>
            <div className="text-2xl font-bold text-clinical-900">98%</div>
            <div className="h-1 w-full bg-gray-200 mt-2 rounded-full overflow-hidden">
              <div className="h-full w-[98%] bg-electric-green"></div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute -bottom-5 -left-5 bg-clinical-900 text-white p-4 rounded-lg shadow-xl border border-gray-800 font-mono text-xs z-20"
            style={{ transform: "translateZ(40px)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
             <div className="flex items-center gap-2 mb-2">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
               <span className="text-gray-400">PAYLOAD SECURE</span>
             </div>
             <div>ID: PD-X992</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};