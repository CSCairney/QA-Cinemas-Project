import React from "react";
import axios from 'axios';
import './listingLatest.css';
import './listing.css';
import {useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';

const ListingLatest = () => {
    const [movieOne, setMovieOne] = useState([]);
    const [movieTwo, setMovieTwo] = useState([]);
    const [movieThree, setMovieThree] = useState([]);
    const [movieFour, setMovieFour] = useState([]);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {setIndex(selectedIndex);};

    useEffect(() => {

        axios.get(`http://localhost:3002/movies/getByTitle/Avatar: The Way of Water`)
            .then((result) => {
                setMovieOne(result.data);
            }).catch((err) => {
                console.log(err.message);
            })


    }, [])

    useEffect(() => {

        const movie = "Top Gun: Maverick";
        axios.get(`http://localhost:3002/movies/getByTitle/Suzume no Tojimari`)
            .then((result) => {
                setMovieTwo(result.data);
            }).catch((err) => {
                console.log(err.message);
            })


    }, [])

    useEffect(() => {

        
        axios.get(`http://localhost:3002/movies/getByTitle/Amsterdam`)
            .then((result) => {
                setMovieThree(result.data);
            }).catch((err) => {
                console.log(err.message);
            })


    }, [])

    useEffect(() => {

        
        axios.get(`http://localhost:3002/movies/getByTitle/Black Adam`)
            .then((result) => {
                setMovieFour(result.data);
            }).catch((err) => {
                console.log(err.message);
            })


    }, [])


    return (
        
        <div className="latestGallery">
            <div className="posterNewTitleArea">
                <p className="posterNewTitle">Up Coming Movies</p>
            </div>
            <div className="latestCarousel">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className="carousel.Item">
                        <img
                            className="d-block"
                            src={movieOne.widePoster}
                            alt="First slide"
                        />
                        <Carousel.Caption id="movieLatestTitle">
                            <h3><strong>{movieOne.title}</strong></h3>
                            <p><strong>Director:  </strong>{movieOne.directors}</p>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel.Item">
                        <img
                            className="d-block"
                            src={movieTwo.widePoster}
                            alt="Second slide"
                        />

                        <Carousel.Caption id="movieLatestTitle">
                            <h3><strong>{movieTwo.title}</strong></h3>
                            <p><strong>Director:  </strong>{movieTwo.directors}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel.Item">
                        <img
                            className="d-block"
                            src={movieThree.widePoster}
                            alt="Third slide"
                        />

                        <Carousel.Caption id="movieLatestTitle">
                            <h3><strong>{movieThree.title}</strong></h3>
                            <p><strong>Director:  </strong>{movieThree.directors}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel.Item">
                        <img
                            className="d-block"
                            src={movieFour.widePoster}
                            alt="Third slide"
                        />

                        <Carousel.Caption id="movieLatestTitle">
                            <h3 className=""><strong>{movieFour.title}</strong></h3>
                            <p><strong>Director:  </strong>{movieFour.directors}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )


}


export default ListingLatest;