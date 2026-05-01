import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Groviads Logo" className="h-10 w-auto brightness-0 invert" />
          </Link>
          <p className="text-brand-400 leading-relaxed max-w-xs">
            Empowering businesses with premium digital solutions. From web development to strategic growth, we drive excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-950 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-950 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-950 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-6">Explore</h4>
          <ul className="space-y-4 text-brand-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-brand-400">
            <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Project Management</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Branding</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Business Growth</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-white font-bold">
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-gold-500 shrink-0" />
              <span className="hover:text-gold-500 transition-colors cursor-pointer">contact@groviads.com</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-gold-500 shrink-0" />
              <span className="hover:text-gold-500 transition-colors cursor-pointer">+91 9355114120</span>
            </li>
            <li className="flex gap-3">
              <MessageSquare className="w-5 h-5 text-gold-500 shrink-0" />
              <span className="hover:text-gold-500 transition-colors cursor-pointer">+91 9289917204</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
              <span className="hover:text-gold-500 transition-colors cursor-pointer">New Delhi, Delhi, India</span>
            </li>
          </ul>
          <div className="mt-8">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Newsletter" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm focus:outline-none focus:border-white/20"
              />
              <button className="absolute right-2 top-1.5 w-8 h-8 bg-white text-brand-950 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-500 text-sm">
        <p>© {currentYear} Groviads Digital Services. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
