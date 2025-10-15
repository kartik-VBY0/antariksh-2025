import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import BlackHole from '../3d/BlackHole';
import Robot from '../3d/Robot';
import Spaceship from '../3d/Spaceship'; // new spaceship component
import Telescope from '../3d/Telescope';
import Robot2 from '../3d/Robot2';
import Meteor from '../3d/Meteor';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-center z-20 px-6 overflow-hidden">

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

      {/* Robot on left */}
      <Robot />

      {/* Spaceship on top-right */}
      <Spaceship />

      {/* Title + Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-[25vh]"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
          Welcome to <span className="text-blue-400">Antariksh</span>
        </h1>

        <p className="text-white/80 md:text-xl mt-4 max-w-xl mx-auto">
          To the infinity and far beyond.
        </p>
      </motion.div>

      {/* Glass Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-6"
      >
        <Button
          onClick={() => navigate("/events")}
          variant="primary"
          size="lg"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          }
        >
          See Events
        </Button>
      </motion.div>

      {/* Black Hole 3D */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="w-full mt-10"
      >
        <BlackHole />
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1 }}
  className="absolute inset-0 pointer-events-none z-10"
>
  <Meteor />
</motion.div>


      </motion.div>
      {/* Robot 2 (below Black Hole, right side) */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.3, duration: 1 }}
>
  <Robot2 />
</motion.div>

      {/*Telescope*/}
{/* Telescope below Black Hole */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.4, duration: 1 }}
  className="absolute left-5 top-[80%] w-52 h-52 pointer-events-none"
>
  <Telescope />
</motion.div>

    </div>

    
  );
};

export default HeroSection;
