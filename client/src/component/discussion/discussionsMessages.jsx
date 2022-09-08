import React from "react";
import axios from 'axios';
import {useState, useEffect } from "react";



function discussionMessages() {
    const [discussions, setDiscussions] = useState([]);
    const [discussionUsername, setDiscussionUsername] = useState([]);
    const [discussionSubjectMovie, setDiscussionSubjectMovie] = useState([]);
    const [discussionRating, setDiscussionRating] = useState([]);
    const [discussionSpoilerMarker, setDiscussionSpoilerMarker] = useState([]);
    const [discussionMessage, setDiscussionMessage] = useState([]);

    const api = axios.create({
        baseURL: 'localhost:3002/discussion/'
    })

    useEffect(() => {
        const fetchDiscussionMessages = async () => {
            try {
                const response = await api.get('/getAll');
                setDiscussions(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }

            }
        }

        fetchDiscussionMessages();
    }, [])
  
    const handleDelete = async (id) => {
        try {
            await api.delete(`/${id}`);
            const discussionsList = discussions.filter(discussion => discussion.id !== id);
            setDiscussions(discussionsList);
            history.pushState('/getAll');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }
      
        return (
            
                <div>
                    <form onSubmit={DiscussionHandler}>
                        <div class="mb-3">
                            <label for="usernameInput1" class="form-label">Username:</label>
                            <input type="text" class="form-control" id="usernameInput" aria-describedby="usernameInput" placeholder="Please input cinema username." onChange={discussionUsername}></input>
                            
                        </div>
                        <div class="mb-3">
                            <label for="subjectMovieInput1" class="form-label">Subject Movie:</label>
                            <input type="text" class="form-control" id="subjectMovieInput" aria-describedby="subjectMovieInput" placeholder="Please input movie title." onChange={discussionSubjectMovie}></input>
                        </div>
                                         <div class="mb-3">
                            <label for="ratingInput1" class="form-label">Rating:</label>
                            <div id="ratingHelp" class="form-text">1-5.</div>
                            <select id="ratingSelectValue" onChange={discussionRating}>
                                <option selected disabled>select</option>
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Okay</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Great</option>
                                <option value="5">5 - Perfect</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="messageInput1" class="form-label">Message</label>
                            <input type="text" class="form-control" id="subjectMovieInput" aria-describedby="subjectMovieInput" placeholder="Discussion message here."></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                    <div className="discussionResult">
                        <button onClick={this.createDiscussion}>New Discussion</button>
                        <button onClick={this.deleteDiscussion}>Delete Discussion</button>
                        <ul>
                            {
                                this.state.discussions.map(discussion => <li key={discussion.id}>'Username: {discussion.username}<br /> Rating: {discussion.rating}<br />  {discussion.message}'</li>)
                            }
                        </ul>
                    </div>
                </div>
            
        )
    }


