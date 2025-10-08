import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const homepageEvents = [
  {
    title: "Astro Quiz",
    description: "Test your space knowledge in our cosmic quiz challenge.",
    image: "https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Fcolor.jpg&w=3840&q=75",
    details: "Full details about Astro Quiz...",
  },
  {
    title: "Cosmic Workshop",
    description: "Hands-on experience with space tech and simulations.",
    image: "https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Fcolor.jpg&w=3840&q=75",
    details: "Full details about Cosmic Workshop...",
  },
  {
    title: "Star Night",
    description: "Experience live astronomical observations under the stars.",
    image: "https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Fcolor.jpg&w=3840&q=75",
    details: "Full details about Star Night...",
  },
];

const galleryImages = [
  "https://res.cloudinary.com/doejabjai/image/upload/v1759583989/WhatsApp_Image_2025-09-21_at_3.44.01_PM_rpprlw.jpg",
  "https://res.cloudinary.com/doejabjai/image/upload/v1759583989/WhatsApp_Image_2025-09-21_at_3.44.01_PM_rpprlw.jpg",
  "https://res.cloudinary.com/doejabjai/image/upload/v1759583989/WhatsApp_Image_2025-09-21_at_3.44.01_PM_rpprlw.jpg",
  "https://res.cloudinary.com/doejabjai/image/upload/v1759583989/WhatsApp_Image_2025-09-21_at_3.44.01_PM_rpprlw.jpg",

];

const HomeSections = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="relative w-full overflow-hidden">


      {/* --- Society and   Culture Section --- */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 flex flex-col items-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/70 to-black/90"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rings which is around there  */}
        <motion.div
          className="absolute w-[500px] h-[500px] border border-blue-400/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] border border-blue-400/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Rocket */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-24 h-24 mb-10 text-blue-400 z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          fill="currentColor"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        >
          <path d="M32 2c-3 3-6 10-6 18s3 15 6 18c3-3 6-10 6-18S35 5 32 2zm0 24a6 6 0 110-12 6 6 0 010 12z" />
          <path d="M27 43c-1 4-2 8-2 10 0 4 2 6 7 6s7-2 7-6c0-2-1-6-2-10h-10z" />
          <path d="M25 35l-5 4c-5-2-9-2-11 1 3 1 6 3 8 5 2 3 3 6 3 8 3-2 4-6 5-11l4-5zm14 0l5 4c5-2 9-2 11 1-3 1-6 3-8 5-2 3-3 6-3 8-3-2-4-6-5-11l-4-5z" />
        </motion.svg>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 z-10 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Society & Culture at <span className="text-blue-400">Antariksh</span>
        </motion.h2>

        <motion.p
          className="max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed z-10 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The vibrant community of <span className="text-blue-400 font-semibold">NIT Kurukshetra</span> stands at
          the intersection of technology and tradition. Here, ideas ignite and cultures converge — from
          innovation clubs to space societies, every student fuels the spirit of <em>Antariksh</em> through
          creativity, collaboration, and cosmic curiosity.
        </motion.p>
        <motion.div
          className="mt-12 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_6px_rgba(147,197,253,0.6)]"
          animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      
      {/* --- About Section --- */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Fcolor.jpg&w=3840&q=75"
            alt="Antariksh Intro"
            className="w-full max-w-sm md:max-w-lg rounded-3xl shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            About <span className="text-blue-400">Antariksh</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            Antariksh is the ultimate cosmic experience – combining events, workshops, and live performances 
            that bring the universe closer to you. Explore, learn, and celebrate the wonders of space with us.
          </p>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/about')}
          >
            Know More
          </Button>
        </div>
      </section>

      {/* --- Events Section-- don't change you can make changes in resources --- */}
      <motion.section
        className="px-6 md:px-20 bg-black/40 backdrop-blur-sm py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
          Featured <span className="text-blue-400">Events</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {homepageEvents.map((event, i) => (
            <motion.div
              key={event.title}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedEvent(event)}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 md:h-56 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-white/80 mb-4">{event.description}</p>
              <Button variant="primary" size="md">
                Know More
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/events')}
          >
            See More Events →
          </Button>
        </div>
      </motion.section>

      {/* --- Gallery Section -don't change you can make changes in resources --- */}
<motion.section
className="py-20 my-10 md:py-32 px-6 md:px-20 relative"
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
>
<div className="absolute inset-0 m-4 bg-blue-400/5 rounded-2xl z-0 pointer-events-none shadow-lg"></div>

<h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg relative z-10">
  Memories <span className="text-blue-400">Gallery</span>
</h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10">
  {galleryImages.map((src, i) => (
    <motion.div
      key={i}
      className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl z-0"></div>
      <img src={src} alt={`Gallery ${i + 1}`} className="relative z-10 w-full h-40 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10"></div>
    </motion.div>
  ))}
</div>

<div className="mt-6 flex justify-center items-center relative z-10">
  <Button variant="primary" size="md" onClick={() => navigate('/gallery')}>
    View More
  </Button>
</div>
</motion.section>


      {/* --- Event Modal---- add the element above --- */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold text-white mb-4">{selectedEvent.title}</h3>
              <p className="text-white/80 mb-6">{selectedEvent.details}</p>
              <Button variant="primary" size="md" onClick={() => setSelectedEvent(null)}>
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default HomeSections;
