import React, { useEffect, useState } from "react";
import { getMembers } from "../api";
import AboutUsCard from "../components/AboutUsCard";

const AboutUs = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers()
      .then((res) => setMembers(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 sm:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8 text-center">
        Our Team
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {members.map((member) => (
          <AboutUsCard key={member._id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
