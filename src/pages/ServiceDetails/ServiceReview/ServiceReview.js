import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceReview = ({ serviceReview }) => {
    const { feedback } = serviceReview;
    const { user } = useContext(AuthContext)
    return (
        <div className='mt-3'>
            <div className='flex items-center'>
                <div className="avatar online ">
                    <div className="w-7 rounded-full ring ring-primary">
                        {
                            user?.photoURL ?
                                <img src={user?.photoURL} alt='' />
                                :
                                <p className='text-3xl'><FaUser /></p>
                        }
                    </div>
                </div>
                <div className='bg-zinc-400 rounded-xl px-3 mt-3 ml-2'>
                    <h5 className='text-xl font-semibold  '>{user.displayName}</h5>
                    <p>{feedback}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceReview;