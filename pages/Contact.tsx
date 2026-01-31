import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { FormStatus } from '../types';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    // Simulate submit
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      // Reset after 3 seconds
      setTimeout(() => setStatus(FormStatus.IDLE), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <div>
            <h1 className="font-serif text-5xl font-bold text-scientific-textDark mb-6">
              Let's Discuss Your <span className="text-scientific-emerald">Research</span>
            </h1>
            <p className="text-gray-600 mb-12 text-lg">
              Reach out to us for a preliminary consultation. Our team of Ph.D. experts is ready to analyze your requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-scientific-emerald/10 rounded-lg text-scientific-emerald">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg">WhatsApp / Call</h3>
                  <a href={CONTACT_INFO.whatsappLink} className="text-gray-600 hover:text-scientific-emerald transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-scientific-gold/10 rounded-lg text-scientific-gold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg">Email</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-scientific-emerald transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-gray-100 rounded-lg text-gray-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg">Location</h3>
                  <p className="text-gray-600">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-scientific-emerald focus:ring-1 focus:ring-scientific-emerald outline-none transition-all bg-scientific-offWhite"
                    placeholder="Dr. John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-scientific-emerald focus:ring-1 focus:ring-scientific-emerald outline-none transition-all bg-scientific-offWhite"
                    placeholder="+91 0000000000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-scientific-emerald focus:ring-1 focus:ring-scientific-emerald outline-none transition-all bg-scientific-offWhite"
                  placeholder="john@university.edu"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-scientific-emerald focus:ring-1 focus:ring-scientific-emerald outline-none transition-all bg-scientific-offWhite"
                >
                  <option value="">Select a Service</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Project Details</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-scientific-emerald focus:ring-1 focus:ring-scientific-emerald outline-none transition-all bg-scientific-offWhite"
                  placeholder="Briefly describe your research topic or requirement..."
                />
              </div>

              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="w-full py-4 bg-scientific-emerald text-white font-bold rounded-lg shadow-md hover:bg-scientific-emeraldDark transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === FormStatus.SUBMITTING ? (
                  'Sending...'
                ) : status === FormStatus.SUCCESS ? (
                  'Message Sent!'
                ) : (
                  <>Send Inquiry <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};