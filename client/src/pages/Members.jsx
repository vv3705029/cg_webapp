import React, { useEffect, useState } from "react";
import { getMembers } from "../api";

const AboutUs = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then(res => setMembers(res.data)).catch(console.error);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {members.map((member) => (
          <div key={member._id} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-600"
            />
            <h3 className="font-semibold mt-2">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
