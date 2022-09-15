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
            axios.post('https://qacinema-362612.ey.r.appspot.com/discussions/create', discussion
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

        axios.get('https://qacinema-362612.ey.r.appspot.com/discussions/getAll')
            .then((result) => {
                setDiscussions(result.data);
            })


    }, [])
          
        return (
            
            <div className="totalDiscussion">
                <form onSubmit={addDiscussionMessage} className="discussionForm">
                    <h1>New Discussion</h1>
                    <div className="mb-3">
                        <label htmlFor="usernameInput1" className="form-label">Username:</label>
                        <input type="text" className="form-control" id="usernameInput" Style="width:40%" aria-describedby="usernameInput" placeholder="Please input cinema username." value={discussionUsername} onChange={(e) => setDiscussionUsername(e.target.value)}></input>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="subjectMovieInput1" className="form-label">Subject Movie:</label>
                        <input type="text" className="form-control" id="subjectMovieInput" Style="width:40%" aria-describedby="subjectMovieInput" placeholder="Please input movie title." value={discussionSubjectMovie} onChange={(e) => setDiscussionSubjectMovie(e.target.value)}></input>
                    </div>                    
                    <div className="mb-3">
                        <label htmlFor="messageInput1" className="form-label">Message</label>
                        <input type="text" className="form-control" id="subjectMovieInput" aria-describedby="subjectMovieInput" placeholder="Please input your review here." value={discussionMessage} onChange={(e) => setDiscussionMessage(e.target.value)}></input>
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
                            <div id="username"><strong>Username: </strong> {discussion.username}</div>
                            <div id="subjectMovie"><strong>Movie: </strong> {discussion.subjectMovie}</div>
                            <hr/>
                            <div id="message"><strong>Message: </strong>{discussion.message}</div>
                            <hr/>
                            <div id="rating"><strong>Reviewer's Rating: </strong> {discussion.rating}</div>
                            
                        </div>
                    ))}
                </div>

                
            </div>
            
        );
    }

    export default Discussion;


