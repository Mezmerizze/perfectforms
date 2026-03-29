import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Startseite', path: '/' },
    { name: 'Anmeldung & Preise', path: '/preise' },
    { name: 'Das SUN 400 XL', path: '/sun400xl' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav className="sticky top-0 z-50 h-[80px] bg-white/90 backdrop-blur-md border-b border-border-card">
      <div className="max-w-[1200px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-text-primary font-bold text-xl font-display tracking-tight">Perfect Forms</span>
          <span className="text-text-secondary text-xs font-medium">Studio Winterthur</span>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <Link
            to="/kontakt"
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Probetraining buchen
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-[80px] left-0 w-full bg-white border-b border-border-card md:hidden shadow-lg"
        >
          <div className="flex flex-col p-4 gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium ${
                  location.pathname === link.path ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-primary text-white text-center py-3 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Probetraining buchen
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
