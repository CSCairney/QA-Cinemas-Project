const mongoose = require("mongoose");
const { Movies } = require("../models/movies.js");

module.exports = {

    //Get all movies from the database. 
    getAllMovies: async (req, res) => {
        try {
            const getMovies = await Movies.find();
            res.status(200).json(getMovies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get one movie from the database with maching ID.
    getById: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No movie with id: ${req.params.id}` });
            const movie = await Movies.findById(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get one movie from the database with maching movie title.
    getByTitle: async (req, res, next) => {
        try {
            const movie = await Movies.findOne({ title: req.params.title });
            (movie) ? res.status(200).json(movie) :
                res.status(404).json({ message: `No movie with title: ${req.params.title}` });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get one movie from the database with maching movie title,director or actor.
    getByQuery: async (req, res, next) => {
        try {
            const movie = await Movies.find({
                $or: [
                    { "title": { "$in": req.params.query } },
                    { "directors": { "$in": req.params.query } },
                    { "actors": { "$in": req.params.query } }
                ]
            });
            (movie.length) ? res.status(200).json(movie) :
                res.status(404).json({ message: `No document in movies collection containing: ${req.params.query}` });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get latest movies from the database, limited by number. 
    getByLatest: async (req, res) => {
        try {
            const getMovies = await Movies.find().sort({ _id: -1 }).limit(req.params.num);
            res.status(200).json(getMovies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Create new movie in the database. 
    createMovies: async (req, res) => {
        const createMovie = new Movies(req.body);
        try {
            await createMovie.save();
            res.status(201).json(createMovie);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Update movie in the database with maching ID.
    updateMovies: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No movie with id: ${req.params.id}` });
            const updateMovie = await Movies.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.status(201).json(updateMovie);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Delete movie from the database with maching ID.
    deleteMovies: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No movie with id: ${req.params.id}` });
            await Movies.findByIdAndDelete({ _id: req.params.id });
            res.status(201).json({ message: "Movie deleted successfully!" });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}
