import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";

// --- Data ---
const members = [
  { name: "Rahul Gupta", role: "Team Lead", img: "/assets/team/rahul.jpg" },
  { name: "Sneha Patel", role: "Quiz Coordinator", img: "/assets/team/sneha.jpg" },
  { name: "Aryan Mehta", role: "Research Head", img: "/assets/team/aryan.jpg" },
  { name: "Riya Sharma", role: "Creative Writer", img: "/assets/team/riya.jpg" },
];

const missions = [
  {
    title: "Cosmic Trivia",
    desc: "Weekly challenges decoding mysteries of galaxies, planets, and fundamental physics. Test your deep-space knowledge!",
    icon: "🌌",
  },
  {
    title: "AstroLeague",
    desc: "Inter-college battle of brains where only the brightest stars compete for the ultimate galactic prize.",
    icon: "🚀",
  },
  {
    title: "The Space Riddle",
    desc: "Mind-bending quiz puzzles and lateral thinking questions inspired by celestial wonders and history.",
    icon: "🪐",
  },
];

// --- Animation Variants ---
const sectionTitleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const memberCardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 15 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

// --- Component ---
export default function KhagolQuizzingPage() {
  const canvasRef = useRef(null);

  // Starfield Effect - Improved with Ref and Resize Handling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const starCount = window.innerWidth < 768 ? 100 : 250; // Fewer stars on mobile

    const initializeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    initializeCanvas();

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      // 'z' creates the parallax effect, controlling speed and size
      z: Math.random() * 0.9 + 0.1, 
    }));

    const animate = () => {
      // Create a long tail effect by clearing only partially
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        // Star movement from right to left, faster for stars with higher z (closer)
        s.x -= 0.5 * s.z; 
        if (s.x < 0) {
          s.x = canvas.width;
          s.y = Math.random() * canvas.height;
        }
        
        const size = 1.5 * s.z;
        ctx.fillStyle = `rgba(200, 255, 255, ${s.z})`;
        ctx.beginPath();
        // Draw the star with a subtle tail for speed effect
        ctx.fillRect(s.x, s.y, size, size * 0.5); 
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      initializeCanvas();
      // Re-initialize stars if necessary, but for simplicity, we just resize canvas
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen  text-white overflow-hidden">
      <Navbar />

      {/* Animated Starfield */}
      <canvas ref={canvasRef} id="starfield" className="fixed top-0 left-0 w-full h-full z-0"></canvas>

      {/* Nebula Glow - Increased intensity and blur for a deeper space feel */}
      <div className="fixed inset-0 bg-gradient-to-b from-cyan-900/50 via-black/80 to-black opacity-90 z-0 blur-3xl"></div>
      <div className="relative z-10"> {/* Container for all content to sit above the starfield */}

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center pt-40 pb-24 px-6 min-h-[50vh]">
          <motion.h1
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-300 to-violet-400 text-transparent bg-clip-text drop-shadow-2xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            Khagol Quizzing <span className="block md:inline">Mission Control</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-3xl text-gray-300 text-xl md:text-2xl font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
          >
            Where curiosity meets cosmos. We **decode the secrets of the universe** — challenging minds and igniting the spirit of exploration, one quiz at a time.
          </motion.p>
        </section>

        {/* Missions Section */}
        <section className="px-6 md:px-16 py-20">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-cyan-300 tracking-wider"
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Our Galactic Missions 🚀
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {missions.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ 
                  scale: 1.07, 
                  boxShadow: "0 0 40px rgba(52, 211, 235, 0.6)", // Cyan glow on hover
                  transition: { duration: 0.3 } 
                }}
                className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border-t border-l border-cyan-400/30 backdrop-blur-md shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-6xl mb-4 text-center">{m.icon}</div>
                <h3 className="text-3xl font-bold text-cyan-300 mb-3 text-center">{m.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed text-center">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section - Improved Animation */}
        <section className="px-6 md:px-16 py-20">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-violet-400 tracking-wider"
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Meet Our Stellar Crew 🌠
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {members.map((m, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={memberCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ 
                    scale: 1.1, 
                    rotateY: 5, 
                    rotateZ: i % 2 === 0 ? 2 : -2, // Subtle tilt for personality
                    y: -10,
                    transition: { duration: 0.3 } 
                }}
                className="bg-gradient-to-br from-black/40 to-cyan-500/10 border border-violet-400/30 rounded-3xl p-6 text-center backdrop-blur-md shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-xs"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-violet-400/50 shadow-lg hover:border-violet-300 transition-colors">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" // Added image effect
                  />
                </div>
                <h3 className="text-xl font-bold text-cyan-300">{m.name}</h3>
                <p className="text-md text-gray-400 font-medium">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Join Section - CTA as a "Warp Drive" Button */}
        <section className="text-center py-24 px-6 bg-gradient-to-t from-cyan-900/40 to-transparent">
          <motion.h3
            className="text-4xl font-extrabold text-cyan-300 mb-4 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Initiate Warp Drive: Join Our Quest!
          </motion.h3>
          <motion.p
            className="text-gray-400 mb-8 max-w-xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to challenge your cosmic IQ and navigate the deep space of knowledge? Your mission begins now.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ 
                scale: 1.15, // More aggressive hover scale
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.8)",
                transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black font-extrabold px-10 py-4 rounded-full shadow-2xl shadow-cyan-500/50 transition-all duration-300 text-lg tracking-wider border-2 border-transparent hover:border-cyan-400"
          >
            Launch Your Inquiry 🌌
          </motion.a>
        </section>

        <Footer />
      </div>
    </div>
  );
}