import React from "react";
import { useNavigate } from "react-router-dom";
// Import motion from framer-motion for animations
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  // Staggered animation for the hero section content
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animate children with a 0.2s delay between them
      },
    },
  };

  // Animation for individual items within the hero section
  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // A more dynamic animation for sections that appear on scroll
  const scrollSectionVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // A custom ease for a satisfying pop effect
      },
    },
  };

  return (
    <div className="bg-gray-50 px-6 md:px-16 lg:px-24 py-12 space-y-16 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="text-center bg-white shadow-lg rounded-2xl py-12 px-6 border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 tracking-wide"
          variants={heroItemVariants}
        >
          CAREER GUIDANCE CLUB
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-6"
          variants={heroItemVariants}
        >
          Welcome to your launchpad for professional growth and success at NIT
          AP.
        </motion.p>
        <motion.div variants={heroItemVariants}>
          <motion.button
            onClick={() => navigate("/quiz")}
            className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-full shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }} // Corresponds to blue-800
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Start a Quiz!
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollSectionVariants}
      >
        <div className="md:w-3/4 text-left">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            The Career and Guidance Club at NIT Andhra Pradesh is dedicated to
            empowering every student with the clarity, skills, and resources
            needed to achieve their professional aspirations. We believe that
            career success is not just about placements, but about making
            informed, fulfilling choices. We strive to create a holistic
            ecosystem of mentorship, skill development, and industry exposure,
            ensuring our students are not just job-ready, but{" "}
            <span className="font-semibold text-blue-700">future-ready</span>.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center mt-6 md:mt-0">
          <motion.span
            className="text-yellow-400 text-6xl"
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            ⚡
          </motion.span>
        </div>
      </motion.section>

      {/* Motivational Fuel */}
      <motion.section
        className="bg-white shadow-lg rounded-2xl py-12 text-center border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollSectionVariants}
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Our Mission
        </h2>
        <p className="italic text-gray-600 text-lg">
          To create a vibrant, student-led platform that equips NIT
          Andhra Pradesh students and surrounding communities with the
          knowledge, exposure, and mentorship needed for informed career
          decisions-through structured guidance, engaging workshops,
          professional interactions, and impactful outreach supported by
          well-designed informational materials.
        </p>
        
        <p className="mt-2 text-gray-500 font-medium">- Dr. Shrikanth Allamshetty</p>
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-2xl py-12 text-center border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollSectionVariants}
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Motivational Fuel
        </h2>
        <p className="italic text-gray-600 text-lg">
          "The best way to predict the future is to create it."
        </p>
       
      </motion.section>
    </div>
  );
};

export default Home;
