import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "About Us", path: "/about" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white/5 backdrop-blur-xl border-t border-white/20 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10 flex flex-col gap-10 md:gap-12">
        
        {/* {/section for logo/} */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.img
              src="/logo512.png"
              alt="Antariksh Logo"
              className="h-24 w-auto rounded-2xl"
              animate={{
                scale: [1, 1.05, 1],
                y: [0, -3, 0],
                filter: [
                  "drop-shadow(0px 0px 15px rgba(59,130,246,0.5))",
                  "drop-shadow(0px 0px 30px rgba(59,130,246,0.9))",
                  "drop-shadow(0px 0px 15px rgba(59,130,246,0.5))",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-center md:text-left text-sm sm:text-base">
              Exploring the cosmos with technology and creativity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
            {footerLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors duration-200 font-semibold text-lg sm:text-base"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-gray-300 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Antariksh. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Crystal Glass Glow Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/9 via-white/5 to-transparent mix-blend-overlay" />
    </footer>
  );
}
