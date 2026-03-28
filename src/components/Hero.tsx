import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9686ca87-237e-4cd3-8c8c-107118bfc904/hero-bg-414a8df5-1774676579054.webp" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              Next Generation Automation
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Automate Your World with <br />
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Intelligence & Precision
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10">
              Pioneering hardware and software solutions designed to streamline your life and industrial processes. From smart home hubs to industrial robotics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                Explore Products <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all">
                View Documentation
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Real-time processing with sub-millisecond latency." },
              { icon: Shield, title: "Secure by Design", desc: "Military-grade encryption for all your automation data." },
              { icon: Globe, title: "Global Reach", desc: "Scale your automation from one room to global factories." }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;