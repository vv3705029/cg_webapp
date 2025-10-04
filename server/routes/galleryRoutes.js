const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");

// Routes
router.post("/", galleryController.createImage);
router.get("/", galleryController.getAllImages);
router.get("/:id", galleryController.getImageById);
router.put("/:id", galleryController.updateImage);


module.exports = router;
