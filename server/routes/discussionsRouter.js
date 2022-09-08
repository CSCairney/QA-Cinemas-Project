const router = require("express").Router();
const discussionsController = require ("../controllers/discussionsController.js");

// Get request for discussions,
router.get("/getAll", discussionsController.getAllDiscussions );

// Post request for discussions,
router.post("/create", discussionsController.createDiscussions);

// Put request for discussions,
router.put("/update/:id", discussionsController.updateDiscussions);

// Delete request for discussions,
router.delete("/delete/:id", discussionsController.deleteDiscussions);

module.exports = router; 