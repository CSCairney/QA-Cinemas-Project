const mongoose = require("mongoose");
const { Payments } = require("../models/payments.js");

module.exports = {

    //Get all payments from the database.
    getAllPayments: async (req, res) => {
        try {
            const getPayments = await Payments.find();
            res.status(200).json(getPayments);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get one payment from the database with maching ID.
    getById: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No payment with id: ${req.params.id}` });
            const payment = await Payments.findById(req.params.id);
            res.status(200).json(payment);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Create new payment in the database. 
    createPayments: async (req, res) => {
        const createPayment = new Payments(req.body);
        try {
            await createPayment.save();
            res.status(201).json(createPayment);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Update payment in the database with maching ID.
    updatePayments: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No payment with id: ${req.params.id}` });
            const updatePayment = await Payments.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.status(201).json(updatePayment);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Delete payment from the database with maching ID.
    deletePayments: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No payment with id: ${req.params.id}` });
            await Payments.findByIdAndDelete({ _id: req.params.id });
            res.status(201).json({ message: "Payment deleted successfully!" });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}
