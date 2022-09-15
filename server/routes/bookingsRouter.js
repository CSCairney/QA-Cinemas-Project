const router = require("express").Router();
const bookingsController = require("../controllers/bookingsController.js");

// Read request for all bookings,
router.get("/getAll", bookingsController.getAllBookings);

// Read request for bookings by ID,
router.get("/getById/:id", bookingsController.getById);

// Create request for bookings,
router.post("/create", bookingsController.createBookings);

// Update request for bookings,
router.put("/update/:id", bookingsController.updateBookings);

// Update request for bookings using last ID,
router.put("/updateLast", bookingsController.updateLastBookings);

// Delete request for bookings,
router.delete("/delete/:id", bookingsController.deleteBookings);

module.exports = router; 