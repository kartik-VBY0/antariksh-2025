import { motion } from "framer-motion";
import Button from "../src/components/ui/Button";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center text-center z-20 px-6
                justify-center
                md:translate-y-[-10%] sm:translate-y-[-8%]"
    >
      {/* Concentric Circles Background  with increasing radius and decreasing visibility*/}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-blue-400/20"
            style={{
              width: `${200 + i * 200}px`,
              height: `${200 + i * 200}px`,
              opacity: 0.5 - i * 0.07,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      {/* Floating Astronaut */}
      <motion.img
        src="/astronaut.png"
        alt="Astronaut"
        className="hidden md:block absolute top-10 md:top-20 left-1/4  w-40 md:w-72 lg:w-72 drop-shadow-3xl"
        animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
      >
        Welcome to <span className="text-blue-400">Antariksh</span>
      </motion.h1>

      {/* Tagline for Antariksh */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-white/80 md:text-xl mt-4 max-w-xl mx-auto"
      >
        Explore the infinite universe of events, proshows, and experiences.
      </motion.p>

      {/* Glass button imported */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-8"
      >
        <Button
          variant="primary"
          size="lg"
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
          See Events
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
