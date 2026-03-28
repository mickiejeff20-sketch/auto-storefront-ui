import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    toast.info("Checkout is currently in test mode.");
    clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-slate-900 z-[70] shadow-2xl border-l border-white/10"
          >
            <div className="flex flex-col h-full">
              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="text-blue-400" />
                  <h2 className="text-xl font-bold text-white">Your Cart</h2>
                </div>
                <button onClick={onClose} className="p-2 text-slate-400 hover:text-white transition-colors">
                  <X />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <ShoppingBag className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                    <p className="text-slate-400">Your cart is empty.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-white font-medium">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-slate-500 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-blue-400 text-sm mb-3">${item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-white font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 bg-slate-950 border-t border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="text-2xl font-bold text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 disabled:text-slate-500 text-white py-4 rounded-xl font-bold transition-all"
                >
                  Checkout Now
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  Secure checkout powered by Automata Pay
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;