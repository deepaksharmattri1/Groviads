import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    location: '',
    phone: '',
    requirements: ''
  });

  const locations = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'India', 'United Arab Emirates', 'Saudi Arabia', 'Singapore', 'Other'
  ];

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 relative">
      {/* Thank You Popup */}
      <AnimatePresence>
        {submitted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-950/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[3rem] p-12 max-w-lg w-full text-center shadow-2xl relative overflow-hidden"
            >
              <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center text-white mx-auto mb-8">
                <Send className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-display font-bold text-brand-950 mb-4">Thank You!</h2>
              <p className="text-xl text-brand-600 mb-8 font-medium">Your request has been received successfully.</p>
              <p className="text-brand-500 mb-10 leading-relaxed">
                Our strategic advisory team is reviewing your requirements. We typically respond within 12-24 business hours to schedule your <b>free consultation</b>.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="btn-primary w-full justify-center py-4 rounded-2xl"
              >
                Back to Website
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                Free 30-Minute Consultation
              </div>
              <h1 className="heading-xl mb-6">Let's Discuss Your Growth Strategy</h1>
              <p className="text-xl text-brand-600 leading-relaxed max-w-lg">
                Have a project in mind? We'd love to hear from you. Our consultants are ready to help you navigate your digital transformation—<b>at no cost for the initial session.</b>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Us */}
              <div className="flex gap-6 items-start p-8 bg-brand-50 rounded-3xl">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-900 shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-brand-600">contact@groviads.com</p>
                  <p className="text-brand-600">office@groviads.com</p>
                </div>
              </div>

              {/* WhatsApp Us */}
              <div className="flex gap-6 items-start p-8 bg-brand-50 rounded-3xl">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-900 shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp Us</h3>
                  <p className="text-brand-600 font-bold">+91 9289917204</p>
                  <p className="text-brand-600 text-sm">Instant Support</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-6 items-start p-8 bg-brand-50 rounded-3xl">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-900 shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-brand-600 font-bold">+91 9355114120</p>
                  <p className="text-brand-600 text-sm">Mon - Sat, 10am - 8pm IST</p>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex gap-6 items-start p-8 bg-brand-50 rounded-3xl">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-900 shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-brand-600 font-bold">New Delhi, Delhi, India</p>
                  <p className="text-brand-600 text-sm">Corporate HQ</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-950 p-8 rounded-3xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Urgent Requirement?</h4>
                <p className="text-brand-300 mb-6">Talk to our experts directly on WhatsApp for immediate consultation.</p>
                <a href="https://wa.me/919289917204" className="inline-flex items-center gap-2 bg-white text-brand-950 py-3 px-6 rounded-full font-bold hover:bg-gold-500 transition-colors group-hover:scale-105 transform">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp Consultation
                </a>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full" />
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-brand-100 shadow-2xl shadow-brand-900/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-900" htmlFor="name">Your Name*</label>
                  <input 
                    required
                    id="name"
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-brand-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-900 transition-all outline-none"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-900" htmlFor="email">Email*</label>
                  <input 
                    required
                    id="email"
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-brand-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-900 transition-all outline-none"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-900" htmlFor="location">Where are you from?*</label>
                  <div className="relative">
                    <select 
                      required
                      id="location"
                      className="w-full bg-brand-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-900 transition-all outline-none appearance-none"
                      value={formState.location}
                      onChange={e => setFormState({...formState, location: e.target.value})}
                    >
                      <option value="">Select location</option>
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-900" htmlFor="phone">Phone Number</label>
                  <input 
                    id="phone"
                    type="tel" 
                    placeholder="Enter your WhatsApp number" 
                    className="w-full bg-brand-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-900 transition-all outline-none"
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-900" htmlFor="requirements">What challenges or goals can we help you with?*</label>
                <textarea 
                  required
                  id="requirements"
                  placeholder="Describe your requirements" 
                  rows={5}
                  className="w-full bg-brand-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-900 transition-all outline-none resize-none"
                  value={formState.requirements}
                  onChange={e => setFormState({...formState, requirements: e.target.value})}
                />
              </div>

              <button type="submit" className="w-full btn-primary py-5 justify-center text-lg shadow-xl shadow-brand-900/20">
                Submit Consultation Request
                <Send className="w-5 h-5" />
              </button>

              <p className="text-center text-xs text-brand-400 mt-4 leading-relaxed">
                By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>. We usually respond within 24 business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
