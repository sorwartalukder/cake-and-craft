import React from 'react';
import './HomeHeader.css'
import HomeCover from '../../../assets/images/header.png'
import { HiArrowNarrowRight } from 'react-icons/hi';


const HomeHeader = () => {
    const HomeCoverStyles = {
        backgroundImage: `url(${HomeCover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '70vh',

    };
    return (
        <div >
            <div className='relative'>
                <div className='home-cover' style={HomeCoverStyles}>
                    <div className='home-cover-text'>
                        <h1 className=' text-5xl'>Made With Love</h1>
                        <button className='btn bg-white text-black font-bold text-lg mt-4 px-8'>PURCHASE NOW <HiArrowNarrowRight className='ml-3 text-red-700' /></button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HomeHeader;