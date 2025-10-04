import React from "react";
import { Link } from "react-router-dom";
// Import icons for social media links
import { Linkedin, Instagram, Twitter, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-3 text-yellow-300">Career & Guidance Club</h2>
          <p className="text-gray-300 text-sm">
            Empowering students of NIT Andhra Pradesh with guidance, mentorship,
            and opportunities to achieve career success and holistic growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link to="/events" className="hover:text-yellow-400 transition-colors">Events</Link></li>
            <li><Link to="/quiz" className="hover:text-yellow-400 transition-colors">Quiz</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-400 transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">NIT Andhra Pradesh, Tadepalligudem</p>
          <p className="text-gray-300 text-sm">Email: <a href="mailto:careerguidance@nitandhra.ac.in" className="hover:text-yellow-400 transition-colors">careerguidance@nitandhra.ac.in</a></p>
          <p className="text-gray-300 text-sm">Phone: +91 XXXXXXXXXX</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <motion.a href="#" whileHover={{ scale: 1.2, y: -2 }} className="hover:text-yellow-400 transition-colors">
              <Linkedin size={22} />
            </motion.a>
            <motion.a href="https://www.instagram.com/careerguidance_nitandhra/?igsh=ZnJhYzVhenMyajVh#" whileHover={{ scale: 1.2, y: -2 }} className="hover:text-yellow-400 transition-colors">
              <Instagram size={22} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -2 }} className="hover:text-yellow-400 transition-colors">
              <Twitter size={22} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -2 }} className="hover:text-yellow-400 transition-colors">
              <Globe size={22} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 text-center py-4 text-sm text-gray-400 border-t border-blue-800">
        © {new Date().getFullYear()} Career & Guidance Club, NIT Andhra Pradesh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

