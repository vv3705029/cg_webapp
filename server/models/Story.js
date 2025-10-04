const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  currentRole: { type: String, required: true },
  company: { type: String, required: true },
  graduationYear: { type: String, required: true },
  branch: { type: String, required: true },
  story: { type: String, required: true },
  thumbnail: { type: String },
  achievement: { type: String, required: true },
  industry: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Story", StorySchema);
