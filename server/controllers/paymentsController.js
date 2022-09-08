const { Payments } = require("../models/payments.js");

module.exports = {

    getAllPayments: (req, res) => {

        Payments.find({}, (err, result) => {
            if (err) res.send(err);
            res.status(200).send(result);
        })
    },

    getById: async (req, res) => {

        const payment = await Payments.findById(req.params.id);

        res.status(200).send(payment);
    },

    createPayments: (req, res) => {

        const payments = new Payments(req.body);

        payments.save().then((result) => {

            res.status(201).send(`Payment Received. Thank You, ${result.firstName}.`);
            console.log(`Payment details stored for ${result.firstName}.`);

            // }).catch((err) => {console.log(err);
        });
    },

    updatePayments: (req, res) => {

        Payments.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
            if (err) res.send(err);
            res.status(202).send(`Updated payment details for ${req.body.firstName}`);
        });
    },

    deletePayments: (req, res) => {

        Payments.findByIdAndDelete({ _id: req.params.id }, req.body, (err, result) => {
            if (err) res.send(err);
            res.status(202).send(`Deleted payment.`);
        })
    }

}
