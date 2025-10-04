import { motion } from 'framer-motion';
import Button from '../src/components/ui/Button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center z-20 px-6">
      

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
      >
        Welcome to <span className="text-blue-400">Antariksh</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-white/80 md:text-xl mt-4 max-w-xl mx-auto"
      >
        Explore the infinite universe of events, proshows, and experiences.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-8"
      >
        <Button variant="primary" size="lg" icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        }>
          See Events
        </Button>
      </motion.div>

    </div>
  );
};

export default HeroSection;
