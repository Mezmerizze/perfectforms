import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-blue/10 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Logo & Address */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-text-primary font-bold text-xl font-display tracking-tight">Perfect Forms</span>
            <span className="text-text-secondary text-xs font-medium">Studio Winterthur</span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            Ihr Partner für Figurmodellierung, Gesundheit und Wohlbefinden in Winterthur.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="space-y-4">
          <h3 className="text-text-primary font-semibold font-display">Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-text-secondary hover:text-primary text-sm transition-colors">Startseite</Link></li>
            <li><Link to="/preise" className="text-text-secondary hover:text-primary text-sm transition-colors">Anmeldung & Preise</Link></li>
            <li><Link to="/sun400xl" className="text-text-secondary hover:text-primary text-sm transition-colors">Das SUN 400 XL</Link></li>
            <li><Link to="/kontakt" className="text-text-secondary hover:text-primary text-sm transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-4">
          <h3 className="text-text-primary font-semibold font-display">Kontakt</h3>
          <div className="space-y-3">
            <a href="tel:0763833318" className="flex items-start gap-3 text-text-secondary hover:text-primary transition-colors group">
              <Phone className="w-5 h-5 text-secondary-teal mt-0.5 group-hover:text-primary transition-colors" />
              <span className="text-sm">076 383 33 18</span>
            </a>
            <div className="flex items-start gap-3 text-text-secondary">
              <Clock className="w-5 h-5 text-secondary-teal mt-0.5" />
              <div className="text-sm">
                <p>Mo-Fr | 13-20 Uhr</p>
                <p className="text-text-tertiary text-xs mt-1">Termine nach Vereinbarung auch nach 18 Uhr und am Wochenende.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 mt-12 pt-8 border-t border-slate-100 text-center text-text-tertiary text-xs">
        &copy; {new Date().getFullYear()} Perfect Forms Studio Winterthur. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
