const router = require("express").Router();
const {Movies} = require("../models/movies.js")

//get request - get all movies
// router.get('/getAll', (req, res) => {
//     try {
//         res.status(200).json(Movies.find(req.body));
//         // res.send(Movies);
//     } catch (error) {
//         console.log("error");
//     }
// })

router.get("/getAll", (req, res) => {

    Movies.find({}, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    })
});



router.post("/create", (req, res) => {
    //Through a body request

    const movies = new Movies(req.body);

    movies.save().then((result) => {
        res.status(201).send(`${result.title} added to the database.`)
    }).catch(err => {console.log(err);})
    // console.log(req.body);
});

router.put("/update/:id", (req, res) => {

    Movies.findByIdAndUpdate({_id: req.params.id}, req.body, (err, result) => {
        if (err) res.send(err);
        res.status(202).send(`Updated ${req.body.title}`);
    })
});

router.delete("/delete/:id", (req, res) => {

    Movies.findByIdAndDelete({_id: req.params.id}, req.body, (err, result) => {
        if (err) res.send(err);
        res.status(202).send(`Deleted ${req.body.title}`);
    })
})

module.exports = router; 
