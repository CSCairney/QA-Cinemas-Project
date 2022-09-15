import React from "react"
import "./searchResults.css"

const SearchResults = ({data}) =>{ 

return(

    <>
            <div className="posterTitleArea">
                <br/>
                <h3 className="posterTitle2">Search Results</h3>
                <br/>
            </div>
            <div className="accordion2">
                {data.map((movie) => (                    
                    <div className="accordion-item" key={movie._id}>
                       
                    <div id="collapseOne2" className="accordion-collapse collapse show">
                            <div className="accordion-body2" id="listingItem">
                                <div className="listingTextArea2">
                                    <div className="listingMainDetails">
                                        <div className="listingTitle">
                                            <h3 id="listingTitle">{movie.title}</h3>
                                        </div>
                                        <div className="listingDetails">
                                            <h5><strong>Classification: </strong> {movie.rating}</h5>
                                            <h5><strong>Release Date: </strong> {movie.release_date.slice(0,[10])}</h5>
                                        </div>
                                    
                                        <div className="listingStaff">
                                            <p><strong>Directors:</strong> {movie.directors.join(', ')}</p>
                                            <p><strong>Actors: </strong>{movie.actors.join(', ')}</p>
                                        </div>
                                        <div className="listingDescription">
                                            <p className="listingDescription">{movie.description}</p>
                                        </div>  
                                    </div>
                                </div>  
                                <div className="listingTrailer2">
                                    <iframe width="896" height="504" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </>







 )}


 export default SearchResults;