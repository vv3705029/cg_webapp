const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require("../controllers/eventController");

// GET all events
router.get("/", getEvents);

// GET single event by ID
router.get("/:id", getEventById);

// CREATE new event
router.post("/", createEvent);

// UPDATE event by ID
router.put("/:id", updateEvent);

// DELETE event by ID
router.delete("/:id", deleteEvent);

module.exports = router;
