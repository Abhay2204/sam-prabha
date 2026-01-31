import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FlaskConical, ScrollText, Award, Target, Microscope, Phone, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Logo Image + Contact & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Logo */}
              <div className="max-w-md mx-auto lg:mx-0">
                <img 
                  src="/public/images/Samprabha.jpg.jpeg" 
                  alt="Samprabha Scientific Services" 
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-scientific-emerald/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-scientific-emerald" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">WhatsApp</div>
                    <a href="https://wa.me/916359982599" className="text-sm font-semibold text-gray-800 hover:text-scientific-emerald transition-colors">
                      +91 6359982599
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-scientific-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-scientific-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Location</div>
                    <div className="text-sm font-semibold text-gray-800">Gandhinagar</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Heading, Stats & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Heading */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-scientific-gold/10 rounded-full mb-4">
                  <div className="w-1.5 h-1.5 bg-scientific-gold rounded-full" />
                  <span className="text-xs font-medium text-scientific-gold uppercase tracking-wide">Excellence in Research</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-scientific-textDark mb-4 leading-tight">
                  Elevate Your<br />
                  <span className="text-scientific-gold">Research</span> to Excellence
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Expert scientific support services for PhD scholars, researchers, and pharmaceutical professionals. From thesis writing to patent filing.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-scientific-gold mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-scientific-emerald mb-1">10+</div>
                  <div className="text-sm text-gray-600">Services</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-scientific-gold mb-1">98%</div>
                  <div className="text-sm text-gray-600">Success</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <NavLink 
                  to="/services" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-scientific-gold text-white rounded-lg font-medium hover:bg-scientific-goldDim transition-colors shadow-sm"
                >
                  View Services
                  <ArrowRight size={18} />
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-scientific-emerald hover:text-scientific-emerald transition-colors"
                >
                  Get Consultation
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-scientific-emerald/10 rounded-full mb-4">
              <span className="text-xs font-semibold text-scientific-emerald uppercase tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-scientific-textDark mb-4">
              Redefining Research <span className="text-scientific-gold">Standards</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Based in Gandhinagar, we provide comprehensive technical and strategic guidance to students, PhD scholars, and researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Quality", desc: "High-end technical analysis and reporting", color: "gold" },
              { icon: Target, title: "Precision", desc: "Accurate data and methodology", color: "emerald" },
              { icon: Microscope, title: "Expertise", desc: "Seasoned research professionals", color: "gold" },
              { icon: FlaskConical, title: "Innovation", desc: "Cutting-edge methodologies", color: "emerald" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-scientific-${item.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className={`w-7 h-7 text-scientific-${item.color}`} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Expert PhD mentorship",
              "Strict confidentiality",
              "Tailored strategies",
              "Timely delivery"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-scientific-offWhite rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-scientific-emerald shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-scientific-offWhite">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-scientific-textDark mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for every stage of your research journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-scientific-emerald hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-scientific-emerald/10 rounded-lg">
                    <FlaskConical className="w-5 h-5 text-scientific-emerald" />
                  </div>
                  <span className="text-xs font-medium text-scientific-gold bg-scientific-gold/10 px-2 py-1 rounded">
                    {service.timeline}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-scientific-textDark">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                <NavLink 
                  to="/services" 
                  className="inline-flex items-center text-sm font-medium text-scientific-emerald hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </NavLink>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <NavLink 
              to="/services" 
              className="inline-block px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-scientific-emerald hover:text-scientific-emerald transition-colors"
            >
              View All Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-center mb-16">How We Work</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block" />
            
            {[
              { title: "Consultation", desc: "We analyze your specific research needs." },
              { title: "Strategy", desc: "Developing a tailored roadmap for your project." },
              { title: "Execution", desc: "Rigorous research, writing, and analysis." },
              { title: "Quality Review", desc: "Final checks ensuring academic excellence." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                className={`flex flex-col md:flex-row items-center justify-between mb-12 md:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="w-full md:w-5/12 text-center md:text-left p-6">
                   <h3 className={`font-serif text-2xl font-bold text-scientific-emerald mb-2 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>{step.title}</h3>
                   <p className={`text-gray-500 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>{step.desc}</p>
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-scientific-gold border-4 border-white shadow-md shrink-0 flex items-center justify-center my-4 md:my-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-full md:w-5/12 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-scientific-textDark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <ScrollText className="w-12 h-12 text-scientific-gold mx-auto mb-8" />
            <h2 className="font-serif text-3xl text-white mb-4">Voices from the Community</h2>
            <p className="text-gray-400 text-sm">Trusted by researchers across India</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6"
                animate={{
                  x: [0, -1920]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear"
                  }
                }}
              >
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                  <div 
                    key={`${t.id}-${idx}`} 
                    className="flex-shrink-0 w-80 bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <p className="text-gray-300 italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                    <div>
                      <h4 className="font-serif text-scientific-gold font-bold">{t.author}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-scientific-textDark to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-scientific-textDark to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-scientific-emerald text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Elevate Your Research?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Join hundreds of scholars who have transformed their academic journey with Samprabha.
          </p>
          <NavLink 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-scientific-emerald font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </div>
  );
};
