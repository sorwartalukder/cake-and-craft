import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = ({ userReview, handleDeleteReview }) => {
    const { user } = useContext(AuthContext)
    const { _id, serviceName, feedback } = userReview;
    return (
        <div className='mb-5'>
            <Link to='/dashboard'>
                <div className="avatar online ">
                    <div className="w-7 rounded-full ring ring-primary hover:shadow-md hover:shadow-white hover:ring-blue-400">
                        {
                            user?.photoURL ?
                                <img src={user?.photoURL} alt='' />
                                :
                                <p className='text-3xl'><FaUser /></p>
                        }
                    </div>
                </div>
            </Link>
            <div className='bg-zinc-400 rounded-xl px-3  '>
                <Link to='/dashboard'>
                    <h5 className='text-xl font-semibold  text-blue-700 hover:text-blue-600'>{user.displayName}</h5>
                </Link>
                <h5 className='font-semibold  '>Service: {serviceName}</h5>
                <p>{feedback}</p>
                <div className="card-actions justify-end py-2">
                    <Link to={`/dashboard/update/review/${_id}`} className="btn btn-primary bg-gradient-to-r from-slate-900 to-yellow-600 border-0 btn-sm text-white hover:shadow-md hover:shadow-yellow-600">Update</Link>
                    <button onClick={() => handleDeleteReview(_id)} className="btn btn-sm btn-error hover:shadow-md hover:shadow-red-500">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReview;