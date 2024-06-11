import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import FeedbackCard from "./FeedbackCard.jsx";
import axios from "axios";

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    async function fetchFeedbacks() {
        try {
            const response = await axios.get("/api/feedback/all", {responseType: "json"})
            return response.data;
        } catch (error) {
            console.error("Error reading data:", error)
        }
    }

    useEffect(() => {
        fetchFeedbacks().then(feedbacks => setFeedbacks(feedbacks))
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full bg-white py-32'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px]'>
                <h1 className="text-3xl py-3 font-bold">User <span className="text-[#20B486]">Feedback</span></h1>
                <p className="text-[#6D737A]">All reviews are verified. Undemocratic reviews will be removed, and the
                    users responsible will be prosecuted.</p>
                <Slider {...settings}>
                    {feedbacks.map((feedback) => (
                        <FeedbackCard feedback={feedback}/>
                    ))}
                </Slider>
            </div>

        </div>
    )
}
export default Feedback
