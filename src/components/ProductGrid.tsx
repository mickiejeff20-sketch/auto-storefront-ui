import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Smart Home', 'Industrial', 'Software', 'Components'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-slate-950" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Solutions</h2>
            <p className="text-slate-400">Precision engineered for the automated future.</p>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;