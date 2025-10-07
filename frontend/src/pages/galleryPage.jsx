import React from "react";
import { motion } from "framer-motion";
import SlidingBackground from "../components/layout/RotatingBackground";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";

// Example images array (replace with your real images)
const galleryImages = [
  "/assets/gallery1.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",
  "/assets/gallery4.jpg",
  "/assets/gallery5.jpg",
  "/assets/gallery6.jpg",
];

const Gallery = () => {
  return (
    <>
      <SlidingBackground className="absolute inset-0 -z-10" />
      <Navbar />

      <section className="relative py-20 md:py-32 px-6 md:px-20 flex justify-center items-center">
        {/* Glassmorphic Container */}
        <div className="relative z-10 w-full max-w-6xl p-10 md:p-16 bg-white/10 border border-white/20 rounded-3xl shadow-lg backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
            Our <span className="text-blue-400">Gallery</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-md border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
