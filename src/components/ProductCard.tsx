import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-slate-900/80 backdrop-blur-md text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <span className="text-blue-400 font-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.slice(0, 3).map((feat, i) => (
            <span key={i} className="text-[10px] text-slate-500 bg-slate-800 px-2 py-1 rounded">
              {feat}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <button 
            onClick={() => addToCart(product)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add to Cart
          </button>
          <button className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg transition-colors">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;