import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Layout, ListChecks, Megaphone, Palette, Search, Share2, TrendingUp, Briefcase, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: any = {
  Layout, ListChecks, Megaphone, Palette, Search, Share2, TrendingUp, Briefcase
};

const Services = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            Expert Digital Consulting - Always Free
          </div>
          <h1 className="heading-xl mb-8">Solutions Built for the <span className="text-gold-600">Enterprise</span> Scale</h1>
          <p className="text-xl text-brand-600">
            From initial strategy to final execution, our suite of digital services is designed to provide a comprehensive growth ecosystem for your business. Book your <b>free consultation</b> today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`flex flex-col lg:flex-row gap-12 items-center p-8 lg:p-12 rounded-[3rem] ${idx % 2 === 0 ? 'bg-brand-50' : 'bg-white border border-brand-100'}`}
              >
                <div className={`w-full lg:w-1/2 overflow-hidden rounded-[2rem] shadow-2xl ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="w-16 h-16 bg-brand-900 text-white rounded-2xl flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-8 h-8" />}
                  </div>
                  <h2 className="heading-lg">{service.title}</h2>
                  <p className="text-lg text-brand-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4 pt-4">
                    <li className="flex items-center gap-2 text-brand-800 font-medium">
                      <Check className="w-5 h-5 text-gold-600" /> Custom Strategy
                    </li>
                    <li className="flex items-center gap-2 text-brand-800 font-medium">
                      <Check className="w-5 h-5 text-gold-600" /> Dedicated Team
                    </li>
                    <li className="flex items-center gap-2 text-brand-800 font-medium">
                      <Check className="w-5 h-5 text-gold-600" /> Monthly Reports
                    </li>
                    <li className="flex items-center gap-2 text-brand-800 font-medium">
                      <Check className="w-5 h-5 text-gold-600" /> 24/7 Support
                    </li>
                  </ul>
                  <div className="pt-6">
                    <Link to="/contact" className="btn-primary inline-flex">
                      Get a Free Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
