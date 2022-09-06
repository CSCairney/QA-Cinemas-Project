// import MoviesSchema from '../models/movies.js';

// const router = express.Router();

// export const getMovies = async (req, res) => {

//     try{
//         const movies = await Movies.find();

//         res.status(200).json(movies);
//     } catch (error) {
//         res.status(404).json({message: error.message});
//     }
// }

// export const getMovie = async (req, res) => {
//     const { id } = req.params;

//     try{
//         const movie = await Movies.findById(id);

//         res.status(200).json(movie);
//     } catch (error) {
//         res.status(404).json({message: error.message });
//     }

// }

// export default router;