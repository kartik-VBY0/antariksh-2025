import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SpaceBackground from '../layout/SpaceBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SpaceBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-wider">
              
            </h1>
            
            {/* Astronaut Image - You'll need to add your own image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-32 md:-top-48 left-1/2 -translate-x-1/2 w-64 md:w-96 lg:w-[32rem]"
            >
              {/* Replace with your astronaut image */}
              <div className="relative">
                <motion.img
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 6,
                    ease: "easeInOut"
                  }}
                  src="/astronaut.png"
                  alt="Astronaut"
                  className="w-full h-auto drop-shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl font-light tracking-wide"
          >
            Explore the infinite.
          </motion.p>

          {/* Earth and CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative pt-32 md:pt-48"
          >
            {/* Earth Image - You'll need to add your own image */}
            <div className="relative w-80 md:w-96 lg:w-[32rem] h-80 md:h-96 lg:h-[32rem] mx-auto">
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 60,
                  ease: "linear"
                }}
                src="/earth.png"
                alt="Earth"
                className="w-full h-full object-contain drop-shadow-2xl"
                onError={(e) => {
                  // Fallback gradient circle if image doesn't load
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-400', 'to-blue-600', 'rounded-full');
                }}
              />
              
              {/* CTA Button positioned over Earth */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Button
                  variant="primary"
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  }
                >
                  See events
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;