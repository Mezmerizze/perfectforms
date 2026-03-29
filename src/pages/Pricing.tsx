import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Pricing() {
  return (
    <div className="pt-12 pb-24">
      {/* HERO */}
      <section className="text-center py-16 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-text-primary font-display mb-4"
        >
          Preise & Anmeldung
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-text-secondary"
        >
          Transparente Preise für Ihre Gesundheit.
        </motion.p>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-[1200px] mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left: Single Sessions & Discounts */}
          <div className="space-y-8">
            {/* Card 1: Single Sessions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-text-primary font-display mb-8">Einzeltraining & Probe</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-start border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                  <div>
                    <span className="font-bold text-text-primary text-lg block mb-1">Probetraining</span>
                    <span className="text-sm text-text-tertiary">Rückerstattung bei Abo-Kauf (innert 10 Tagen)</span>
                  </div>
                  <span className="font-bold text-primary text-xl whitespace-nowrap">CHF 30.-</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                  <span className="font-bold text-text-primary text-lg">Einzeltraining</span>
                  <span className="font-bold text-text-primary text-xl whitespace-nowrap">CHF 49.-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-text-primary text-lg">Verlängerung (10 Min)</span>
                  <span className="font-bold text-text-primary text-xl whitespace-nowrap">CHF 10.-</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Students & Seniors */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#F0FDF4] p-8 rounded-3xl border border-primary/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">10%</span>
                <h3 className="text-2xl font-bold text-text-primary font-display">Studenten & Senioren</h3>
              </div>
              
              <p className="text-text-secondary mb-8">
                Gültig für Studenten (bis 26 J.) und Senioren (ab 70 J.).
              </p>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <span className="block text-text-tertiary text-xs uppercase tracking-wider mb-1">Probetraining</span>
                  <span className="font-bold text-text-primary text-lg">CHF 27.-</span>
                </div>
                <div>
                  <span className="block text-text-tertiary text-xs uppercase tracking-wider mb-1">Einzeltraining</span>
                  <span className="font-bold text-text-primary text-lg">CHF 44.-</span>
                </div>
                <div className="col-span-2 pt-4 border-t border-primary/10">
                  <span className="block text-text-tertiary text-xs uppercase tracking-wider mb-1">Abo-Preise (10er / 15er / 20er)</span>
                  <span className="font-bold text-text-primary text-lg">CHF 440.- / 660.- / 880.-</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Important Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0F172A] text-white p-10 rounded-3xl flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold font-display mb-10">Wichtige Informationen</h3>
            
            <div className="mb-10">
              <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-wider">Bitte mitbringen</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-primary shrink-0 mt-0.5"/> 
                  <span>2 grosse Badetücher</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-primary shrink-0 mt-0.5"/> 
                  <span>Trainingsbekleidung (langärmlig, keine Baumwolle!)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-primary shrink-0 mt-0.5"/> 
                  <span>2 Paar Socken</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-primary shrink-0 mt-0.5"/> 
                  <span>Duschsandalen & Wasserflasche</span>
                </li>
              </ul>
            </div>

            <div className="mb-10 flex-grow">
              <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-wider">Bezahlung</h4>
              <p className="text-slate-300 leading-relaxed">
                Bar, Überweisung, Twint oder EC <br/>
                Maestro, VISA | MasterCard
              </p>
            </div>

            <div className="pt-8 border-t border-slate-800 mt-auto">
              <p className="text-xs text-slate-500 leading-relaxed">
                Nicht angetretene Termine werden verrechnet. Akzeptiert werden Abmeldungen oder Terminänderungen bis 24 Std vor dem Termin.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INFO BANNER */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[1000px] mx-auto px-4"
      >
        <div className="bg-primary-subtle border border-primary/20 rounded-xl p-6 md:p-8 flex items-start gap-4">
          <div className="bg-primary text-white p-2 rounded-full shrink-0">
            <Check size={20} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-1">Geld-zurück-Garantie</h4>
            <p className="text-text-secondary">
              Die 30.- CHF für das Probetraining werden bei Abo-Abschluss innerhalb von 10 Tagen zu 100% angerechnet.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
