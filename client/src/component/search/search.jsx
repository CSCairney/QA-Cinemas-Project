import {useEffect, useState} from 'react';
// import './search.css';
import axios from 'axios';

function SearchBar() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`http://localhost:3002/movies/getByQuery/${query}`)
                setMovies(data.results.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [query])



    return (
        <div className="SearchResults">
            <div className="search">
                <input type="text"
                       icon="search"
                       placeholder={"Search Movies by Title, Actor & Director"}
                       className={"input"}
                       onChange={event => setQuery(event.target.value)}
                       value={query}
                />
            </div>

            <div className="results">
                {movies.map(movie => (
                    <div>
                        <h3> {movie.title} </h3>
                        {/* <img src={movie.poster} alt={movie.poster}/> */}
                        <p> Actors: &nbsp; {movie.actors} 
                            Directors: &nbsp; {movie.directors}
                        <br/>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;