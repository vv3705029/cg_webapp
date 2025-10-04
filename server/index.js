const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

const eventRoutes = require("./routes/eventRoutes");
const memberRoutes = require("./routes/memberRoutes");
// const storyRoutes = require("./routes/storyRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const quizRoutes = require("./routes/quizRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "https://cg-webapp.vercel.app", // Vite frontend
  credentials: true,
}));
app.use(express.json());

// ✅ Routes
app.use("/api/events", eventRoutes);
app.use("/api/members", memberRoutes);
// app.use("/api/stories", storyRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/users", userRoutes);

// ✅ Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.redirect("https://cg-webapp.vercel.app/");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
