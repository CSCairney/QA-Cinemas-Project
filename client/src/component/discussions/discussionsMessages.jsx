import React from "react";
import axios from 'axios';

const api = axios.create({
    baseURL: 'localhost:3002/discussion/'
})

export default class discussionMessages extends React.Component {
    state = {
        discussions: []
    }


    constructor() {
        super()
    }

    getDiscussions = async () => {
        let data = await api.get('/').then(({ data }) =>
            data);
        this.setState({ discussions: data });
    }


    //This is a testing method for proof
    createDiscussion = async () => {
        let res = await api.post('/', { username: "test", subjectMovie: "blade", rating: "4", spoilerMaker: true, message: "This is a tester method please ignore me I am useless to society." })
        console.log(res)
    }

    deleteDiscussion = async (id) => {
        let data = await api.delete(`/${id}`)
    }

    render() {
        return (
            
                <div>
                    <form>
                        <div class="mb-3">
                            <label for="usernameInput1" class="form-label">Username:</label>
                            <input type="text" class="form-control" id="usernameInput" aria-describedby="usernameInput" placeholder="Please input cinema username."></input>
                            
                        </div>
                        <div class="mb-3">
                            <label for="subjectMovieInput1" class="form-label">Subject Movie:</label>
                            <input type="text" class="form-control" id="subjectMovieInput" aria-describedby="subjectMovieInput" placeholder="Please input movie title."></input>
                        </div>
                                         <div class="mb-3">
                            <label for="ratingInput1" class="form-label">Rating:</label>
                            <div id="ratingHelp" class="form-text">1-5.</div>
                            <select id="ratingSelectValue">
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
}

