import { motion } from 'motion/react';
import { Target, Users, Award, ShieldCheck, Globe, Zap, History, Milestone } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-950 text-white p-12 rounded-[2.5rem] hidden lg:block shadow-2xl">
              <div className="text-5xl font-display font-black text-gold-500 mb-2">10+</div>
              <p className="text-brand-300 font-medium">Years of Driving <br /> Digital Excellence</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-50 text-brand-900 text-sm font-bold tracking-widest uppercase mb-4">
              Our Agency
            </div>
            <h1 className="heading-xl">Pioneering the Future of <span className="text-gold-600">Digital Growth</span></h1>
            <p className="text-xl text-brand-600 leading-relaxed">
              Founded on the principles of innovation and data-driven results, Groviads has evolved into a premier digital services agency helping global brands navigate the complexities of the digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-900 text-white rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-brand-600">To provide high-impact, premium digital services that transform businesses and deliver measurable ROI.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-900 text-white rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-brand-600">To be the world's most trusted partner for businesses seeking sustainable digital growth and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="heading-lg text-white mb-6">The Values That Define Us</h2>
            <p className="text-brand-400 text-lg">Our culture is built on a foundation of excellence, transparency, and a relentless commitment to our clients' success.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Uncompromising Quality', desc: 'We never settle for "good enough." Every project is a masterpiece of precision.' },
              { icon: Zap, title: 'Continuous Innovation', desc: 'We stay ahead of digital trends to provide our clients with a competitive edge.' },
              { icon: Users, title: 'Collaborative Spirit', desc: 'We work as an extension of your team, aligned with your specific business goals.' },
              { icon: Award, title: 'Results-Driven', desc: 'Success is measured by impact. We focus on metrics that matter to your bottom line.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                <div className="text-gold-500 mb-6">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-brand-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History/Timeline */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="heading-lg mb-6">Our Journey</h2>
          </div>

          <div className="space-y-20 relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-brand-100 hidden lg:block" />
            {[
              { year: '2015', title: 'The Inception', desc: 'Groviads was founded with a small team of 3 digital enthusiasts in a home office.', icon: History },
              { year: '2018', title: 'Global Expansion', desc: 'Opened our first international office and reached 50+ enterprise clients.', icon: Globe },
              { year: '2021', title: 'Digital Excellence Award', desc: 'Recognized as the leading agency for E-commerce growth strategies.', icon: Award },
              { year: '2024', title: 'The Next Chapter', desc: 'Focusing on AI-driven marketing automation and predictive data analysis.', icon: Milestone }
            ].map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 lg:text-right px-4">
                  <div className={`space-y-4 ${idx % 2 !== 0 ? 'lg:text-left' : ''}`}>
                    <div className="text-4xl font-display font-black text-brand-900/10">{milestone.year}</div>
                    <h3 className="text-2xl font-bold">{milestone.title}</h3>
                    <p className="text-brand-600 max-w-md ml-auto mr-auto lg:mr-0">{milestone.desc}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand-900 border-4 border-white shadow-xl rounded-full flex items-center justify-center text-white">
                    <milestone.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
