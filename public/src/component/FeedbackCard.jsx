import React from 'react'
import {quotationMark} from "../assets/index.js";

const FeedbackCard = ({feedback}) => {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <img src={feedback.userImage} className="h-[50px] rounded-3xl"/>
                    <div>
                        <h1>{feedback.userName}</h1>
                        <p>{feedback.userLevel}</p>
                    </div>
                </div>
                <img className="h-8" src={quotationMark}/>
            </div>
            <div className="py-8">
                <h3 className="text-lg">{feedback.feedbackText}</h3>
            </div>
        </div>
    )
}
export default FeedbackCard
