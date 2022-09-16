const router = require("express").Router();
const paymentsController = require("../controllers/paymentsController.js");

// Read request for all payments,
router.get("/getAll", paymentsController.getAllPayments);

// Read request for payments by ID,
router.get("/getById/:id", paymentsController.getById);

// Create request for payments,
router.post("/create", paymentsController.createPayments);

// Update request for payments,
router.put("/update/:id", paymentsController.updatePayments);

// Update request for payments using last ID,
router.put("/updateLast", paymentsController.updateLastPayments);

// Delete request for payments,
router.delete("/delete/:id", paymentsController.deletePayments);

module.exports = router; 