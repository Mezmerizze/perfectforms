import React from 'react';
import { FileText, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function Sun400XL() {
  return (
    <div className="pt-12 pb-24">
      {/* HERO */}
      <section className="text-center py-16 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-text-primary font-display mb-4"
        >
          Das SUN 400 XL
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-text-secondary"
        >
          Infrarot-Technologie trifft auf gezielte Bewegung.
        </motion.p>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-text-primary font-display">
            30 Minuten = 30km Joggen
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Bei Training am SUN 400XL schwitzt man. Wissenschaftliche Studien haben ergeben, dass Marathonläufer seltener an Krebs erkranken. Läufer, die täglich mehr als 30 km laufen, scheiden toxisch wirkende Stoffe beim Transpirieren aus.
            </p>
            <p>
              Genau genommen muss ein Marathonläufer 30 km laufen, um das gleiche Ergebnis zu erzielen wie wir mit einer halben Stunde Infrarotstrahlung im SUN 400 XL.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-[400px] md:h-[500px] bg-white rounded-3xl shadow-lg overflow-hidden"
        >
           <img 
            src="https://picsum.photos/seed/sun400xl/800/800?blur=1" 
            alt="SUN 400 XL Device" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* NEW SECTION: WAS IST SUN 400XL */}
      <section className="max-w-[1000px] mx-auto px-4 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 font-display mb-6">
            Was ist SUN 400XL Gerät?
          </h2>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            Der <span className="font-bold text-black">SUN 400XL</span> ist ein in Österreich bei der Firma <span className="font-bold text-green-600">GEOWAY LIFEBALANCE</span> entwickeltes Komplettsystem, das speziell für die Körperbehandlung zur nachhaltigen Gewichtsreduktion konzipiert wurde. Modernste Technologie kombiniert mit einer einfachen Bedienung sorgen für <span className="font-bold text-black">rasche Erfolgserlebnisse</span>.
          </p>

          <p className="text-xl text-red-600 font-medium italic text-center py-4">
            Immer mehr Menschen haben das Bedürfnis schnell und ohne der Gesundheit zu schaden abzunehmen.
          </p>

          <p className="text-lg text-text-secondary leading-relaxed">
            Der <span className="font-bold text-black">SUN 400XL</span> entspricht diesem Trend. Eine grosse Anzahl zufriedener Kunden bestätigen die lang anhaltende Wirkung der Körperbehandlung und sind von den Erfahrungen und Resultaten mit dem <span className="font-bold text-black">SUN 400XL</span> schlichtweg begeistert.
          </p>

          <div className="flex items-center gap-2 text-lg">
            <span className="font-bold text-red-600 italic">REFERENZEN:</span>
            <a href="http://www.geoway.at" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold underline hover:text-green-700">
              www.geoway.at
            </a>
          </div>

          <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <img 
              src="https://picsum.photos/seed/sun400xl-devices/1200/600" 
              alt="SUN 400 XL Geräte" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-center text-text-secondary mt-6 font-medium">
            Das Training am <span className="font-bold text-black">SUN 400XL</span> verlangt keine besondere Anstrengung und ist für jede Altersgruppe geeignet.
          </p>
        </motion.div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="max-w-[800px] mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md border border-border-card flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="bg-secondary-teal/10 p-4 rounded-full text-secondary-teal">
              <FileText size={32} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">Wissenschaftliche Hintergründe</h3>
              <p className="text-text-secondary text-sm">Infrarot Basiserklärung als PDF</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-secondary-teal text-white rounded-lg font-medium hover:bg-secondary-teal/90 transition-colors shadow-sm hover:shadow-md">
            <Download size={18} />
            Herunterladen
          </button>
        </motion.div>
      </section>
    </div>
  );
}
