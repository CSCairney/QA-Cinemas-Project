const router = require("express").Router();
const discussionsController = require("../controllers/discussionsController.js");

// Read request for all discussions,
router.get("/getAll", discussionsController.getAllDiscussions);

// Read request for discussions by ID,
router.get("/getById/:id", discussionsController.getById);

// Read request for discussions by user name,
router.get("/getByUser/:user", discussionsController.getByUser);

// Create request for discussions,
router.post("/create", discussionsController.createDiscussions);

// Update request for discussions,
router.put("/update/:id", discussionsController.updateDiscussions);

// Delete request for discussions,
router.delete("/delete/:id", discussionsController.deleteDiscussions);

module.exports = router; 