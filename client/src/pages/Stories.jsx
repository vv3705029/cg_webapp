import React, { useEffect, useState } from "react";
import { getStories } from "../api";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories().then(res => setStories(res.data)).catch(console.error);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {stories.map((story) => (
        <div key={story._id} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-700">{story.title}</h3>
          <p className="text-gray-600 mt-2">{story.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
