const GalleryImage = require("../models/GalleryImage");

// Create new gallery image
exports.createImage = async (req, res) => {
  try {
    const newImage = new GalleryImage(req.body);
    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all gallery images
exports.getAllImages = async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single image by ID
exports.getImageById = async (req, res) => {
  try {
    const image = await GalleryImage.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Image not found" });
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update image by ID
exports.updateImage = async (req, res) => {
  try {
    const updatedImage = await GalleryImage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedImage) return res.status(404).json({ message: "Image not found" });
    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

