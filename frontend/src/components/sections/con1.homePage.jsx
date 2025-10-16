import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center z-20 px-6 overflow-hidden">

      {/* Concentric Circles Background */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-blue-400/20"
            style={{
              width: `${200 + i * 200}px`,
              height: `${200 + i * 200}px`,
              opacity: 0.5 - i * 0.07,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Half Earth Background */}
<div className="absolute inset-0 -z-10">
  <img
    src="https://wallpaperaccess.com/full/19617.jpg"
    alt="Half Earth"
    className="w-full h-full object-cover opacity-50 pointer-events-none"
  />
</div>


      {/* Floating Astronaut */}
{/* Astronaut floating around */}
{/* <motion.img
  src="/aaastronaut.png"
  alt="Astronaut"
  className="hidden xl:block absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 w-80 md:w-[28rem] lg:w-[32rem] drop-shadow-3xl"
  animate={{
    x: [0, 200, -150, 100, 0], // horizontal floating
    y: [0, -100, 50, -80, 0],  // vertical floating
    rotate: [-5, 10, -10, 5, -5],
  }}
  transition={{
    repeat: Infinity,
    duration: 50, // slower full-space motion
    ease: "easeInOut",
  }}
/> */}

{/* ISS floating around */}
{/* <motion.img
  src="/iss.png"
  alt="ISS"
  className="hidden xl:block absolute top-20 left-[10%] w-60 md:w-[22rem] lg:w-[26rem] drop-shadow-3xl"
  animate={{
    x: [0, -150, 100, -200, 0],
    y: [0, 120, -100, 80, 0],
    rotate: [-3, 8, -8, 3, -3],
  }}
  transition={{
    repeat: Infinity,
    duration: 50,
    ease: "easeInOut",
  }}
/> */}





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

      {/* Glass Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-8"
      >
        <Button onClick={() => navigate("/events")} variant="primary" size="lg" icon={
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
