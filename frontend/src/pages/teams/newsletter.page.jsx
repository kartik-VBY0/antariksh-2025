import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";
import Button from "../../components/ui/Button";
import { FileDown, Eye, Zap } from "lucide-react"; // Added Zap icon

const newsletterTeam = [
  { name: "Diksha Dutta", role: "Newsletter Head", image: "" },
  { name: "Raghvi Gupta", role: "Editor", image: "" },
  { name: "Archit Chhajed", role: "Content Lead", image: "" },
  { name: "Bhavya Arya", role: "Creative Designer", image: "" },
];

// List of PDFs in public folder
const pdfs = [
  { title: "Newsletter Oct 2024", url: "/EDITION 02 THE COSMIC EXPRESS.pdf" },
  { title: "Newsletter Aug 2023", url: "/Edition 01 The Cosmic Express_compressed.pdf" },
];

// Example data for the new "Best of the Best" section
const cosmicHighlight = {
  title: "The Stellar Nursery: Best Feature Article",
  excerpt: "A deep dive into the Orion Nebula, where stars are born and cosmic dust clouds swirl in breathtaking complexity. Read the feature that captivated our readers!",
  issue: "August 2023 Edition",
  link: "/Edition 01 The Cosmic Express_compressed.pdf", // Link to the specific issue
};

// Animation variants for the highlight card
const cardVariants = {
  initial: { opacity: 0, scale: 0.8, rotateX: 90 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.2
    }
  },
};

const NewsletterPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-16 flex flex-col items-center text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Antariksh <span className="text-blue-400">Newsletter</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl text-white/90 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The creative minds curating Antariksh’s monthly cosmic digest — bringing space closer to you through stories, visuals, and events.
        </motion.p>
      </section>

      {/* Latest Newsletters */}
      <section className="py-16 px-6 md:px-16 bg-black/80 backdrop-blur-sm rounded-3xl mx-4 md:mx-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest <span className="text-blue-400">Editions</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"> {/* Adjusted grid for more balance */}
          {pdfs.map((pdf, i) => (
            <motion.div
              key={i}
              className="bg-black/60 backdrop-blur-md p-6 rounded-2xl text-center text-white shadow-lg hover:shadow-blue-400/40 transition-transform transform hover:scale-[1.02] flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }} // More pronounced initial Y offset
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} // Ensures animation runs only once when visible
              transition={{ duration: 0.6, delay: i * 0.2 }} // Increased delay for a cascade effect
            >
              <h3 className="text-xl font-bold mb-3">{pdf.title}</h3>

              {/* PDF Preview */}
              <div className="w-full h-64 mb-4 overflow-hidden rounded-lg border border-white/20">
                <iframe
                  src={`${pdf.url}#view=fitH`}
                  title={pdf.title}
                  className="w-full h-full"
                />
              </div>

              <div className="flex justify-center gap-4 mt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.open(pdf.url, "_blank")}
                  className="flex items-center gap-2 hover:bg-blue-400/20"
                >
                  <Eye size={16} /> View
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = pdf.url;
                    link.download = pdf.title;
                    link.click();
                  }}
                  className="flex items-center gap-2"
                >
                  <FileDown size={16} /> Download
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      ---



      ---

      {/* Newsletter Info */}
      <section className="py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 bg-black/80 backdrop-blur-sm rounded-3xl mx-4 md:mx-16 my-8">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://res.cloudinary.com/doejabjai/image/upload/v1760505256/unnamed_bm3kax.jpg"
            alt="Newsletter"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-blue-400/50"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What is the Newsletter Team?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            The Newsletter Team is responsible for crafting engaging content, compiling event highlights,
            publishing insightful articles, and creating visually stunning layouts. We aim to keep the
            Antariksh community informed and inspired every month.
          </p>
        </motion.div>
      </section>

      ---

      {/* Meet the Team - Renamed to Editorial Board */}
      <section className="py-16 px-6 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Meet the <span className="text-blue-400">Editorial Board</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newsletterTeam.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-white bg-black/60 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-blue-400/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }} // Added scale animation
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.15 }} // Smoother, faster transition
            >
              <div className="w-24 h-24 mb-3"> {/* Slightly larger image area */}
                <img
                  src={
                    member.image ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-xl"
                />
              </div>
              <h4 className="font-bold text-xl">{member.name}</h4>
              <p className="text-blue-300 text-base">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewsletterPage;