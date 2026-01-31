import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { NavLink } from 'react-router-dom';
import { Check, Clock, Users, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="font-serif text-5xl md:text-6xl font-bold text-scientific-textDark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.h1>
          <p className="max-w-3xl mx-auto text-scientific-textGray text-lg leading-relaxed">
            Comprehensive scientific support services designed to accelerate your research journey. From concept to publication, we provide expert guidance at every stage.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 hover:shadow-md hover:border-scientific-emerald/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Main Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl font-serif text-scientific-gold font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-scientific-textDark mb-2">
                        {service.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-scientific-emerald" />
                          <span>{service.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-scientific-gold" />
                          <span>{service.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>

                  <NavLink 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-scientific-emerald text-white rounded-lg font-medium hover:bg-scientific-emeraldDark transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>

                {/* Right: Deliverables */}
                <div className="lg:w-80 bg-scientific-offWhite rounded-lg p-6 border border-gray-100">
                  <h3 className="font-serif text-lg font-bold mb-4 text-scientific-textDark">
                    What You'll Receive
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-scientific-emerald shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center bg-scientific-textDark rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-serif text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every research project is unique. Let's discuss how we can tailor our services to meet your specific requirements.
          </p>
          <NavLink 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-scientific-gold text-white rounded-lg font-medium hover:bg-scientific-goldDim transition-colors shadow-lg"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};
