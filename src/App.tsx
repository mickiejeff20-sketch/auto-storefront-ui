import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
        <Toaster position="bottom-right" theme="dark" richColors />
        
        <Navbar onOpenCart={() => setIsCartOpen(true)} />
        
        <main>
          <Hero />
          <ProductGrid />
          <Newsletter />
        </main>

        <Footer />
        
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />
      </div>
    </CartProvider>
  );
}

export default App;