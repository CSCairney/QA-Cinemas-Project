const router = require("express").Router();
const moviesController = require("../controllers/moviesController.js");

// Read request for all movies,
router.get("/getAll", moviesController.getAllMovies);

// Read request for movie by ID,
router.get("/getById/:id", moviesController.getById);

// Read request for movie by movie title,
router.get("/getByTitle/:title", moviesController.getByTitle);

// Read request searching by movie title, director or actor,
router.get("/getByQuery/:query", moviesController.getByQuery);

// Read request for latest movies limited by number,
router.get("/getByLatest/:num", moviesController.getByLatest);

// Create request for movies,
router.post("/create", moviesController.createMovies);

// Update request for movies,
router.put("/update/:id", moviesController.updateMovies);

// Delete request for movies,
router.delete("/delete/:id", moviesController.deleteMovies);

module.exports = router; 
