const { Movies } = require("../models/movies.js")

module.exports = {

    getAllMovies: (req, res) => {

        Movies.find({}, (err, result) => {
            if (err) res.send(err);
            res.status(200).send(result);
        })
    },

    createMovies: (req, res) => {
        //Through a body request

        const movies = new Movies(req.body);

        movies.save().then((result) => {
            res.status(201).send(`${result.title} added to the database.`)
        }).catch(err => { console.log(err); })
        // console.log(req.body);
    },

    updateMovies: (req, res) => {

        Movies.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
            if (err) res.send(err);
            res.status(202).send(`Updated ${req.body.title}`);
        })
    },

    deleteMovies: (req, res) => {

        Movies.findByIdAndDelete({ _id: req.params.id }, req.body, (err, result) => {
            if (err) res.send(err);
            res.status(202).send(`Deleted ${req.body.title}`);
        })
    }

}
