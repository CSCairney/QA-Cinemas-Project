import React from "react";
import axios from 'axios';
import './listing.css';
import {useState, useEffect } from "react";

const ListingPosters = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3002/movies/getByLatest/5')
            .then((result) => {
                setMovies(result.data);
            }).catch((err) => {
                console.log(err.message);
            })


    }, [])


    return (
        <div className="ListingsPosters">
            <div className="posterTitleArea">
                <p className="posterTitle">CurrentlyShowing</p>
            </div>
            <div className="moviePoster-Container">
                {movies?.map((movie) => (
                    <div key={movie._id} className="MoviePosterItem">
                        <div>
                            <img src={movie.poster} className="posterImage" alt="movie poster"></img>
                            <div id="moviePosterTitle">{movie.title}</div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ListingPosters;