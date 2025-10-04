const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // e.g., faculty, secretary, co-sec
  department: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: String },
  thumbnail: { type: String },
  roleCategory: { type: String, required: true }, // for sorting
  order: { type: Number, default: 0 }, // sort order
}, { timestamps: true });

module.exports = mongoose.model("Member", MemberSchema);
