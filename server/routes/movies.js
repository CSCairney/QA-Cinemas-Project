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
        res.status(201).send(`${result.title} added to the database.`);
    });
    // console.log(req.body);
   
});

//get request - get movie by ID
// router.get('/:id', getMovie);

//post request - create new movie
// Router.post('/', createMovies);
//put request - update existing movie
// Router.put('/:id', updateMovies);
//delete request - delete movie
// Router.delete('/:id', deleteMovies);

module.exports = router; 
