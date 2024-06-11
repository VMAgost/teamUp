import React from 'react'
import {achievement} from "../assets/index.js";
import {SlGraduation} from "react-icons/sl";
import { FiVideo } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";

const Achievement = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>

                <div className='flex flex-col justify-center'>
                    <h1 className='md:leading-[72px] text-3xl font-bold'>
                        Our <span className='text-[#20B486]'>Achievements</span>
                    </h1>
                    <p className='text-lg text-gray-600'>We are proud to showcase our achievements so far, that were
                        only made </p>
                    <p className='text-lg text-gray-600'>
                        possible with the help of this wonderful community.</p>
                    <div className="grid grid-cols-2 py-16">
                        <div className="py-6 flex">
                            <div className="p-4 bg-[#E9F8F3] rounded-xl">
                                <SlGraduation size={30} style={{color: '#1A906B'}}/>
                            </div>
                            <div className="px-3">
                                <h1 className="text-2xl font-semibold ">300</h1>
                                <p className="text-[#6D737A]">Major Orders Completed</p>
                            </div>
                        </div>
                        <div className="py-6 flex">
                            <div className="p-4 bg-[#FFFAF5] rounded-xl">
                                <FiVideo size={30} style={{color: '#FFC27A'}}/>
                            </div>
                            <div className="px-3">
                                <h1 className="text-2xl font-semibold ">27</h1>
                                <p className="text-[#6D737A]">Planets Conquered</p>
                            </div>
                        </div>
                        <div className="py-6 flex">
                            <div className="p-4 bg-[#FFEEF0] rounded-xl">
                                <SlGraduation size={30} style={{color: '#ED4459'}}/>
                            </div>
                            <div className="px-3">
                                <h1 className="text-2xl font-semibold ">10,000+</h1>
                                <p className="text-[#6D737A]">New Friendships Formed</p>
                            </div>
                        </div>
                        <div className="py-6 flex">
                            <div className="p-4 bg-[#F0F7FF] rounded-xl">
                                <SlPeople size={30} style={{color: '#0075FD'}}/>
                            </div>
                            <div className="px-3">
                                <h1 className="text-2xl font-semibold ">100,000+</h1>
                                <p className="text-[#6D737A]">Average Monthly Users</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={achievement} className="m-auto md:order-last  order-first rounded-3xl"/>


            </div>


        </div>
    )
}
export default Achievement
