import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";

const LaunchPadPage = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(300); // in vh
  const [motionRange, setMotionRange] = useState({ end: 0.7, offset: 20 }); // responsive motion config

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const res = await fetch(
          "https://ll.thespacedevs.com/2.0.0/launch/upcoming/?limit=6"
        );
        const data = await res.json();
        setLaunches(data.results || []);
      } catch (err) {
        console.error("Error fetching launches:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLaunches();
  }, []);

  // ✅ Responsive rocket movement based on container height
  useEffect(() => {
    const updateScrollDistance = () => {
      const vh = window.innerHeight;
      const totalHeight = containerRef.current?.scrollHeight || 0;

      // Convert pixel scrollable distance to vh (approx)
      const vhDistance = (totalHeight / vh) * 100;

      // Slightly less than full to keep rocket visible at the end
      setScrollDistance(vhDistance * 0.9);
    };

    updateScrollDistance();
    window.addEventListener("resize", updateScrollDistance);
    return () => window.removeEventListener("resize", updateScrollDistance);
  }, []);

  // ✅ Adjust motion speed and offset by screen size
  useEffect(() => {
    const updateMotionRange = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // 📱 Mobile
        setMotionRange({ end: 0.3, offset: 16 }); // moves faster
      } else if (width < 1024) {
        // 💻 Tablet
        setMotionRange({ end: 0.3, offset: 15 });
      } else {
        // 🖥️ Desktop
        setMotionRange({ end: 0.3, offset: 25 }); // slower, smoother
      }
    };

    updateMotionRange();
    window.addEventListener("resize", updateMotionRange);
    return () => window.removeEventListener("resize", updateMotionRange);
  }, []);

  const { scrollYProgress } = useScroll();

 const width = typeof window !== "undefined" ? window.innerWidth : 1200;

// Adjust multiplier per screen
let distanceMultiplier = 1; // default (desktop)
if (width < 640) {
  distanceMultiplier = 1.2; // 📱 mobile → faster
} else if (width < 1024) {
  distanceMultiplier = 1; // 💻 tablet → medium
}

// Then use it in your transform:
const rocketY = useTransform(
  scrollYProgress,
  [0, motionRange.end],
  ["0vh", `${scrollDistance * distanceMultiplier + motionRange.offset}vh`]
);


  const lineHeight = useTransform(
    scrollYProgress,
    [0, motionRange.end],
    ["0%", `${100 * distanceMultiplier}%`]
  );

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="relative py-24 text-center bg-gradient-to-b from-[#01010f] via-[#02021c] to-[#000010]">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🚀 Upcoming Launch Timeline
        </motion.h1>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-4">
          Scroll down to follow the rocket as it travels through upcoming
          missions.
        </p>
      </section>

      {/* TIMELINE SECTION */}
      <section
        ref={containerRef}
        className="relative min-h-[300vh] px-4 md:px-16 bg-[#02021a] overflow-hidden"
      >
        {/* Central glowing timeline */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-600 opacity-40"></div>

        {/* Dynamic glowing progress line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_25px_rgba(59,130,246,0.8)] rounded-full origin-top"
        ></motion.div>

        {/* 🚀 Rocket (moves smoothly with line, mobile friendly) */}
        <motion.div
          style={{ y: rocketY }}
          className="absolute left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex justify-center items-center shadow-[0_0_25px_rgba(59,130,246,0.9)]"
        >
          <RocketLaunchIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] rotate-[135deg]" />
        </motion.div>

        {/* Launch cards */}
        <div className="relative max-w-6xl mx-auto mt-40 space-y-40">
          {loading ? (
            <p className="text-center text-white/80 text-lg animate-pulse">
              Loading launches...
            </p>
          ) : (
            launches.map((launch, i) => (
              <motion.div
                key={launch.id}
                className={`relative md:w-1/2 ${
                  i % 2 === 0 ? "ml-auto" : "mr-auto"
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#0b1120]/90 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all shadow-[0_0_25px_rgba(59,130,246,0.3)] backdrop-blur-xl">
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2">
                    {launch.name}
                  </h3>
                  <p className="text-white/80 mb-1">
                    <span className="text-cyan-300 font-medium">Date:</span>{" "}
                    {new Date(launch.net).toLocaleString()}
                  </p>
                  <p className="text-white/80 mb-1">
                    <span className="text-cyan-300 font-medium">Rocket:</span>{" "}
                    {launch.rocket?.configuration?.name || "Unknown"}
                  </p>
                  <p className="text-white/80">
                    <span className="text-cyan-300 font-medium">Location:</span>{" "}
                    {launch.pad?.name || "Unknown"}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LaunchPadPage;
