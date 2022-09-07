const router = require("express").Router();
const {Bookings} = require("../models/bookings.js");

router.get("/getAll", (req, res) => {

    Bookings.find({}, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    })
});

router.post("/create", (req, res) => {
    const booking = new Bookings(req.body);

    booking.save().then((result) => {
        const message =
        `Booking confirmed! 
        Film: ${result.movieTitle}
        Date: ${result.date}
        Time: ${result.time}
        Seats: ${result.seats}`;
        res.status(201).send(message).catch(err => {console.log(err);})
    });
});

router.put("/update/:id", (req, res) => {

    Bookings.findByIdAndUpdate({_id: req.params.id}, req.body, (err, result) => {
        if (err) res.send(err);
        res.status(202).send(`Updated booking`);
    })
});

router.delete("/delete/:id", (req, res) => {

    Bookings.findByIdAndDelete({_id: req.params.id}, req.body, (err, result) => {
        if (err) res.send(err);
        res.status(202).send(`Deleted booking`);
    })
});

module.exports = router; 