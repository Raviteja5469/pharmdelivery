import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API network request
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-clinical-900/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Form Section */}
                <div className="p-8 w-full">
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-900">
                      {isLoginView ? 'Welcome Back' : 'Join the Network'}
                    </h2>
                    <p className="text-slate-500 text-sm mt-2">
                      {isLoginView 
                        ? 'Access your delivery dashboard.' 
                        : 'Register for autonomous logistics.'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLoginView && (
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            required 
                            placeholder="Dr. Sarah Connor"
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-teal/50 transition-all"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email ID</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="email" 
                          required 
                          placeholder="name@hospital.com"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-teal/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="password" 
                          required 
                          placeholder="••••••••"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-teal/50 transition-all"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full bg-clinical-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6"
                    >
                      {isLoading ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <>
                          {isLoginView ? 'Login to Dashboard' : 'Create Account'}
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => setIsLoginView(!isLoginView)}
                      className="text-sm text-slate-500 hover:text-electric-teal font-medium transition-colors"
                    >
                      {isLoginView 
                        ? "Don't have an account? Sign Up" 
                        : "Already have an account? Login"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Top Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-electric-teal via-blue-500 to-electric-teal"></div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};