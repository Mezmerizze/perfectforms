import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Ruler, Sparkles, Dumbbell, Flame, Zap, Heart, Activity, Users, FileText, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import heroBg from '../../Images/kling_20260226_作品__1537_0.webp';
import wellnessBg from '../../Images/asd.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors pr-8">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* SECTION 2: HERO (Full Background Style) */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Woman in white fitness wear"
            className="w-full h-full object-cover object-[75%_center]"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlay for Text Readability - Light Theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 w-full relative z-10 pt-20 lg:pt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl space-y-8"
          >
            <motion.div variants={fadeIn}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase rounded-full border border-primary/20 backdrop-blur-md">
                Ihr persönliches Figurstudio
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-[4rem] font-bold leading-[1.1] tracking-tight font-display text-slate-900 text-balance">
              <span className="text-primary">Abnehmen</span> ohne Hungern. <br />
              Ohne <span className="text-primary">Jo-Jo Effekt.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-2xl text-slate-600 leading-relaxed font-light">
              Figurmodellierung mit Abnehmen, Hautstraffung und Muskelaufbau in Winterthur. Infrarot in Verbindung mit Bewegung.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/kontakt" className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 text-center text-lg">
                Probetraining Fr 30.-
              </Link>
              <Link to="/sun400xl" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-sm">
                Mehr erfahren <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeIn} className="pt-8 flex items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white border border-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/avatar${i}/100/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-700">500+ Glückliche Kunden</span>
              </div>
              <div className="h-4 w-px bg-slate-300"></div>
              <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                <span className="text-primary">★ 4.9</span>
                <span>Bewertung</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: BENEFITS (Redesigned) */}
      <section id="vorteile" className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 text-sm font-semibold tracking-wider uppercase text-slate-500">
              Vorteile
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary leading-tight">
              Sichtbare Resultate <br /> <span className="text-primary">garantiert</span>
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed max-w-md">
              Durch die einzigartige Kombination von Bewegung und Infrarotwärme erreichen Sie Ihre Ziele schneller und effektiver als bei herkömmlichem Training.
            </p>

            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
              Jetzt starten <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Right Column: 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Ruler,
                title: "Umfangreduzierung",
                text: "Gezielte Abnahme an Problemzonen wie Bauch, Beine und Po.",
                active: false
              },
              {
                icon: Sparkles,
                title: "Straffe Haut",
                text: "Verbessertes Hautbild und Rückbildung von Cellulite.",
                active: false
              },
              {
                icon: Dumbbell,
                title: "Muskelaufbau",
                text: "Effektive Stärkung der Muskulatur durch Widerstand.",
                active: false
              },
              {
                icon: Activity,
                title: "Stoffwechsel",
                text: "Nachhaltige Aktivierung der Fettverbrennung.",
                active: false
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-3xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${card.active
                  ? 'bg-primary text-white shadow-xl shadow-primary/20'
                  : 'bg-slate-50 text-text-primary hover:bg-white border border-transparent hover:border-slate-100'
                  }`}
              >
                <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl ${card.active ? 'bg-white/20 text-white' : 'bg-white text-primary shadow-sm'
                  }`}>
                  <card.icon size={24} />
                </div>
                <h3 className={`text-xl font-bold mb-3 font-display ${card.active ? 'text-white' : 'text-text-primary'}`}>
                  {card.title}
                </h3>
                <p className={`leading-relaxed text-sm ${card.active ? 'text-white/90' : 'text-text-secondary'}`}>
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3.5: TRANSFORMATION MARQUEE */}
      <section className="py-24 bg-[#F2F2F0] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Static Content */}
          <div className="space-y-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display text-text-primary leading-[1.1]"
            >
              Transformieren Sie <br />
              <span className="text-primary/80">Körper, Geist</span> <br />
              und <span className="text-primary/80">Leben.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary leading-relaxed max-w-md"
            >
              Egal, ob Sie Ihre Gesundheit verbessern, Stress abbauen oder Ihr Wohlbefinden steigern möchten – das Training im SUN 400 XL bietet eine Fülle von Vorteilen, die Ihren Alltag positiv verändern.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group">
                Starten Sie Ihre Reise <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Vertical Marquee */}
          <div className="relative h-[600px] overflow-hidden mask-gradient-y">
            {/* Gradient Masks for smooth fade in/out */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F2F2F0] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#F2F2F0] to-transparent z-10 pointer-events-none"></div>

            <motion.div
              animate={{ y: [0, -1032] }} // Adjust based on card height * count
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear"
              }}
              className="space-y-6"
            >
              {/* Double the list for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="space-y-6">
                  {[
                    {
                      title: "Ganzheitliches Wohlbefinden",
                      text: "Fördert ein gesundes Herz, verbessert die Durchblutung und unterstützt einen besseren Schlaf. Es kann auch den Blutdruck senken.",
                      image: "https://picsum.photos/seed/wellness_yoga/200/200"
                    },
                    {
                      title: "Innere Ruhe finden",
                      text: "Die Kombination aus Wärme und Bewegung hilft, Stress, Ängste und mentale Anspannung abzubauen. Finden Sie zurück zu Ihrer Mitte.",
                      image: "https://picsum.photos/seed/peace_mind/200/200"
                    },
                    {
                      title: "Energie & Vitalität",
                      text: "Spüren Sie neue Energie durch die Anregung des Stoffwechsels. Fühlen Sie sich vitaler und leistungsfähiger im Alltag.",
                      image: "https://picsum.photos/seed/energy_sun/200/200"
                    },
                    {
                      title: "Schmerzfreiheit",
                      text: "Linderung von chronischen Schmerzen und Verspannungen. Genießen Sie wieder mehr Bewegungsfreiheit ohne Beschwerden.",
                      image: "https://picsum.photos/seed/pain_free/200/200"
                    }
                  ].map((card, index) => (
                    <div key={`${setIndex}-${index}`} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-display font-semibold text-text-primary max-w-[70%]">
                          {card.title}
                        </h3>
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                          <img src={card.image} alt={card.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>



      {/* SECTION 4.5: DUPLICATED HEALTH & THERAPY (Reversed Layout) */}
      <section id="wellness" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Column (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] bg-slate-100 rounded-3xl shadow-lg overflow-hidden order-2 lg:order-1"
          >
            <img
              src={wellnessBg}
              alt="Wellness and relaxation"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Text Column (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary font-display mb-8">
              Ganzheitliche Entspannung
            </h2>
            <ul className="space-y-4">
              {[
                "Tiefenentspannung für Körper und Geist.",
                "Reduktion von Stresshormonen.",
                "Verbesserung der Schlafqualität.",
                "Lösung von mentalen Blockaden.",
                "Steigerung des allgemeinen Wohlbefindens.",
                "Unterstützung bei Burnout-Prävention.",
                "Harmonisierung des Energieflusses."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <Check size={16} className="text-primary" />
                  </div>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: PRICING */}
      <section id="preise" className="py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 text-sm font-semibold tracking-wider uppercase text-slate-500 mb-4">
              Preise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary font-display mb-4">
              Investieren Sie in Ihre Gesundheit
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Flexible Modelle für jeden Bedarf. Starten Sie mit einem unverbindlichen Probetraining.
            </p>
          </motion.div>

          {/* Main Abo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-center">
            {/* Card 1: 10er Abo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full border border-slate-100"
            >
              <h3 className="text-xl font-medium text-text-primary mb-2">10er Abo</h3>
              <div className="text-5xl font-bold font-display text-text-primary mb-2">CHF 490</div>
              <p className="text-text-tertiary text-sm mb-8">Für den Einstieg</p>

              <Link to="/kontakt" className="px-8 py-3 rounded-full border border-slate-300 text-text-primary font-semibold hover:border-slate-900 transition-all w-full max-w-[200px] mb-8">
                Anfragen
              </Link>

              <div className="w-12 h-px bg-slate-200 mb-8"></div>

              <ul className="space-y-4 text-text-secondary text-sm">
                <li>+ 1 Training Gratis</li>
                <li>Gültigkeit 6 Monate</li>
                <li>10% Studentenrabatt</li>
              </ul>
            </motion.div>

            {/* Card 2: 15er Abo (Popular) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 p-12 rounded-[2.5rem] shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden z-10"
            >
              <div className="absolute top-6 bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-primary/20">
                Empfohlen
              </div>
              <h3 className="text-xl font-medium text-white mb-2 mt-4">15er Abo</h3>
              <div className="text-6xl font-bold font-display text-white mb-2">CHF 735</div>
              <p className="text-slate-400 text-sm mb-10">Der Bestseller</p>

              <Link to="/kontakt" className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all w-full max-w-[220px] mb-10 shadow-lg shadow-primary/25">
                Anfragen
              </Link>

              <div className="w-12 h-px bg-slate-700 mb-10"></div>

              <ul className="space-y-5 text-slate-300 text-sm">
                <li className="font-medium text-white">+ 3 Trainings Gratis</li>
                <li>Gültigkeit 9 Monate</li>
                <li>10% Studentenrabatt</li>
              </ul>
            </motion.div>

            {/* Card 3: 20er Abo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full border border-slate-100"
            >
              <h3 className="text-xl font-medium text-text-primary mb-2">20er Abo</h3>
              <div className="text-5xl font-bold font-display text-text-primary mb-2">CHF 980</div>
              <p className="text-text-tertiary text-sm mb-8">Maximaler Profit</p>

              <Link to="/kontakt" className="px-8 py-3 rounded-full border border-slate-300 text-text-primary font-semibold hover:border-slate-900 transition-all w-full max-w-[200px] mb-8">
                Anfragen
              </Link>

              <div className="w-12 h-px bg-slate-200 mb-8"></div>

              <ul className="space-y-4 text-text-secondary text-sm">
                <li>+ 5 Trainings Gratis</li>
                <li>Gültigkeit 1 Jahr</li>
                <li>10% Studentenrabatt</li>
              </ul>
            </motion.div>
          </div>

          {/* Link to Pricing Page */}
          <div className="flex justify-center mt-12">
            <Link
              to="/preise"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-text-primary font-semibold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md group"
            >
              <span>Weitere Angebote & Infos</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      {/* SECTION 5.5: DOWNLOAD & INFO */}
      <section id="wissenswertes" className="py-24 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <FileText size={14} />
                <span>Wissenswertes</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary">
                Pflegen Sie Ihr wertvollstes Gut
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Erfahren Sie alles über die therapeutische Wirkung der Infrarotstrahlung, die Tiefenwirkung im Gewebe und wie der Perfect Forms SUN 400 XL Ihren Körper bei der Entgiftung und Regeneration unterstützt.
              </p>
              <div className="pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg shadow-slate-900/20"
                  onClick={(e) => e.preventDefault()} // Placeholder
                >
                  <FileText size={18} />
                  <span>Broschüre herunterladen</span>
                  <span className="text-slate-400 text-xs font-normal ml-1">(PDF)</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 aspect-[1/1.4] bg-slate-100 rounded-lg shadow-2xl rotate-3 border border-slate-200 overflow-hidden group hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="p-6 flex flex-col h-full items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <FileText size={24} />
                  </div>
                  <span className="font-display font-bold text-slate-900 text-sm">Perfect Forms</span>
                  <span className="text-xs text-slate-500 mt-1">SUN 400 XL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5.8: FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary font-display mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-text-secondary">
              Antworten auf die wichtigsten Fragen rund um das Infrarot-Training.
            </p>
          </div>

          <div className="bg-white rounded-2xl">
            <FAQItem
              question="Kann ich mit Implantaten oder künstlichen Gelenken trainieren?"
              answer="Normalerweise besteht keine Gefahr, da Implantate und künstliche Gelenke tiefer im Körper liegen als die Infrarotstrahlung eindringt (ca. 5mm). Dennoch sollte im Zweifelsfall immer der behandelnde Arzt konsultiert werden."
            />
            <FAQItem
              question="Was genau ist Infrarotstrahlung?"
              answer="Infrarotstrahlung ist eine sichere Form natürlich vorkommender Energie, die Objekte durch direkte Lichtumwandlung erwärmt. Sie dringt bis zu 5mm in den Körper ein und hat zahlreiche positive Effekte auf Haut, Körper und Fettzellen."
            />
            <FAQItem
              question="Wann sollte ich auf das Training verzichten?"
              answer="Bei akuten Entzündungen, Fieber, Grippe, frischen Verletzungen, Blutungen oder oberflächlichen Venenentzündungen sollte 'Hände weg von Wärme' gelten. Pausieren Sie das Training, bis Sie wieder fit sind."
            />
            <FAQItem
              question="Wie wirkt sich das Training auf die Haut aus?"
              answer="Infrarotwärme fördert die Durchblutung und kann das Hautbild wesentlich verbessern. Sie hilft bei der Rückbildung von Cellulite und kann unterstützend bei Hautthemen wie Akne oder Schuppenflechte wirken."
            />
            <FAQItem
              question="Wie oft sollte ich trainieren?"
              answer="Für optimale Ergebnisse empfehlen wir 2-3 Einheiten pro Woche. Regelmäßigkeit ist der Schlüssel zum Erfolg für Stoffwechselaktivierung und Umfangreduktion."
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-24 bg-text-primary text-white text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-6"
          >
            Bereit für Ihr Probetraining?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-tertiary text-lg mb-8"
          >
            Nur Fr 30.- (werden zurückerstattet nach Kauf von Abo innerhalb von 10 Tagen). <br />
            Studenten Rabatt: 10%.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
              Jetzt Termin vereinbaren <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
