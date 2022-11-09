import React from 'react';
import './HomeHeader.css'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const HomeHeader = () => {

    return (
        <div>
            <div className='  bg-slate-900'>
                <div className=' text-center font-bold text-white py-32 lg:py-60'>
                    <h1 className='text-4xl lg:text-7xl '>Made With Love. <br /> I am ready. <br /> You ready?</h1>
                    <Link to='/services'>
                        <button className='btn bg-white text-black font-bold text-lg mt-10 px-8'>PURCHASE NOW <HiArrowNarrowRight className='ml-3 text-red-700' /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;