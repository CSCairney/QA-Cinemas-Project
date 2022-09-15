const mongoose = require("mongoose");
const { Bookings } = require("../models/bookings.js");

module.exports = {

    //Get all bookings from the database. 
    getAllBookings: async (req, res) => {
        try {
            const getBookings = await Bookings.find();
            res.status(200).json(getBookings);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get one booking from the database with maching ID.
    getById: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No booking with id: ${req.params.id}` });
            const booking = await Bookings.findById(req.params.id);
            res.status(200).json(booking);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Create new booking in the database. 
    createBookings: async (req, res) => {
        const createBooking = new Bookings(req.body);
        try {
            await createBooking.save();
            res.status(201).json(createBooking);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Update booking in the database with maching ID.
    updateBookings: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No booking with id: ${req.params.id}` });
            const updateBooking = await Bookings.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.status(201).json(updateBooking);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Update booking in the database with last ID.
    updateLastBookings: async (req, res) => {
        try {
            let id;
            const getBooking = await Bookings.findOne().sort({ _id: -1 })
                .then((res) => { id = res._id; })
            const updateBooking = await Bookings.findByIdAndUpdate({ _id: id }, req.body, { new: true });
            res.status(201).json(updateBooking);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Delete booking from the database with maching ID.
    deleteBookings: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No booking with id: ${req.params.id}` });
            await Bookings.findByIdAndDelete({ _id: req.params.id });
            res.status(201).json({ message: "Booking deleted successfully!" });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}
