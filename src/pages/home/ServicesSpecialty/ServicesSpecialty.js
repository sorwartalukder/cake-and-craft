import React from 'react';
import './ServicesSpecialty.css'
import { FaShoppingCart } from 'react-icons/fa';
import { HiChatAlt2, HiCheckCircle } from 'react-icons/hi';

const ServicesSpecialty = () => {
    return (
        <div>
            <h2 className='text-center font-bold text-4xl my-6'>Service Specialty</h2>
            <div className='grid lg:grid-cols-3 services-container  shadow-lg'>
                <div className="bg-white text-black">
                    <div className=' flex justify-center '>
                        <HiCheckCircle className='specialy-icon' />
                    </div>
                    <div className="mt-6 p-5" style={{ textAlign: 'justify' }}>
                        <h2
                            className="font-bold text-2xl">BEST QUALITY
                        </h2>
                        <p className='text-lg'>I try my best to serve good food. I believe that the better the food, the better my reputation. So to prepare food while maintaining healthy quality standards.</p>
                    </div>
                </div>
                <div className="bg-black text-white">
                    <div className=' flex justify-center '>
                        <FaShoppingCart className='specialy-icon' />
                    </div>
                    <div className="mt-6 p-5" style={{ textAlign: 'justify' }}>
                        <h2 className="font-bold text-2xl">FAST DELIVERY</h2>
                        <p className='text-lg'>Few things are harder than waiting. So I try my best to make you wait less. Very few places I get such fast delivery.</p>
                    </div>
                </div>
                <div className="bg-white text-black">
                    <div className=' flex justify-center '>
                        <HiChatAlt2 className='specialy-icon' />
                    </div>
                    <div className="mt-6 p-5" style={{ textAlign: 'justify' }}>
                        <h2 className="font-bold text-2xl"> SUPPER SUPPORT</h2>
                        <p className='text-lg'>No need to cause trouble. A problem is something you create. So I always keep my support system open for you so that you can solve any problem quickly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSpecialty;