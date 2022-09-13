import React from "react";
import axios from 'axios';
import './listingTotal.css';
import {useState, useEffect } from "react";


const ListingTotal = () => {
    const [movies, setMovies] = useState([]);
    // const [showAccordion, setShowAccordion] = useState(true);
    // this.toggleAccordion = this.toggleAccordion.bind(this);

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
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" id="listingItem">
                                <div className="listingTitle">
                                    <h3 id="listingTitle">{movie.title}</h3>
                                </div>
                                <div className="listingWidePoster">
                                    <img src={movie.widePoster} alt="wide movie poster"></img>
                                </div>                               
                                <div className="listingDetails">
                                    
                                    <h5><strong>Classification: </strong> {movie.rating}</h5>
                                    <h5><strong>Release Date: </strong> {movie.release_date}</h5>
                                </div>
                                <div className="listingStaff">
                                    <p><strong>Directors:</strong> {movie.directors}</p>
                                    <p><strong>Actors: </strong>{movie.actors}</p>
                                </div>
                                <div className="listingDescription">
                                    <p className="listingDescription">{movie.description}</p>
                                </div>    
                                <div className="listingTrailer">
                                    <iframe width="1120" height="630" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        )

    

}

export default ListingTotal;