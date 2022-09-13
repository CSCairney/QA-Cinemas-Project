import React from "react"


const SearchResults = ({data}) =>{ 



return(

    data.map((movie, index) => (
    
    <div className="movie-result" key={index}>
        <br/>
    <h3> {movie.title} </h3>
    {/* <img src={movie.poster} alt={movie.poster}/> */}
    <p> Actors: &nbsp; {movie.actors} <br/>
        Directors: &nbsp; {movie.directors}
    <br/>
    </p>
    </div>
))

 )}


 export default SearchResults;