import { useEffect, useRef, useState } from "react";
import SlidingBackground from "../components/layout/RotatingBackground";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";

// --- Upcoming Events
const upcomingEvents = [
  {
    id: 1,
    title: "AI Workshop",
    date: "10th October 2025",
    location: "NITKKR, KURUKSHETRA",
    shortDescription: "Learn about AI and Machine Learning.",
    longDescription:
      "This is a full-day workshop on AI covering basics to advanced topics, hands-on sessions, and industry applications.",
  },
  {
    id: 2,
    title: "Robotics Competition",
    date: "12th October 2025",
    location: "NITKKR, INDIA",
    shortDescription: "Showcase your robotics skills.",
    longDescription:
      "Compete with others in designing and programming robots. Prizes for winners and certificates for participants.",
  },
];

// --- TechSpardha Events
const techSpardhaEvents = [
  {
    id: 101,
    title: "TechSpardha Coding Event",
    date: "15th October 2025",
    location: "NITKKR, INDIA",
    shortDescription: "Coding challenges at TechSpardha.",
    longDescription:
      "Participate in multiple coding challenges in different domains including algorithms, web development, and AI. Winners get prizes and recognition.",
  },
  {
    id: 102,
    title: "TechSpardha Hackathon",
    date: "16th October 2025",
    location: "NITKKR, INDIA",
    shortDescription: "24-hour Hackathon at TechSpardha.",
    longDescription:
      "Teams compete to build innovative solutions to real-world problems in 24 hours. Mentorship and prizes included.",
  },
];

// --- Inline Notification Style Event Card (Upcoming Events)
const EventCard = ({ event, selectedEventId, setSelectedEventId }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        if (selectedEventId === event.id) {
          setSelectedEventId(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedEventId, event.id]);

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col p-4 bg-gray-800/70 border-l-4 border-blue-400 rounded-md shadow-md text-white"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{event.title}</p>
          <p className="text-sm text-white/80">{event.date}</p>
        </div>
        <button
          className="px-3 py-1 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-sm"
          onClick={() =>
            setSelectedEventId(selectedEventId === event.id ? null : event.id)
          }
        >
          {selectedEventId === event.id ? "Hide" : "Know More"}
        </button>
      </div>

      <AnimatePresence>
        {selectedEventId === event.id && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-2 text-sm text-white/90 bg-gray-900/70 p-2 rounded-md"
          >
            {event.longDescription}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- TechSpardha Card
const TechEventCard = ({ event, onOpen }) => (
  <motion.div
    className="flex flex-col p-4 bg-gray-800/70 border-l-4 border-blue-400 rounded-md shadow-md text-white"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold">{event.title}</p>
        <p className="text-sm text-white/80">{event.date}</p>
      </div>
      <button
        className="px-3 py-1 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-sm"
        onClick={() => onOpen(event)}
      >
        Know More
      </button>
    </div>
  </motion.div>
);

const EventPage = ({
  speedFactor = 0.05,
  starColor = [255, 255, 255],
  starCount = 3000,
}) => {
  const canvasRef = useRef(null);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [modalEvent, setModalEvent] = useState(null);

  // --- Starfield effect---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w = window.innerWidth;
    let h = window.innerHeight;

    const setCanvasExtents = () => {
      canvas.width = w;
      canvas.height = h;
    };
    setCanvasExtents();

    const makeStars = (count) => {
      const out = [];
      for (let i = 0; i < count; i++) {
        out.push({
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        });
      }
      return out;
    };

    let stars = makeStars(starCount);
    const clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

    const putPixel = (x, y, brightness) => {
      ctx.fillStyle = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${brightness})`;
      ctx.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance) => {
      for (let s of stars) {
        s.z -= distance;
        if (s.z <= 1) s.z += 1000;
      }
    };

    let prevTime;
    const tick = (time) => {
      if (!prevTime) prevTime = time;
      const elapsed = time - prevTime;
      prevTime = time;
      moveStars(elapsed * speedFactor);
      clear();

      const cx = w / 2;
      const cy = h / 2;

      for (let s of stars) {
        const x = cx + s.x / (s.z * 0.001);
        const y = cy + s.y / (s.z * 0.001);
        if (x < 0 || x >= w || y < 0 || y >= h) continue;

        const d = s.z / 1000.0;
        const b = 1 - d * d;
        putPixel(x, y, b);
      }

      requestAnimationFrame(tick);
    };

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      setCanvasExtents();
    };

    window.addEventListener("resize", handleResize);
    requestAnimationFrame(tick);

    return () => window.removeEventListener("resize", handleResize);
  }, [speedFactor, starColor, starCount]);

  return (
    <>
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <SlidingBackground />
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{
            pointerEvents: "none",
            mixBlendMode: "screen",
            backgroundColor: "transparent",
            zIndex: 1,
          }}
        />
      </div>

      {/* --- Upcoming Events */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 flex flex-col gap-12">
        <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-10">
          Upcoming Events
        </h2>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              selectedEventId={selectedEventId}
              setSelectedEventId={setSelectedEventId}
            />
          ))}
        </div>
      </section>

      {/* --- TechSpardha Events (Modal behavior) */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 flex flex-col gap-12">
        <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-10">
          TechSpardha Events
        </h2>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {techSpardhaEvents.map((event) => (
            <TechEventCard key={event.id} event={event} onOpen={setModalEvent} />
          ))}
        </div>
      </section>

      {/* --- Modal (shows TechSpardha event details) */}
      <AnimatePresence>
        {modalEvent && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalEvent(null)}
          >
            <motion.div
              className="bg-gray-900/90 border border-blue-400 rounded-xl p-6 max-w-md text-white shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-300">
                {modalEvent.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {modalEvent.date} — {modalEvent.location}
              </p>
              <p className="text-gray-200 mb-6">{modalEvent.longDescription}</p>
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-semibold"
                onClick={() => setModalEvent(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default EventPage;
