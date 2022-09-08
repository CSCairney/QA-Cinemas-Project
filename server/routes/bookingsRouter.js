const router = require("express").Router();
const bookingsController = require("../controllers/bookingsController.js");

// Get request for bookings,
router.get("/getAll", bookingsController.getAllBookings);

// Get request for bookings by ID,
router.get("/getById/:id", bookingsController.getById );

// Post request for bookings,
router.post("/create", bookingsController.createBookings );

// Put request for bookings,
router.put("/update/:id", bookingsController.updateBookings);

// Delete request for bookings,
router.delete("/delete/:id", bookingsController.deleteBookings);

module.exports = router; 