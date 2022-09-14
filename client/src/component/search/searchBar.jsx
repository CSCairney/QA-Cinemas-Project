import axios from 'axios';
import React from 'react';
import './searchBar.css';
import {useEffect, useState} from 'react';
import SearchResults from './searchResults';

import Form from 'react-bootstrap/Form';

// import Button from 'react-bootstrap/Button';


const Search = () => {

    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState("")
    
    useEffect(() => {

        axios.get(`http://localhost:3002/movies/getByQuery/${query}`)
            .then((result) => {
                setMovies(result.data);
            }).catch((error) => {
                console.log(error.message);
                setMovies([]);
            })
    }, [query]);


    const Search = (movies) => {
        return movies.filter((movie) => {
        if (query === "") {
            return console.log("No search input");
        } 
            return movie;
        
        })
    }



    return (
        <div className="SearchResults">
            
            
                <Form id="searchForm" className="d-flex">
                <Form.Control
                id="searchInput"
                type="search"
                placeholder="Search Movies by Title, Actor & Director..."
                className="me-2"
                aria-label="Search"
                icon="search"
                onChange={event => setQuery(event.target.value)}
                />
                {/* <Button variant="outline-success"> Search</Button> */}
                </Form> 
            

                <SearchResults type = "submit" data = {Search(movies)}/>
                    
        </div>

    );

}










export default Search;

