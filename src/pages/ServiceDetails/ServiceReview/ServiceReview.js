import React, { useContext, useState } from 'react';
import { HiStar } from 'react-icons/hi';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceReview = ({ service }) => {
    const { user } = useContext(AuthContext)
    const [ratings, setRatings] = useState(0)
    console.log(service)
    const { _id, title, img, description, price, ingredient } = service;
    const stars = [1, 2, 3, 4, 5];

    const handleReviews = event => {
        event.preventDefault()
        const feedback = event.target.message.value;
        const review = {
            serviceId: _id,
            userId: user.uid,
            feedback,
            ratings
        }
    }

    return (
        <div className='services-container py-24'>
            <hr style={{ border: '3px solid' }} />

            <div className=' mt-11' style={{ width: '250px' }}>
                <form onSubmit={handleReviews}>
                    <h2 className="text-3xl font-semibold">Review</h2>

                    <div className='flex items-center'>
                        <div className="avatar online mt-4">
                            <div className="w-11 rounded-full ring ring-primary">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </div>
                        <h5 className='text-xl font-semibold mt-3 ml-4'>{user.displayName}</h5>
                    </div>

                    <div className='flex text-xl mt-4'>
                        <h6 className='mr-3'>Ratings: </h6>
                        <div className='text-3xl text-orange-500'>
                            {
                                stars.map(star => <button
                                    key={star}
                                    onClick={() => setRatings(star)}
                                ><HiStar /></button>)
                            }
                        </div>
                    </div>
                    <textarea required name='message' className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your message" >
                    </textarea>

                    <input className='btn btn-active btn-primary px-14 block mx-auto' type="submit" value="feedback" />
                </form>
            </div>
        </div>
    );
};

export default ServiceReview;