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
      <section className="  px-6 md:px-20 bg-black/40 backdrop-blur-sm">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
          Featured <span className="text-blue-400">Events</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {homepageEvents.map((event, i) => (
            <motion.div
              key={event.title}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
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
      </section>

      {/* --- Gallery Section -don't change you can make changes in resources --- */}
<section className="py-20 my-10 md:py-32 px-6 md:px-20 relative">
  {/* Transparent box wrapping entire section */}
  <div className="absolute inset-0 m-4 b bg-blue-400/10 rounded-2xl z-0 pointer-events-none shadow-lg"></div>

  <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg relative z-10">
    Memories <span className="text-blue-400">Gallery</span>
  </h2>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10">
    {galleryImages.map((src, i) => (
      <motion.div
        key={i}
        className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={src}
          alt={`Gallery ${i + 1}`}
          className="w-full h-40 object-cover"
        />
      </motion.div>
    ))}
  </div>

  <div className="mt-6 flex justify-center items-center relative z-10">
    <Button
      variant="primary"
      size="md"
      onClick={() => navigate('/gallery')}
    >
      View More
    </Button>
  </div>
</section>


      {/* --- Event Modal --- */}
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
