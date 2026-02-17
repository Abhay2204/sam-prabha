import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, FlaskConical, Microscope, Activity, Atom } from 'lucide-react';

const ANALYTICAL_TESTS = [
  {
    id: 'hptlc',
    name: 'HPTLC',
    fullName: 'High Performance Thin Layer Chromatography',
    description: 'Advanced planar chromatography technique for qualitative and quantitative analysis of complex mixtures.',
    applications: ['Pharmaceutical analysis', 'Herbal product testing', 'Food quality control'],
    icon: FlaskConical
  },
  {
    id: 'hplc',
    name: 'HPLC',
    fullName: 'High Performance Liquid Chromatography',
    description: 'Powerful analytical technique for separating, identifying, and quantifying components in a mixture.',
    applications: ['Drug purity testing', 'Metabolite analysis', 'Quality assurance'],
    icon: Activity
  },
  {
    id: 'dsc',
    name: 'DSC',
    fullName: 'Differential Scanning Calorimetry',
    description: 'Thermal analysis technique measuring heat flow associated with material transitions.',
    applications: ['Polymer characterization', 'Drug stability', 'Thermal properties'],
    icon: Atom
  },
  {
    id: 'xrd',
    name: 'XRD',
    fullName: 'X-Ray Diffraction',
    description: 'Non-destructive technique for analyzing crystalline structure and phase identification.',
    applications: ['Crystal structure analysis', 'Phase identification', 'Material characterization'],
    icon: Microscope
  },
  {
    id: 'lcms',
    name: 'LC-MS',
    fullName: 'Liquid Chromatography-Mass Spectrometry',
    description: 'Combined analytical technique for identification and quantification of chemical compounds.',
    applications: ['Proteomics', 'Metabolomics', 'Drug discovery'],
    icon: FlaskConical
  },
  {
    id: 'raman',
    name: 'Raman Spectroscopy',
    fullName: 'Raman Spectroscopy',
    description: 'Vibrational spectroscopy technique for molecular fingerprinting and structural analysis.',
    applications: ['Material identification', 'Pharmaceutical analysis', 'Quality control'],
    icon: Activity
  },
  {
    id: 'gc',
    name: 'GC',
    fullName: 'Gas Chromatography',
    description: 'Analytical technique for separating and analyzing volatile compounds in gas phase.',
    applications: ['Environmental testing', 'Forensic analysis', 'Petrochemical analysis'],
    icon: Atom
  },
  {
    id: 'particle-size',
    name: 'Particle Size & Zeta Potential',
    fullName: 'Particle Size Distribution & Zeta Potential Analysis',
    description: 'Characterization of particle size distribution and surface charge properties.',
    applications: ['Nanoparticle analysis', 'Colloid stability', 'Drug formulation'],
    icon: Microscope
  },
  {
    id: 'nmr',
    name: 'NMR',
    fullName: 'Nuclear Magnetic Resonance',
    description: 'Spectroscopic technique for determining molecular structure and dynamics.',
    applications: ['Structure elucidation', 'Purity analysis', 'Metabolite profiling'],
    icon: FlaskConical
  }
];

export const AnalyticalTesting: React.FC = () => {
  return (
    <div className="w-full pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 bg-scientific-emerald/10 rounded-full mb-4">
              <span className="text-xs font-semibold text-scientific-emerald uppercase tracking-wide">Analytical Testing</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-scientific-textDark mb-6">
              Advanced <span className="text-scientific-gold">Analytical</span> Testing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              State-of-the-art analytical testing services for pharmaceutical, chemical, and material characterization
            </p>
          </motion.div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ANALYTICAL_TESTS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-scientific-emerald/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-scientific-emerald/10 rounded-lg flex items-center justify-center">
                  <test.icon className="w-6 h-6 text-scientific-emerald" />
                </div>
                <span className="text-xs font-semibold text-scientific-gold bg-scientific-gold/10 px-2 py-1 rounded">
                  Available
                </span>
              </div>
              
              <h3 className="font-serif text-xl font-bold text-scientific-textDark mb-2">
                {test.name}
              </h3>
              <p className="text-xs text-gray-500 mb-3">{test.fullName}</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {test.description}
              </p>
              
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Applications:</p>
                <ul className="space-y-1">
                  {test.applications.map((app, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-scientific-emerald mt-0.5">•</span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-scientific-textDark rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-serif text-3xl font-bold text-white mb-4">
            Need Analytical Testing Services?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our state-of-the-art laboratory facilities and experienced analysts ensure accurate, reliable results for your research and quality control needs.
          </p>
          <NavLink 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-scientific-gold text-white rounded-lg font-medium hover:bg-scientific-goldDim transition-colors shadow-lg"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};
