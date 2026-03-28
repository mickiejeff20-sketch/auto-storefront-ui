import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
        <p className="text-blue-100 text-lg mb-8">
          Get the latest automation tips, product releases, and exclusive offers delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6 py-4 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            Subscribe <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-blue-200 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;