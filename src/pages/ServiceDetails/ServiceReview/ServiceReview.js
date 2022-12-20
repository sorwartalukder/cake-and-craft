import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceReview = ({ serviceReview }) => {
    const { feedback, userName, userPhotoURL, userId } = serviceReview;
    console.log(serviceReview)
    return (
        <div className='mt-5 bg-zinc-400 rounded-xl p-3'>
            <Link to={`/userDetails/${userId}`}>
                <div className=' flex items-center'>
                    <div className="avatar online">
                        <div className="w-7 rounded-full ring ring-primary  hover:ring-blue-700 hover:shadow-md hover:shadow-yellow-500">
                            {
                                userPhotoURL ?
                                    <img src={userPhotoURL} alt='' />
                                    :
                                    <p className='text-3xl'><FaUser /></p>
                            }
                        </div>
                    </div>
                    <h5 className='text-xl font-semibold  ml-3 hover:text-primary'>{userName}</h5>
                </div>
            </Link>

            <p className='ml-5'>{feedback}</p>
        </div>
    );
};

export default ServiceReview;