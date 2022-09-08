const router = require("express").Router();
const paymentsController = require("../controllers/paymentsController.js");

// Get request for payments,
router.get("/getAll", paymentsController.getAllPayments);

// Get request for payments by ID,
router.get("/getById/:id", paymentsController.getById );

// Post request for payments,
router.post("/create", paymentsController.createPayments);

// Put request for payments,
router.put("/update/:id", paymentsController.updatePayments);

// Delete request for payments,
router.delete("/delete/:id", paymentsController.deletePayments);

module.exports = router; 