import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";
import Button from "../../components/ui/Button";
import { FileDown, Eye } from "lucide-react";

const newsletterTeam = [
  { name: "Diksha Dutta", role: "Newsletter Head", image: "" },
  { name: "Raghvi Gupta", role: "Editor", image: "" },
  { name: "Archit Chhajed", role: "Content Lead", image: "" },
  { name: "Bhavya Arya", role: "Creative Designer", image: "" },
];

const NewsletterPage = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all PDFs
  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const res = await axios.get("http://localhost:3020/api/pdfs/all");
        setPdfs(res.data);
      } catch (err) {
        console.error("Failed to fetch PDFs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPdfs();
  }, []);

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
          Newsletter <span className="text-blue-400">Team</span>
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

      {/* ✨ Latest Newsletters Section */}
      <section className="py-16 px-6 md:px-16 bg-black/80 backdrop-blur-sm rounded-3xl mx-4 md:mx-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest Newsletters
        </motion.h2>

        {loading ? (
          <p className="text-white text-center text-lg">Loading PDFs...</p>
        ) : pdfs.length === 0 ? (
          <p className="text-white text-center text-lg">No newsletters uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pdfs.map((pdf, i) => (
              <motion.div
                key={pdf._id || i}
                className="bg-black/60 backdrop-blur-md p-6 rounded-2xl text-center text-white shadow-lg hover:shadow-blue-400/40 transition-transform transform hover:scale-105 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
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
                    className="flex items-center gap-2"
                  >
                    <Eye size={16} /> View
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => window.open(pdf.url, "_blank")}
                    className="flex items-center gap-2"
                  >
                    <FileDown size={16} /> Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* What is Newsletter */}
      <section className="py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 bg-black/80 backdrop-blur-sm rounded-3xl mx-4 md:mx-16">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331941.png"
            alt="Newsletter"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
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

      {/* Meet the Team */}
      <section className="py-16 px-6 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet the Postholders
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newsletterTeam.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-white bg-black/60 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-blue-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="w-20 h-20 mb-2">
                <img
                  src={
                    member.image ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-2 border-blue-400"
                />
              </div>
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-blue-300 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 md:px-16 flex flex-col items-center text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Follow Us on Instagram
        </motion.h2>
        <motion.p
          className="text-white/80 mb-6 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get monthly updates, creative insights, and behind-the-scenes of Antariksh Newsletter.
        </motion.p>
        <Button
          variant="primary"
          size="lg"
          onClick={() =>
            window.open(
              "https://www.instagram.com/antariksh_nitkkr/?hl=en",
              "_blank"
            )
          }
          className="animate-pulse"
        >
          Visit Instagram
        </Button>
      </section>

      <Footer />
    </>
  );
};

export default NewsletterPage;
