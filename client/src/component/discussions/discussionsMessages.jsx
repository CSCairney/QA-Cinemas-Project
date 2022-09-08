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
            <div className="discussionDiv">
                <button onClick={this.createDiscussion}>New Discussion</button>
                <button onClick={this.deleteDiscussion}>Delete Discussion</button>
                <ul>
                    {
                        this.state.discussions.map(discussions => <li key={discussion.id}>'Username: {discussion.username}<br /> Rating: {discussion.rating}<br />  {discussion.message}'</li>)
                    }
                </ul>
            </div>
        )
    }
}

