import React from "react";
import axios from 'axios';
import './listing.css';
import {useState, useEffect } from "react";


const ListingTotal = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3002/movies/getAll')
            .then((result) => {
                setMovies(result.data);
            }).catch((err) => {
                console.log(err.message);
            })


    }, [])

        return (
            <div className="accordion">
                {movies?.map((movie) => (
                    <div className="accordion-item" key={movie._id}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {movie.title}
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <img src={movie.widePoster}></img>
                                <h3>{movie.title}</h3>
                                <h5>{movie.rating}</h5>
                                <h5>{movie.release_date}</h5>
                                <p>{movie.directors}</p>
                                <p>{movie.actors}</p>
                                <p>{movie.description}</p>
                                <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        )

    

}

export default ListingTotal;