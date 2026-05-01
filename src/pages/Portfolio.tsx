import { motion } from 'motion/react';
import { PORTFOLIO } from '../constants';
import { ExternalLink, Plus } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Digital Marketing', 'Project Management', 'Branding'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="heading-xl mb-6">Our Work Speaks for Itself</h1>
          <p className="text-xl text-brand-600">
            Explore our curated selection of projects where technical excellence meets creative strategy. We build digital experiences that matter.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                filter === cat 
                ? 'bg-brand-950 text-white shadow-lg' 
                : 'bg-brand-50 text-brand-600 hover:bg-brand-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-brand-900 aspect-[16/10]"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-4 py-1 rounded-full bg-gold-500 text-brand-950 text-xs font-bold uppercase tracking-widest">
                    {item.category}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">{item.title}</h3>
                  <p className="text-brand-300 max-w-md">
                    Delivering high-performance solutions through detailed analysis and innovative engineering protocols.
                  </p>
                  <div className="pt-4 flex gap-4">
                    <button className="w-12 h-12 bg-white text-brand-950 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Recognition */}
        <div className="mt-32 pt-20 border-t border-brand-100">
          <p className="text-center text-brand-400 font-medium uppercase tracking-[0.3em] mb-12 text-sm">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale">
            {/* Using text logos for brands if icons aren't specific */}
            <span className="text-2xl font-black italic">TECHFLOW</span>
            <span className="text-2xl font-black italic">GLOBALBANK</span>
            <span className="text-2xl font-black italic">NEXUS MEDIA</span>
            <span className="text-2xl font-black italic">RETAILHUBS</span>
            <span className="text-2xl font-black italic">ZENITH CORP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
