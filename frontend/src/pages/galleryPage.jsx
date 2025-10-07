import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SlidingBackground from "../components/layout/RotatingBackground";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";

const categories = ["Techspardha", "Observation Sessions", "Workshops", "Events", "Trips"];

const Gallery = () => {
const [selectedCategory, setSelectedCategory] = useState("Techspardha");
const [images, setImages] = useState({});
const [visibleImages, setVisibleImages] = useState(6);
const [loading, setLoading] = useState(true);

useEffect(() => {
setLoading(true);
fetch("/images.json")
.then((response) => {
if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
return response.json();
})
.then((data) => {
setImages(data.images);
setLoading(false);
})
.catch((error) => {
console.error("Error loading images:", error);
setLoading(false);
});
}, []);

const categoryImages = images[selectedCategory] || [];

return (
<> <SlidingBackground className="absolute inset-0 -z-10" /> <Navbar />

```
  <section className="relative py-20 md:py-32 px-6 md:px-20 flex justify-center items-center">
    <div className="relative z-10 w-full max-w-6xl p-10 md:p-16 bg-white/10 border border-white/20 rounded-3xl shadow-lg backdrop-blur-xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
        Our <span className="text-blue-400">Gallery</span>
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              selectedCategory === category
                ? "bg-blue-500 text-white border-blue-400"
                : "bg-transparent text-gray-200 border-white/30 hover:bg-white/10"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setVisibleImages(6);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center text-gray-300 py-20 text-lg">Loading images...</div>
      ) : (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {categoryImages.slice(0, visibleImages).map((img, idx) => (
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
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          {visibleImages < categoryImages.length && (
            <div className="flex justify-center mt-10">
              <button
                className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all"
                onClick={() => setVisibleImages(visibleImages + 3)}
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  </section>

  <Footer />
</>


);
};

export default Gallery;
