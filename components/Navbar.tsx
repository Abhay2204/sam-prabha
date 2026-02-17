import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white shadow-sm' : 'py-4 bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <img src="/images/samprabhacompress.jpeg" alt="Samprabha" className="w-10 h-10 object-contain rounded" />
          <div className="flex flex-col">
            <span className="font-mukti text-lg font-bold text-scientific-gold leading-none">
              समप्रभ
            </span>
            <span className="text-[0.55rem] uppercase tracking-[0.15em] text-scientific-emerald font-semibold">
              Scientific Services
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-scientific-emerald' : 'text-gray-600 hover:text-scientific-emerald'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/916359982599"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-scientific-gold text-white rounded-lg text-sm font-medium hover:bg-scientific-goldDim transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col p-6 gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base transition-colors ${
                    isActive ? 'text-scientific-emerald font-medium' : 'text-gray-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/916359982599"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center px-5 py-3 bg-scientific-gold text-white rounded-lg font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
