import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Thermometer, Lock, Shield } from 'lucide-react';

export const SafetyXRay = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Opacity of the outer shell decreases as we scroll
  const shellOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.1]);
  const contentScale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);
  const blurAmount = useTransform(scrollYProgress, [0.2, 0.5], ["0px", "4px"]);

  return (
    <section ref={containerRef} className="min-h-[150vh] relative bg-clinical-100 flex items-center justify-center overflow-hidden">
      
      <div className="fixed-content sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-clinical-900 mb-4">Safety X-Ray Protocol</h2>
          <p className="text-gray-500">Tamper-proof smart containers with real-time biometric locks.</p>
        </div>

        <div className="relative w-full max-w-2xl aspect-[4/3]">
          
          {/* Inner Contents (Medicine) - Revealed */}
          <motion.div 
            style={{ scale: contentScale }}
            className="absolute inset-0 bg-clinical-900 rounded-2xl flex items-center justify-center border-2 border-electric-teal/50 shadow-[0_0_50px_rgba(45,212,191,0.2)] overflow-hidden"
          >
             {/* Grid Background */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]"></div>
             
             {/* Vials */}
             <div className="flex gap-8 relative z-10">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-16 h-32 bg-gradient-to-b from-transparent to-electric-teal/20 border border-electric-teal/40 rounded-full flex items-end justify-center pb-2 relative overflow-hidden group">
                   <div className="absolute inset-x-0 bottom-0 h-2/3 bg-electric-teal/30 group-hover:bg-electric-teal/50 transition-colors"></div>
                   <span className="text-[10px] font-mono text-electric-teal">VIAL-0{i}</span>
                 </div>
               ))}
             </div>

             {/* Sensor UI Overlay */}
             <div className="absolute top-4 right-4 bg-black/40 backdrop-blur p-2 rounded border border-electric-teal/30 font-mono text-xs text-electric-teal">
                <div className="flex items-center gap-2 mb-1">
                  <Thermometer size={14} />
                  <span>3.2°C</span>
                </div>
                <div className="flex items-center gap-2">
                   <Lock size={14} />
                   <span>LOCKED</span>
                </div>
             </div>
          </motion.div>

          {/* Outer Shell (The Box) - Fades Out */}
          <motion.div 
            style={{ 
              opacity: shellOpacity,
              backdropFilter: `blur(${blurAmount})`
            }}
            className="absolute inset-0 bg-white rounded-2xl border border-gray-200 shadow-2xl flex items-center justify-center z-20"
          >
            <div className="text-center p-8">
               <Shield className="w-24 h-24 text-gray-200 mx-auto mb-4" />
               <div className="text-3xl font-bold text-gray-300 tracking-widest uppercase">PharmBox</div>
               <div className="text-sm text-gray-400 mt-2 font-mono">SECURE TRANSPORT UNIT</div>
               <div className="mt-8 text-xs text-electric-teal font-mono animate-pulse">SCROLL TO INSPECT</div>
            </div>
            
            {/* Corner Markers */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-300"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-300"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-300"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-300"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};