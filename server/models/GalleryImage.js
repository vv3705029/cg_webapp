const mongoose = require("mongoose");

const GalleryImageSchema = new mongoose.Schema({
  thumbnail: { type: String, required: true },
  alt: { type: String, required: true },
  title: { type: String, required: true },
  event: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("GalleryImage", GalleryImageSchema);
