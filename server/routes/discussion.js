const router = require("express").Router();
const {Discussion} = require("../models/discussion.js");


router.get("/getAll", (req, res) => {

    Discussion.find({}, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    })
});


router.post("/create", (req, res) => {
    //Through a body request

    const discussion = new Discussion(req.body);

    discussion.save().then((result) => {
        res.status(201).send(`${result.username}'s review has been added to the discussion board.`)
    }).catch(err => {console.log(err);})
    // console.log(req.body);
});

router.put("/update/:id", (req, res) => {

    Discussion.findByIdAndUpdate({_id: req.params.id}, req.body, (err, result) => {
        if (err) res.send(err);
        res.status(202).send(`Updated review message id=${req.body.id}`);
    })
});

router.delete("/delete/:id", (req, res) => {

    Discussion.findByIdAndDelete({_id: req.params.id}, req.body, (err, result) => {
        if (err) res.send(err);
        res.status(202).send(`Deleted review message id=${req.body.id}`);
    })
})

module.exports = router; 