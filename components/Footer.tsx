import React from 'react';
import { Dna, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-scientific-gold/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
               <div className="absolute inset-0 bg-scientific-teal/20 blur-md rounded-full" />
               <img src="/public/images/Samprabha.jpg.jpeg" alt="Samprabha Logo" className="relative w-10 h-10 object-contain rounded-lg" />
            </div>
            <div className="flex flex-col">
              <span className="font-mukti text-xl font-bold text-scientific-gold leading-none">समप्रभ</span>
              <span className="text-[0.6rem] uppercase tracking-widest text-scientific-emerald font-bold mt-1">Scientific Services</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Empowering scientific innovation through expert research support and academic consultancy in Gandhinagar.
          </p>
          <div className="flex gap-4">
            <a href={CONTACT_INFO.whatsappLink} className="text-scientific-gold hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-scientific-gold/20">
              <Phone size={18} />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-scientific-gold hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-scientific-gold/20">
              <Mail size={18} />
            </a>
            <a href="#" className="text-scientific-gold hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-scientific-gold/20">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-scientific-gold border-b border-scientific-gold/30 inline-block pb-1">Explore</h4>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-gray-400 hover:text-scientific-gold transition-colors text-sm">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-scientific-gold border-b border-scientific-gold/30 inline-block pb-1">Core Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Thesis Writing</li>
            <li>Patent Guidance</li>
            <li>Data Analysis</li>
            <li>Lab Consultation</li>
            <li>Grant Proposals</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-scientific-gold border-b border-scientific-gold/30 inline-block pb-1">Visit Us</h4>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-scientific-emerald shrink-0" />
              <p>{CONTACT_INFO.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-scientific-emerald shrink-0" />
              <p>{CONTACT_INFO.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Samprabha Scientific Services. All rights reserved.</p>
        <p className="font-serif text-scientific-gold/50 mt-2 md:mt-0">Precision. Integrity. Innovation.</p>
      </div>
    </footer>
  );
};