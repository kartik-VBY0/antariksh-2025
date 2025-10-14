import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html, useTexture } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";
import SlidingBackground from "../components/layout/RotatingBackground";

// --- Categories ---
const categories = ["Techspardha", "Observation Sessions", "Workshops", "Events", "Trips"];

// --- Rotating Earth Component ---
function Earth() {
  const earthRef = useRef();
  const [texture] = useTexture(["/earth_texture.jpg"]);

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={earthRef} position={[0, 0, 0]}>
      <sphereGeometry args={[11.0, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

// --- Floating Gallery Card (Horizontal Orbit, Non-Overlapping) ---
function FloatingGalleryCard({ src, index, total, radius = 12, onClick }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const speed = 0.3; // same speed for all
    const angleOffset = (index / total) * Math.PI * 2; // even spacing
    const angle = angleOffset + clock.getElapsedTime() * speed;

    // Keep images on a horizontal orbit
    ref.current.position.x = Math.cos(angle) * radius;
    ref.current.position.y = 0; // fixed Y
    ref.current.position.z = Math.sin(angle) * radius;

    // Always face the center (Earth)
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <group ref={ref} onClick={onClick}>
      <Html zIndexRange={[0, 10]}>
        <div style={{ transform: "translate(-50%, -50%)", pointerEvents: "auto" }}>
          <motion.div
  whileHover={{ scale: 1.1 }}
  className="bg-gray-800 rounded-xl border border-blue-400 shadow-md w-80 h-80 flex items-center justify-center cursor-pointer"
>
  <img
    src={src}
    alt="Gallery"
    className="w-full h-full object-cover rounded-lg"
  />
</motion.div>

        </div>
      </Html>
    </group>
  );
}


// --- Modal ---
function GalleryModal({ src, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          key="modal"
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="bg-gray-900 p-4 rounded-2xl border border-blue-500 shadow-lg max-w-lg w-[90%]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={src} alt="Gallery" className="w-full h-auto rounded-lg mb-4" />
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Main Gallery Page ---
export default function GalleryPage() {
  const [images, setImages] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/images.json")
      .then(res => res.ok ? res.json() : Promise.reject("Failed to load"))
      .then(data => {
        setImages(data.images);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categoryImages = images[selectedCategory] || [];

  return (
    <>
      <Navbar />

      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <SlidingBackground />
      </div>

      <section className="relative py-20 md:py-32 px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          Our <span className="text-blue-400">Gallery</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 z-10 relative">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white border-blue-400"
                  : "bg-transparent text-gray-200 border-white/30 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop 3D Layout */}
        {!isMobile && !loading && (
          <div className="w-full h-[600px] md:h-[800px]">
            <Canvas camera={{ position: [0, 5, 25], fov: 60 }}>
              <ambientLight intensity={2.5} />
              <pointLight position={[10, 10, 10]} intensity={2} />
              <Stars radius={100} depth={80} count={5000} factor={4} saturation={0} fade speed={1} />
              <Earth />

              {categoryImages.map((src, i) => (
                <FloatingGalleryCard
                  key={i}
                  src={src}
                  index={i}
                  total={categoryImages.length}
                  radius={10}
                  onClick={() => setSelectedImage(src)}
                />
              ))}

              <OrbitControls
                enableZoom={false}
                enableRotate={true}
                enablePan={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2} // lock vertical rotation
              />
            </Canvas>
          </div>
        )}

        {/* Mobile Layout */}
        {isMobile && !loading && (
          <section className="flex flex-col items-center w-full px-4 py-6 space-y-6 bg-black/80 backdrop-blur-sm">
            {categoryImages.map((src, idx) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedImage(src)}
                className="bg-gray-800/90 p-4 rounded-2xl border border-blue-400 shadow-lg w-full max-w-sm cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img src={src} alt={`Gallery ${idx}`} className="w-full h-32 object-cover rounded-lg mb-2" />
              </motion.div>
            ))}
          </section>
        )}

        {loading && <div className="text-white text-center py-32">Loading Images...</div>}
      </section>

      <GalleryModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      <Footer />
    </>
  );
}