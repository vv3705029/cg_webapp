import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GraduationCap, Menu, X, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ImageFile from "../assets/images/Logo.jpg";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { userData, setUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData(null); // Clear user context
    // Optional: call backend logout API
    navigate("/login");
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, staggerChildren: 0.05 } },
  };

  const linkVariants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } };

  return (
    <nav className="bg-blue-900 backdrop-blur-md text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <motion.div whileHover={{ scale: 1.1, rotate: -10 }}>
            <img
              src={ImageFile}
              alt="Logo"
              className="h-10 w-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <div className="text-xl font-bold tracking-wide" style={{ fontFamily: "'Perpetua Titling MT', serif" }}>
            CG Club
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          {["/", "/events", "/quiz", "/gallery", "/opportunities", "/stories", "/about"].map((link, i) => {
            const names = ["Home", "Events", "Quiz", "Gallery", "Opportunities", "Stories", "About Us"];
            return (
              <motion.li key={i} whileHover={{ y: -3 }}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `pb-1 transition hover:text-yellow-300 ${
                      isActive ? "text-yellow-300 border-b-2 border-yellow-300" : ""
                    }`
                  }
                >
                  {names[i]}
                </NavLink>
              </motion.li>
            );
          })}
        </ul>

        {/* Desktop Auth/Profile */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {!userData ? (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-full bg-white text-blue-900 font-semibold hover:bg-gray-200 transition-colors"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 rounded-full bg-white text-blue-900 font-semibold hover:bg-gray-200 transition-colors"
              >
                Register
              </NavLink>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-900 focus:outline-none"
                title="Profile"
              >
                {userData.name ? userData.name[0].toUpperCase() : <User size={20} />}
              </button>
              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-white text-blue-900 rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-blue-700 px-6 py-4 space-y-4 origin-top"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.ul className="flex flex-col space-y-3 font-medium">
              {["/", "/events", "/quiz", "/gallery", "/opportunities", "/stories", "/about"].map((link, i) => {
                const names = ["Home", "Events", "Quiz", "Gallery", "Opportunities", "Stories", "About Us"];
                return (
                  <motion.li key={i} variants={linkVariants}>
                    <NavLink
                      to={link}
                      className={({ isActive }) =>
                        `block py-2 rounded-md px-3 ${
                          isActive ? "bg-yellow-400 text-blue-900 font-semibold" : ""
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {names[i]}
                    </NavLink>
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* Mobile Auth/Profile Buttons */}
            <motion.div variants={linkVariants} className="flex flex-col space-y-3 mt-4">
              {!userData ? (
                <>
                  <NavLink
                    to="/login"
                    className="w-full text-center px-4 py-2 rounded-full bg-white text-blue-900 font-semibold hover:bg-gray-200 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="w-full text-center px-4 py-2 rounded-full bg-white text-blue-900 font-semibold hover:bg-gray-200 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </NavLink>
                </>
              ) : (
                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="w-full text-center px-4 py-2 rounded-full bg-white text-blue-900 font-semibold hover:bg-gray-200 transition"
                >
                  Logout
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
