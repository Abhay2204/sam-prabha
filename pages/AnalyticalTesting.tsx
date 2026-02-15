import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Microscope, FlaskConical, Atom, Waves, Zap, ArrowRight } from 'lucide-react';

interface TestingMethod {
  id: string;
  name: string;
  fullName: string;
  description: string;
  applications: string[];
  parameters: string[];
  icon: any;
}

const TESTING_METHODS: TestingMethod[] = [
  {
    id: 'uv',
    name: 'UV',
    fullName: 'Ultraviolet-Visible Spectroscopy',
    description: 'Quantitative and qualitative analysis of compounds based on their absorption of UV-visible light. Essential for determining concentration, purity, and structural information.',
    applications: [
      'Pharmaceutical drug analysis',
      'Protein and nucleic acid quantification',
      'Quality control in manufacturing',
      'Environmental monitoring'
    ],
    parameters: ['Absorbance', 'Wavelength range (190-1100 nm)', 'Molar absorptivity', 'Beer-Lambert law compliance'],
    icon: Waves
  },
  {
    id: 'hptlc',
    name: 'HPTLC',
    fullName: 'High-Performance Thin Layer Chromatography',
    description: 'Advanced planar chromatography technique for separation, identification, and quantification of complex mixtures with high resolution and sensitivity.',
    applications: [
      'Herbal drug standardization',
      'Pesticide residue analysis',
      'Food quality testing',
      'Pharmaceutical impurity profiling'
    ],
    parameters: ['Rf values', 'Densitometric scanning', 'Plate development', 'Multi-wavelength detection'],
    icon: FlaskConical
  },
  {
    id: 'hplc',
    name: 'HPLC',
    fullName: 'High-Performance Liquid Chromatography',
    description: 'Gold standard analytical technique for separating, identifying, and quantifying components in liquid samples with exceptional precision and accuracy.',
    applications: [
      'Drug purity and potency testing',
      'Bioanalytical method development',
      'Metabolite identification',
      'Quality assurance in pharmaceuticals'
    ],
    parameters: ['Retention time', 'Peak area/height', 'Resolution', 'Column efficiency', 'Detection limits'],
    icon: Microscope
  },
  {
    id: 'xrd',
    name: 'XRD',
    fullName: 'X-Ray Diffraction',
    description: 'Non-destructive technique for determining crystalline structure, phase composition, and material properties through X-ray scattering patterns.',
    applications: [
      'Polymorph identification',
      'Crystallinity determination',
      'Material characterization',
      'Mineral analysis'
    ],
    parameters: ['Crystal structure', 'Lattice parameters', 'Crystallite size', 'Phase purity', 'Miller indices'],
    icon: Atom
  },
  {
    id: 'dsc',
    name: 'DSC',
    fullName: 'Differential Scanning Calorimetry',
    description: 'Thermal analysis technique measuring heat flow associated with phase transitions, providing insights into material stability and compatibility.',
    applications: [
      'Melting point determination',
      'Glass transition temperature',
      'Drug-excipient compatibility',
      'Polymorphism studies'
    ],
    parameters: ['Enthalpy changes', 'Transition temperatures', 'Heat capacity', 'Thermal stability'],
    icon: Zap
  },
  {
    id: 'lc',
    name: 'LC',
    fullName: 'Liquid Chromatography',
    description: 'Versatile separation technique for analyzing complex mixtures in liquid phase, foundational to modern analytical chemistry.',
    applications: [
      'Compound separation',
      'Preparative purification',
      'Method development',
      'Routine quality control'
    ],
    parameters: ['Mobile phase composition', 'Flow rate', 'Column selection', 'Detection method'],
    icon: FlaskConical
  },
  {
    id: 'lcms',
    name: 'LC-MS',
    fullName: 'Liquid Chromatography-Mass Spectrometry',
    description: 'Hyphenated technique combining chromatographic separation with mass spectrometric detection for unparalleled sensitivity and specificity.',
    applications: [
      'Metabolomics and proteomics',
      'Drug metabolism studies',
      'Trace analysis',
      'Biomarker discovery'
    ],
    parameters: ['Mass-to-charge ratio (m/z)', 'Fragmentation patterns', 'Ionization efficiency', 'MS/MS spectra'],
    icon: Microscope
  },
  {
    id: 'raman',
    name: 'Raman Spectroscopy',
    fullName: 'Raman Spectroscopy',
    description: 'Vibrational spectroscopy technique providing molecular fingerprints through inelastic scattering of light, ideal for non-destructive analysis.',
    applications: [
      'Molecular structure elucidation',
      'Polymorphism detection',
      'Counterfeit drug identification',
      'Material characterization'
    ],
    parameters: ['Raman shift (cm⁻¹)', 'Peak intensity', 'Spectral fingerprint', 'Laser wavelength'],
    icon: Waves
  },
  {
    id: 'particle-size',
    name: 'Particle Size Analysis',
    fullName: 'Particle Size Distribution Analysis',
    description: 'Characterization of particle dimensions and distribution in powders and suspensions, critical for formulation development and quality control.',
    applications: [
      'Pharmaceutical formulation',
      'Nanotechnology research',
      'Powder flow properties',
      'Dissolution rate prediction'
    ],
    parameters: ['Mean particle size', 'Size distribution (D10, D50, D90)', 'Span', 'Polydispersity index'],
    icon: Atom
  },
  {
    id: 'zeta-potential',
    name: 'Zeta Potential',
    fullName: 'Zeta Potential Measurement',
    description: 'Electrokinetic analysis measuring surface charge of particles in suspension, essential for predicting colloidal stability and formulation behavior.',
    applications: [
      'Nanoparticle stability assessment',
      'Emulsion formulation',
      'Drug delivery systems',
      'Protein aggregation studies'
    ],
    parameters: ['Zeta potential (mV)', 'Electrophoretic mobility', 'pH dependence', 'Ionic strength effects'],
    icon: Zap
  },
  {
    id: 'gc',
    name: 'GC',
    fullName: 'Gas Chromatography',
    description: 'Separation technique for volatile and semi-volatile compounds using gas as mobile phase, widely used in environmental and pharmaceutical analysis.',
    applications: [
      'Residual solvent analysis',
      'Essential oil profiling',
      'Environmental pollutant detection',
      'Forensic analysis'
    ],
    parameters: ['Retention time', 'Peak resolution', 'Column temperature program', 'Carrier gas flow'],
    icon: FlaskConical
  },
  {
    id: 'nmr',
    name: 'NMR',
    fullName: 'Nuclear Magnetic Resonance Spectroscopy',
    description: 'Powerful structural elucidation technique exploiting magnetic properties of atomic nuclei, providing detailed molecular information.',
    applications: [
      'Structure determination',
      'Purity assessment',
      'Reaction monitoring',
      'Metabolomics'
    ],
    parameters: ['Chemical shift (ppm)', 'Coupling constants', 'Integration', 'Multiplicity patterns'],
    icon: Atom
  }
];

export const AnalyticalTesting: React.FC = () => {
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
            Analytical Testing Services
          </motion.h1>
          <p className="max-w-3xl mx-auto text-scientific-textGray text-lg leading-relaxed">
            State-of-the-art analytical instrumentation and expert interpretation for comprehensive material characterization. 
            From molecular structure to physical properties, we deliver precise, reliable results.
          </p>
        </div>

        {/* Testing Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {TESTING_METHODS.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-scientific-emerald/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-scientific-emerald/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-scientific-emerald" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-bold text-scientific-textDark mb-1">
                      {method.name}
                    </h2>
                    <p className="text-sm text-scientific-gold font-medium">
                      {method.fullName}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {method.description}
                </p>

                {/* Applications */}
                <div className="mb-6">
                  <h3 className="font-serif text-sm font-bold text-scientific-textDark mb-3 uppercase tracking-wide">
                    Applications
                  </h3>
                  <ul className="space-y-2">
                    {method.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-scientific-emerald mt-1">•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Parameters */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-serif text-sm font-bold text-scientific-textDark mb-3 uppercase tracking-wide">
                    Key Parameters
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {method.parameters.map((param, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-scientific-offWhite text-xs text-gray-700 rounded-full border border-gray-200"
                      >
                        {param}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-scientific-emerald to-scientific-emeraldDark rounded-2xl p-12 text-white mb-16"
        >
          <h2 className="font-serif text-3xl font-bold mb-6 text-center">
            Why Choose Our Analytical Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Advanced Instrumentation</h3>
              <p className="text-white/90 text-sm">
                Access to cutting-edge analytical equipment maintained to the highest standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Expert Interpretation</h3>
              <p className="text-white/90 text-sm">
                Detailed reports with scientific insights from experienced analysts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-white/90 text-sm">
                Rapid analysis without compromising accuracy or quality
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-scientific-textDark rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Analyze Your Samples?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our analytical team to discuss your testing requirements. 
            We'll recommend the most appropriate techniques for your research goals.
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
