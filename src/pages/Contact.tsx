import React from 'react';
import { Phone, Clock, MapPin, Facebook, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="py-12 md:py-24 bg-bg-page">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* LEFT: Details */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-4xl font-bold text-text-primary font-display mb-6">
              Nehmen Sie Kontakt auf
            </h1>
            <p className="text-text-secondary text-lg">
              Wir freuen uns darauf, Sie kennenzulernen und gemeinsam an Ihren Zielen zu arbeiten.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-border-card">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-1">Telefon</h3>
                <a href="tel:0763833318" className="text-2xl font-bold text-primary hover:underline">
                  076 383 33 18
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-border-card">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-1">Öffnungszeiten</h3>
                <p className="text-text-primary font-medium text-lg">Mo-Fr | 13-20 Uhr</p>
                <p className="text-text-secondary mt-1">Termine nach Vereinbarung auch nach 18 Uhr und am Wochenende.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-border-card">
                <Facebook className="w-6 h-6 text-[#1877F2]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-1">Social Media</h3>
                <a href="#" className="text-text-primary font-medium hover:text-[#1877F2] transition-colors">
                  Besuchen Sie uns auf Facebook
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Form & Map */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-border-card">
            <h3 className="text-xl font-semibold text-text-primary font-display mb-6">Nachricht senden</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl bg-bg-page border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl bg-bg-page border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="ihre.email@beispiel.ch"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Nachricht</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl bg-bg-page border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2"
              >
                <Send size={18} />
                Senden
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="bg-slate-200 rounded-3xl h-[250px] w-full flex items-center justify-center text-text-tertiary relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-300 animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
              <MapPin size={24} className="text-primary" />
              <span className="font-medium text-sm">Google Maps Integration</span>
              <span className="text-xs">Perfect Forms Studio Winterthur</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
