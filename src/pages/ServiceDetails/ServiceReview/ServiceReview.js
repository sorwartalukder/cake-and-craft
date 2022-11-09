import React, { useState } from 'react';
import { HiStar } from 'react-icons/hi';

const ServiceReview = ({ service }) => {
    const [ratings, setRatings] = useState(0)
    const { _id, title, img, description, price, ingredient } = service;
    const stars = [1, 2, 3, 4, 5];

    const handleReviews = event => {
        event.preventDefault()
        const feedback = event.target.message.value;

    }

    return (
        <div className='services-container py-24'>
            <hr style={{ border: '3px solid' }} />

            <div className=' mt-11' style={{ width: '250px' }}>
                <form onSubmit={handleReviews}>
                    <h2 className="text-3xl font-semibold">Review</h2>
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