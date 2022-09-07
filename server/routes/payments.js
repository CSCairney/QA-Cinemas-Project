const router = require("express").Router();

//Importing Schema
const {Payments} = require("../models/payments.js");


// GetAll Request

router.get("/getAll", (req, res) => {

    Payments.find({}, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    })
});


//Create request

router.post("/create", (req, res) => {

    const payments = new Payments(req.body);

    payments.save().then((result) => {
        
        res.status(201).send(`Payment Received. Thank You, ${result.firstName}.`);
        console.log(`Payment details stored for ${result.firstName}.`);  
    
    // }).catch((err) => {console.log(err);
    });
});


//Update request

router.put("/update/:id",  (req, res) => {

        Payments.findByIdAndUpdate({_id: req.params.id}, req.body, (err, result) => {
        if (err) res.send(err);
        res.status(202).send(`Updated payment details for ${req.body.firstName}`);
    });
});


//Delete request

router.delete("/delete/:id", (req, res) => {

    Payments.findByIdAndDelete({_id: req.params.id}, req.body, (err, result) => {
        if (err) res.send(err);
        res.status(202).send(`Deleted payment.`);
    })
})

//Exporting routes

module.exports = router; 