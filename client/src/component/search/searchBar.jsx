import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';
import SearchResults from './searchResults';


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
            
                <input type="text"
                       icon="search"
                       className={"input"}
                       placeholder={"Search Movies by Title, Actor & Director"}
                       onChange={event => setQuery(event.target.value)}
                       value={query}
                />
                
                <SearchResults data = {Search(movies)}/>
                    

        </div>

    );

}










export default Search;

