import React from "react"
import '../listing/listingTotal.css';

const SearchResults = ({data}) =>{ 
    
return(

    <>
            <div className="posterTitleArea">
                <p className="posterTitle">Search Results</p>
            </div>
            <div className="accordion">
            {data.map((movie) => (                    
                    <div className="accordion-item" key={movie._id}>
                        <div id="collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body" id="listingItem">
                                <div className="listingTextArea">
                                    <div className="listingMainDetails">
                                        <div className="listingTitle">
                                            <p className="listingTitle">{movie.title}</p>
                                        </div>
                                        <div className="listingDetails">
                                            <h5><span className="listingHighlight"><strong>Classification: </strong></span> {movie.rating}</h5>
                                            <h5><span className="listingHighlight"><strong>Release Date: </strong></span> {movie.release_date.substring(0,10)}</h5>
                                        </div>
                                    
                                        <div className="listingStaff">
                                            <p className="staffingInfo"><span className="listingHighlight"><strong>Directors:</strong></span>{movie.directors.join(', ')}</p>
                                            <p ><span className="listingHighlight"><strong>Actors: </strong></span>{movie.actors.join(', ')}</p>
                                        </div>
                                        <div className="listingDescription">
                                            <p className="listingDescription">{movie.description}</p>
                                        </div>  
                                    </div>
                                </div>  
                                <div className="listingTrailer">
                                    <iframe class="responsive-iframe" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </>
            

        )

 }


 export default SearchResults;