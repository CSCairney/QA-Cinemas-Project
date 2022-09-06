import express from 'express';

import { getMovies, getMovie} from '../controllers/movies.js';

const router = express.Router();

//get request - get all movies
Router.get('/', getMovies);
//get request - get movie by ID
Router.get('/:id', getMovie);

//post request - create new movie
// Router.post('/', createMovies);
//put request - update existing movie
// Router.put('/:id', updateMovies);
//delete request - delete movie
// Router.delete('/:id', deleteMovies);

export default router;