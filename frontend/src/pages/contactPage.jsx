import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";

const Contact = () => {
const contactInfo = [
{
icon: <FaEnvelope className="text-blue-400" />,
label: "Email",
value: "antariksh@nitkkr.ac.in",
link: "mailto:antariksh@nitkkr.ac.in",
},
{
icon: <FaInstagram className="text-pink-500" />,
label: "Instagram",
value: "@antariksh_nitkkr",
link: "https://www.instagram.com/antariksh_nitkkr/",
},
];

  return (
    <>


      <Navbar />

      <section className="relative py-24 md:py-40 px-6 md:px-20 flex justify-center items-center">
        {/* Glowing orb effect */}
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-blue-500/20 blur-[180px] rounded-full -z-0"></div>

        {/* Glassmorphic Container */}
        <motion.div
          className="relative z-10 w-full max-w-6xl p-10 md:p-16 bg-white/10 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
            Get in <span className="text-blue-400">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* --- Contact Info --- */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {contactInfo.map((info, idx) => (
<a
    key={idx}
    href={info.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-6 bg-white/5 border border-white/20 rounded-2xl shadow-md hover:scale-105 transition-transform backdrop-blur-md hover:shadow-blue-400/30"
>
    <div className="text-3xl">{info.icon}</div>
    <div>
    <h3 className="text-lg font-semibold text-white">
        {info.label}
    </h3>
    <p className="text-blue-400 text-sm md:text-base">
        {info.value}
    </p>
    </div>
</a>
              ))}

              {/* Extra Text */}
              <p className="mt-8 text-white/80 leading-relaxed text-sm md:text-base">
                We love connecting with fellow space enthusiasts 🌌.  
                Reach out for collaboration, event participation, or astronomy discussions.  
                Let’s explore the cosmos together!
              </p>
            </motion.div>

            {/* --- Map Section --- */}
            <motion.div
              className="h-80 w-full rounded-2xl overflow-hidden shadow-md border border-white/20 backdrop-blur-md hover:shadow-blue-400/30 transition-shadow"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.635541580832!2d76.81727777544316!3d29.945690127867506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e6f9f0e8911a3%3A0x2c6c6cbbfe65e8c3!2sNational%20Institute%20of%20Technology%2C%20Kurukshetra!5e0!3m2!1sen!2sin!4v1696500456507!5m2!1sen!2sin"
width="100%"
height="100%"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
title="NIT Kurukshetra Map"
></iframe>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
