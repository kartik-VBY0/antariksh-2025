import React from "react";
import { motion } from "framer-motion";
import SlidingBackground from "../components/layout/RotatingBackground";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";

const teamMembers = [
{
name: "Aarav Sharma",
role: "President",
image: "",
},
{
name: "Diya Patel",
role: "Vice President",
image: "",
},
{
name: "Rohan Mehta",
role: "Technical Head",
image: "",
},
{
name: "Sneha Iyer",
role: "Event Coordinator",
image: "",
},
{
name: "Aditya Nair",
role: "Outreach Lead",
image: "",
},
{
name: "Kavya Reddy",
role: "Creative Lead",
image: "",
},
{
name: "Yash Verma",
role: "Social Media Manager",
image: "",
},
];

const About = () => {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <SlidingBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black/70 to-black/90"></div>
      </div>

<Navbar />

      {/* --- About Section --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-center gap-12 overflow-hidden">
        {/* Floating glow */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 blur-[180px] rounded-full -z-0"></div>

        {/* Left: Text */}
        <motion.div
          className="relative z-10 w-full lg:w-1/2 p-10 md:p-12 bg-white/10 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left text-white drop-shadow-lg">
            About <span className="text-blue-400">Antariksh Society</span>
          </h2>

          <div className="space-y-6 text-white/90 text-lg md:text-xl leading-relaxed">
            <p>
              <span className="text-blue-400 font-semibold">Antariksh</span> is the official{" "}
              <span className="font-semibold">Space & Astronomy Society</span> of NIT Kurukshetra — 
              a student-driven community that celebrates curiosity about the cosmos.
            </p>

<p>
    We organize <span className="text-blue-300">stargazing nights</span>,{" "}
    <span className="text-blue-300">celestial observations</span>, and{" "}
    <span className="text-blue-300">ISRO mission tracking sessions</span>, creating a
    platform for space enthusiasts to connect and explore the wonders of the universe.
</p>

            <p>
              From deep-space discussions to astrophotography workshops, we bring together students
              who share a passion for the stars, science, and discovery.
            </p>

            <p>
              Our mission is simple — look up, learn, and explore the cosmos together.
            </p>
          </div>
        </motion.div>

        {/* Right: Visual */}
<motion.div
  className="relative z-10 lg:w-1/2 flex justify-center"
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <img
    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnNrbTlxdWtyZW5ycDNkem1kejNvYmd6bjg3cTVjOHM0bDRveHEwcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4yB1PfomOry8dJ8vdT/giphy.gif" // Rocket launch GIF
    alt="Rocket Launch Illustration"
    className="w-full max-w-md rounded-3xl shadow-2xl border border-white/20"
  />
</motion.div>
      </section>

      {/* --- Our Team Section (Auto-Scroll) --- */}
      <section className="relative py-24 px-6 md:px-20 text-center overflow-hidden">
        <motion.h3
          className="text-4xl font-extrabold text-blue-400 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Postholder
        </motion.h3>

        {/* Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10"
            animate={{
              x: ["0%", "-50%"], // scroll left halfway
            }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {/* Duplicate list for seamless infinite loop */}
            {[...teamMembers, ...teamMembers].map((member, index) => (
<div
key={index}
className="flex flex-col items-center text-white bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg min-w-[200px] hover:shadow-blue-400/30 transition-shadow"
>
<div className="relative w-28 h-28 mb-4">
    <img
    src={member.image}
    alt={member.name}
    className="w-full h-full rounded-full border-2 border-blue-400 object-cover"
    />
    <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-md"></div>
</div>
<h4 className="text-lg font-semibold">{member.name}</h4>
<p className="text-blue-300 text-sm mt-1">{member.role}</p>
</div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
