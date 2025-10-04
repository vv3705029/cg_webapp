import React, { useEffect, useState } from "react";
import { getGallery } from "../api";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGallery().then(res => setImages(res.data)).catch(console.error);
  }, []);
  console.log(images)
  return (
    
    <div className="flex flex-wrap items-center justify-center mt-10 mx-auto gap-4">
      {images.map((img) => (
        <img
          key={img._id}
          src={img.thumbnail}
          alt="Event"
          className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
        />
      ))}
    </div>
  );
};

export default Gallery;
