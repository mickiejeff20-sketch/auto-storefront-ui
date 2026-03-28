import React from 'react';
import { Cpu, Mail, Globe, Share2, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white">AUTOMATA</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Automating the world through intelligent hardware and seamless software integration. Building the tools for a more efficient tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Info className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Smart Home Hubs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Industrial Arms</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">IoT Sensors</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Process Software</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Status</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Automata Solutions Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Mail className="w-4 h-4" /> support@automata.io
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;