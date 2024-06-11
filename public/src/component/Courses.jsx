import React from 'react'
import Card from "./Card.jsx";
import Slider from "react-slick";
import {courses} from "../data/Courses.js";

const Courses = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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
        <div className='w-full bg-[#E9F8F3B2] py-32'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px]'>
                <h1 className="text-3xl py-3 font-bold">Deadliest <span className="text-[#20B486]">Enemies</span></h1>
                <p className="text-[#6D737A]">For those Helldivers that love a good fight. These foes will challenge
                    for even the mightiest warriors.</p>
                <br/>
                <br/>
                <Slider {...settings}>
                    {courses.map(course => <Card course={course} key={course.id}/>)}
                </Slider>
            </div>

        </div>
    )
}
export default Courses
