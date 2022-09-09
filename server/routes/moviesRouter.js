const router = require("express").Router();
const moviesController = require("../controllers/moviesController.js");

// Get request for movies,
router.get("/getAll", moviesController.getAllMovies);

// Get request for movie by ID,
router.get("/getById/:id", moviesController.getById );

// Get request for movie by movie title,
router.get("/getByTitle/:title", moviesController.getByTitle );

// Post request for movies,
router.post("/create", moviesController.createMovies);

// Put request for movies,
router.put("/update/:id", moviesController.updateMovies);

// Delete request for movies,
router.delete("/delete/:id", moviesController.deleteMovies);

module.exports = router; 
