import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = ['About', 'Methodology', 'Simulation', 'Resources', 'Contact'];

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors duration-300">
            PPI Project
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-blue-200 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl focus:outline-none hover:text-blue-200"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 bg-blue-700 rounded-lg px-4 py-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="block text-white hover:text-blue-200 transition duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
