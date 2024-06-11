import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import ErrorComponent from "../component/ErrorComponent.jsx";

export default function MyFeedbacks() {

    const {id} = useParams();
    const [myFeedbacks, setMyFeedbacks] = useState([]);
    const [feedbackValue, setFeedbackValue] = useState("");

    async function fetchFeedbacks() {
        try {
            const response = await axios.get(`/api/feedback/user/${id}`, {responseType: "json"});
            console.log(response)
            return response.data
        } catch (err) {
            console.error("Could not find feedbacks.", err);
        }
    }

    const postFeedback = (e) => {
        e.preventDefault();
        axios.post(`/api/feedback/{id}`, {
            feedbackText: feedbackValue
        })
            .then((response) => {
                if (response.status !== 200 || response.data === undefined) {
                    return <ErrorComponent message={"Posting feedback failed"}/>
                }
            })
    }


    useEffect(() => {
        fetchFeedbacks().then(feedback => setMyFeedbacks(feedback));
    }, [id]);

    if (!myFeedbacks) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>MyFeedbacks</h1>
            <div>
                <form>

                </form>
            </div>
            <ol>
                {myFeedbacks.map((feedback) => (
                    <li key={feedback.id}>
                        <div>
                            <p>{feedback.feedbackText}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}

