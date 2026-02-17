import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, MapPin, Award, Users, TrendingUp, Shield, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="w-full pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/images/samprabhacompress.jpeg" 
              alt="Samprabha Logo" 
              className="w-48 h-48 object-contain"
            />
          </div>
          
          <div className="inline-block px-4 py-1.5 bg-scientific-gold/10 rounded-full mb-4">
            <span className="text-xs font-semibold text-scientific-gold uppercase tracking-wide">About Us</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-scientific-textDark mb-6">
            About <span className="text-scientific-gold">Samprabha</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Redefining scientific support services through precision, integrity, and innovation
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 mb-12"
        >
          <h2 className="font-serif text-3xl font-bold text-scientific-textDark mb-6">
            Our <span className="text-scientific-emerald">Story</span>
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Samprabha Scientific Services was born from a critical need: bridging the gap between scientific inquiry and professional execution. While India produces brilliant minds, the technical nuances of patent filing, high-impact thesis writing, and statistical validation often become hurdles.
            </p>
            <p>
              Based in Gandhinagar, Gujarat—a city known for its academic institutions and pharmaceutical industries—we operate at the intersection of academia and industry. We provide strategic scientific consulting that elevates the intrinsic value of your research.
            </p>
            <p>
              Our team comprises experienced PhD professionals, former journal editors, and industry consultants who understand the pressures of academic deadlines, the rigor of peer review, and the precision required in pharmaceutical documentation.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            className="bg-white p-8 rounded-2xl border-2 border-scientific-gold/30 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-scientific-gold/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-scientific-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To simplify the research journey for the global scientific community by providing accessible, expert-led support services that bridge the gap between idea and publication.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl border-2 border-scientific-emerald/30 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-14 h-14 bg-scientific-emerald/10 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-scientific-emerald" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become India's most trusted partner in academic excellence and pharmaceutical research innovation, known for ethical standards and technical precision.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-scientific-gold/5 to-scientific-emerald/5 rounded-2xl p-8 md:p-12 mb-12"
        >
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Why Researchers Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "PhD Expertise", desc: "Doctorate holders with extensive experience" },
              { icon: Shield, title: "Confidentiality", desc: "Strict protocols for all research" },
              { icon: TrendingUp, title: "98% Success", desc: "Client satisfaction rate" },
              { icon: Users, title: "500+ Projects", desc: "Successfully delivered" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-scientific-emerald/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-scientific-emerald" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Integrity", 
                desc: "Maintaining the highest ethical standards in all our work, ensuring complete confidentiality and originality."
              },
              { 
                title: "Excellence", 
                desc: "Delivering work that meets international standards and exceeds client expectations every time."
              },
              { 
                title: "Collaboration", 
                desc: "Working as partners with our clients, understanding their unique needs and goals."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-scientific-gold/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-scientific-gold" />
                  </div>
                  <h4 className="font-serif text-xl font-bold">{value.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div 
          className="bg-scientific-textDark rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8 text-scientific-gold" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold mb-2">Based in Gandhinagar, Serving Globally</h3>
              <p className="text-gray-300 leading-relaxed">
                Our location in Gujarat's capital gives us access to leading research institutions and pharmaceutical companies, while our expertise allows us to serve researchers worldwide.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
