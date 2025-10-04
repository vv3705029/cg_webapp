const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");

// Routes
router.get("/", memberController.getMembers);        // GET all members (sorted by order)
router.get("/:id", memberController.getMember);      // GET member by ID
router.post("/", memberController.createMember);     // CREATE new member
router.put("/:id", memberController.updateMember);   // UPDATE member by ID
router.delete("/:id", memberController.deleteMember);// DELETE member by ID

module.exports = router;
