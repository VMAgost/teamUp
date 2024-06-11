import React from 'react';
import { heroImg, companyLogo1, companyLogo2, companyLogo3, companyLogo4 } from "../assets/index.js";

const Companies = () => {
    return (
        <div className='w-full bg-white py-[50px]'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className="text-center text-2xl font-bold text-[#536E96]">Trusted by over 25,000 gamers around the world.</h1>
                <p className="text-center text-[#536E96] text-xl">Leading companies use TeamUp to help gamers keep their skills fresh.</p>
                <div className="flex justify-center py-8 md:gap-8 ">
                    <img src={companyLogo1} alt='hero'/>
                    <img src={companyLogo2} alt='hero'/>
                    <img src={companyLogo3} alt='hero'/>
                    <img src={companyLogo4} alt='hero'/>
                </div>
            </div>
        </div>
    );
};

export default Companies;
