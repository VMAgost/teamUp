import React from 'react';
import {HD2_Banner} from '../assets';
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>

                <div className='flex flex-col justify-start gap-4'>
                    <p className='py-2 text-2xl text-[#20B486] font-medium'>FOR DEMOCRACY</p>
                    <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Link up with  <span
                        className='text-[#20B486]'>100,000+</span> Helldivers
                        from <span className='text-[#20B486]'>100+</span> countries
                    </h1>
                    <p className='py-2 text-lg text-gray-600'>Search for users:</p>

                    <form
                        className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                        <input
                            className='bg-white'
                            type="text"
                            placeholder='Start typing their username'
                        />
                        <button>
                            <AiOutlineSearch
                                size={20}
                                className="icon"
                                style={{color: '#000'}}

                            />

                        </button>
                    </form>
                </div>

                <img src={HD2_Banner} className="md:order-last  order-first rounded-3xl"/>


            </div>


        </div>
    )
}

export default Hero