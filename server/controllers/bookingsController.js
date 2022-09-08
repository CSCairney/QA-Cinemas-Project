const { Bookings } = require("../models/bookings.js");

module.exports = {

    getAllBookings: (req, res) => {

        Bookings.find({}, (err, result) => {
            if (err) res.send(err);
            res.status(200).send(result);
        })
    },

    getById: async (req, res) => {

        const booking = await Bookings.findById(req.params.id);

        res.status(200).send(booking);

    },


    createBookings: (req, res) => {
        const booking = new Bookings(req.body);

        booking.save().then((result) => {
            const message =
                `Booking confirmed! 
            Film: ${result.movieTitle}
            Date: ${result.date}
            Time: ${result.time}
            Seats: ${result.seats}`;
            res.status(201).send(message).catch(err => { console.log(err); })
        });
    },

    updateBookings: (req, res) => {

        Bookings.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
            if (err) res.send(err);
            res.status(202).send(`Updated booking`);
        })
    },

    deleteBookings: (req, res) => {

        Bookings.findByIdAndDelete({ _id: req.params.id }, req.body, (err, result) => {
            if (err) res.send(err);
            res.status(202).send(`Deleted booking`);
        })
    }

}
