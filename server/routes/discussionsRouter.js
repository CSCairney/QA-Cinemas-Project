const router = require("express").Router();
const discussionsController = require ("../controllers/discussionsController.js");

// Get request for discussions,
router.get("/getAll", discussionsController.getAllDiscussions );

// Get request for discussions by ID,
router.get("/getById/:id", discussionsController.getById );

// Post request for discussions,
router.post("/create", discussionsController.createDiscussions);

// Put request for discussions,
router.put("/update/:id", discussionsController.updateDiscussions);

// Delete request for discussions,
router.delete("/delete/:id", discussionsController.deleteDiscussions);

module.exports = router; 