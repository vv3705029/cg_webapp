import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ image, title, description }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow text-sm max-w-80">
            <img className="rounded-md max-h-40 w-full object-cover" src={image} alt="officeImage" />
            <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">{title}</p>
            <p className="text-gray-500 mt-3 ml-2">{description}</p>
            <button type="button" className="bg-indigo-600 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white">Learn More</button>
        </div>
  );
};

export default Card;
