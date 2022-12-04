import React from 'react';
import { FaUser } from 'react-icons/fa';

const ServiceReview = ({ serviceReview }) => {
    const { feedback, userName, userPhotoURL } = serviceReview;
    return (
        <div className='mt-5'>
            <div className="avatar online ">
                <div className="w-7 rounded-full ring ring-primary">
                    {
                        userPhotoURL ?
                            <img src={userPhotoURL} alt='' />
                            :
                            <p className='text-3xl'><FaUser /></p>
                    }
                </div>
            </div>
            <div className='bg-zinc-400 rounded-xl px-3'>
                <h5 className='text-xl font-semibold  '>{userName}</h5>
                <p>{feedback}</p>
            </div>


        </div>
    );
};

export default ServiceReview;