import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Cpu, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart }) => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent hidden sm:block">
              AUTOMATA
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Products</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Solutions</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Developers</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Enterprise</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors md:block hidden">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-slate-400 hover:text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-slate-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-slate-300">Products</a>
              <a href="#" className="block text-slate-300">Solutions</a>
              <a href="#" className="block text-slate-300">Developers</a>
              <a href="#" className="block text-slate-300">Enterprise</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;