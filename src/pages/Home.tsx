import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, Zap, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, PORTFOLIO, FAQS } from '../constants';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero background" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              Empowering Digital Growth
            </div>
            <h1 className="heading-xl !text-[#e3e1e1]">
              Elevate Your Business With Premium Digital Solutions
            </h1>
            <p className="text-xl text-brand-200 max-w-xl">
              Groviads specializes in bespoke website development, data-driven marketing, and strategic growth solutions tailored for high-impact results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="btn-primary py-4 px-8 text-lg">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="flex items-center gap-3 text-white font-medium group py-4 px-8 border border-white/20 rounded-full hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-950 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                See Our Results
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-brand-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">250+</div>
                <div className="text-brand-400 text-sm">Success Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-brand-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="heading-lg mb-6">Why Modern Businesses Choose Groviads</h2>
            <p className="text-brand-600 text-lg">
              We combine creative excellence with technical precision to deliver solutions that don't just look good but perform exceptionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Strategic Planning', desc: 'Every project starts with a detailed roadmap aligned with your business goals.' },
              { icon: TrendingUp, title: 'Growth Focused', desc: 'Our solutions are engineered to scale your revenue and market presence.' },
              { icon: Users, title: 'Expert Team', desc: 'Access a dedicated team of specialists across design, dev, and marketing.' },
              { icon: Zap, title: 'Rapid Execution', desc: 'We deliver high-quality work efficiently without compromising on detail.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="premium-card"
              >
                <div className="w-14 h-14 bg-brand-900 text-white rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-brand-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="heading-lg mb-6">Our Core Services</h2>
              <p className="text-brand-600 text-lg">
                Comprehensive digital solutions designed to take your brand from inception to market leadership.
              </p>
            </div>
            <Link to="/services" className="btn-outline">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-brand-900"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-brand-200 mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {service.description}
                  </p>
                  <Link to={`/services#${service.id}`} className="inline-flex items-center gap-2 text-gold-500 font-medium group/btn">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="section-padding bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-white mb-8">Crafting Digital Excellence Through Experience</h2>
              <p className="text-brand-400 text-lg mb-12">
                We've partnered with forward-thinking brands to build products that define their categories. Our portfolio showcases the breadth of our expertise and depth of our creativity.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  'Enterprise-grade web applications',
                  'High-converting marketing campaigns',
                  'Award-winning interface designs',
                  'Scalable business growth strategies'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-brand-300">
                    <CheckCircle2 className="w-6 h-6 text-gold-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/portfolio" className="btn-primary py-4 px-10">
                Explore Full Portfolio
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {PORTFOLIO.map((item, idx) => (
                <div key={item.id} className={`rounded-xl overflow-hidden ${idx === 1 || idx === 2 ? 'mt-8' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="heading-lg mb-6">Our Success Process</h2>
            <p className="text-brand-600 text-lg">
              A meticulously refined methodology that ensures consistency, quality, and results for every client engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-brand-900/10 -z-10" />
            {[
              { step: '01', title: 'Consultation', desc: 'In-depth analysis of your needs, goals, and market challenges.' },
              { step: '02', title: 'Strategy', desc: 'Crafting a bespoke digital roadmap for maximum impact.' },
              { step: '03', title: 'Execution', desc: 'Precision building by our team of specialists and creatives.' },
              { step: '04', title: 'Growth', desc: 'Ongoing optimization and scaling based on real-world data.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-brand-100 relative group">
                <span className="text-6xl font-display font-black text-brand-900/5 absolute -top-4 -right-2 group-hover:text-gold-500/10 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-brand-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-950 opacity-50 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-white mb-6">What Our Partners Say</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-950/50 backdrop-blur-xl border border-white/10 p-10 rounded-3xl"
              >
                <div className="flex gap-1 mb-6 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-brand-200 text-lg italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-brand-400 text-sm">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-brand-950 rounded-[3rem] p-12 lg:p-20 overflow-hidden relative flex flex-col items-center text-center">
            <div className="absolute inset-0 z-0">
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
                alt="Workspace" 
                className="w-full h-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8"> Ready to Scale Your Digital Impact?</h2>
              <p className="text-xl text-brand-300 mb-12">
                Join 250+ businesses that have accelerated their growth with Groviads. Our initial strategic consultations are <b>completely free</b>.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="btn-primary py-5 px-12 text-lg !bg-white !text-brand-950 hover:!bg-gold-500 transition-all font-bold">
                  Book Your Free Consultation
                </Link>
                <a href="https://wa.me/919289917204" className="btn-outline border-white/20 text-white hover:bg-white/10 py-5 px-10 text-lg">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
