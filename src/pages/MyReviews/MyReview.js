import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = ({ userReview, handleDeleteReview }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, feedback } = userReview;

    return (
        <div className='mb-5'>
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
            <div className='bg-zinc-400 rounded-xl px-3  '>
                <h5 className='text-xl font-semibold  '>{user.displayName}</h5>
                <p>{feedback}</p>
                <div className="card-actions justify-end py-2">
                    <button className="btn btn-primary">Update</button>
                    <button onClick={() => handleDeleteReview(_id)} className="btn bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReview;