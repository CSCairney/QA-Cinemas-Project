import React from "react";
import axios from 'axios';
import './discussionsMessages.css';
import {useState, useEffect } from "react";




const Discussion = () => {
    const [discussions, setDiscussions] = useState([]);
    const [discussionUsername, setDiscussionUsername] = useState("");
    const [discussionSubjectMovie, setDiscussionSubjectMovie] = useState("");
    const [discussionRating, setDiscussionRating] = useState("");
    const [discussionSpoilerMarker, setDiscussionSpoilerMarker] = useState(false);
    const [discussionMessage, setDiscussionMessage] = useState("");
    
    const addDiscussionMessage = (e) =>{
            e.preventDefault()
            const discussion = {
                username: discussionUsername,
                subjectMovie: discussionSubjectMovie,
                rating: discussionRating,
                spoilerMarker: discussionSpoilerMarker,
                message: discussionMessage
            }
            console.log(discussion)
            axios.post('http://localhost:3002/discussions/create', discussion
            ).then(()=>{
                console.log("New discussion message added")
                window.location.reload(true);
                clearInputs();
            }).catch((error) => {
                console.log(error.message)
            })
            
    }

    const clearInputs = () => {
        setDiscussionMessage("")
        setDiscussionSubjectMovie("")
        setDiscussionUsername("")
        setDiscussionRating("")
        setDiscussionSpoilerMarker(false)
    }

    useEffect(() => {

        axios.get('http://localhost:3002/discussions/getAll')
            .then((result) => {
                setDiscussions(result.data);
            })


    }, [])
          
        return (
            
            <div>
                <form onSubmit={addDiscussionMessage} id="discussionForm">
                    <div className="mb-3">
                        <label htmlFor="usernameInput1" className="form-label">Username:</label>
                        <input type="text" className="form-control" id="usernameInput" aria-describedby="usernameInput" placeholder="Please input cinema username." value={discussionUsername} onChange={(e) => setDiscussionUsername(e.target.value)}></input>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="subjectMovieInput1" className="form-label">Subject Movie:</label>
                        <input type="text" className="form-control" id="subjectMovieInput" aria-describedby="subjectMovieInput" placeholder="Please input movie title." value={discussionSubjectMovie} onChange={(e) => setDiscussionSubjectMovie(e.target.value)}></input>
                    </div>                    
                    <div className="mb-3">
                        <label htmlFor="messageInput1" className="form-label">Message</label>
                        <input type="text" className="form-control" id="subjectMovieInput" aria-describedby="subjectMovieInput" placeholder="Discussion message here." value={discussionMessage} onChange={(e) => setDiscussionMessage(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ratingInput1" className="form-label">Rating:</label>
                        <select multiple={false} id="ratingSelectValue" onChange={(e) => setDiscussionRating(e.target.value)}>
                            <option value="" disabled>select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <div className="discussionResult">
                    <h1>Discussion Board</h1>
                    {discussions?.map((discussion) => (
                        <div key={discussion._id} className="discussion">
                            <h2 id="username">{discussion.username}</h2>
                            <hr/>
                            <h5>{discussion.message}</h5>
                            
                        </div>
                    ))}
                </div>

                
            </div>
            
        );
    }

    export default Discussion;


