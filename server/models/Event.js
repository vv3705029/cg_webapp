const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  registered: { type: Number, default: 0 },
  thumbnail: { type: String },
  category: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);
