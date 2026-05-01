import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS } from '../constants';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="w-20 h-20 bg-brand-50 rounded-3xl flex items-center justify-center text-brand-900 mx-auto mb-8">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="heading-xl mb-6">Frequently Asked <span className="text-gold-600">Questions</span></h1>
          <p className="text-xl text-brand-600">
            Everything you need to know about our services and process. Can't find the answer? Feel free to reach out.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-brand-100 rounded-3xl overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'bg-brand-50 shadow-lg' : 'bg-white hover:bg-brand-50/50'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className="text-xl font-bold text-brand-950">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === idx ? 'bg-brand-900 text-white rotate-180' : 'bg-brand-100 text-brand-900'}`}>
                  {activeIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-lg text-brand-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-20 p-12 bg-brand-950 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold mb-6">Still have questions?</h2>
            <p className="text-brand-300 mb-10 max-w-lg mx-auto text-lg">We’re here to help you navigate your digital journey. Send us a message and our team will get back to you shortly.</p>
            <Link to="/contact" className="btn-primary mx-auto bg-white text-brand-950 hover:bg-gold-500 font-bold px-10">
              Contact Our Support
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 -ml-32 -mt-32 rounded-full" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mb-32 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
