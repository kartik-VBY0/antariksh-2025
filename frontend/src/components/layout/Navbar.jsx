import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Proshow', path: '/proshow' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {/* here we need logo instead of text */}
            <Link to="/" className="text-white text-2xl font-bold tracking-wider">
              <img src="/logo192.png" alt="Incridea Logo" className="h-8" />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`hover-underline text-sm font-bold transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Login
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <MobileMenuButton />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu navItems={navItems} />
    </motion.nav>
  );
};

// Mobile Menu Button Component
const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  );
};

// Mobile Menu Component
const MobileMenu = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 },
      }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md"
    >
      <div className="px-6 py-4 space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={`hover-underline block text-base font-bold transition-colors ${
              location.pathname === item.path
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="block w-full"
        >
          <button className="w-full px-6 py-2.5 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-200">
            Login
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;