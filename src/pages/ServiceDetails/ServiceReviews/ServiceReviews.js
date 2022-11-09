import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServiceReview from '../ServiceReview/ServiceReview';

const ServiceReviews = ({ service }) => {
    const { user } = useContext(AuthContext)
    const [ratings, setRatings] = useState(0)
    const [serviceReviews, setServiceReviews] = useState([])
    const { _id } = service;
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
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    event.target.reset()
                }
                console.log(data)
            })
    }
    useEffect(() => {
        console.log()
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setServiceReviews(data)
            })
    }, [_id])

    return (
        <div className='services-container py-24'>
            <hr style={{ border: '3px solid' }} />

            <div className=' mt-11' style={{ width: '250px' }}>
                <form onSubmit={handleReviews}>
                    <h2 className="text-3xl font-semibold">Review</h2>

                    <div className='flex items-center'>
                        <div className="avatar online mt-4">
                            <div className="w-11 rounded-full ring ring-primary">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} alt='' />
                                        :
                                        <p className='text-5xl'><FaUser /></p>

                                }
                                {/* <img src={user?.photoURL} alt='' /> */}
                            </div>
                        </div>
                        <h5 className='text-xl font-semibold mt-3 ml-4'>{user.displayName}</h5>
                    </div>

                    <div className='flex text-xl mt-4'>
                        <h6 className='mr-3'>Ratings: </h6>
                        <div className='flex text-3xl text-orange-500'>
                            {
                                stars.map(star => <p
                                    key={star}
                                    onClick={() => setRatings(star)}
                                ><HiStar /></p>)
                            }
                        </div>
                    </div>
                    <textarea required name='message' className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your message" >
                    </textarea>

                    <input className='btn btn-active btn-primary px-14 block mx-auto' type="submit" value="feedback" />
                </form>
            </div>


            <div>
                {
                    serviceReviews.map(serviceReview => <ServiceReview
                        key={serviceReview._id}
                        serviceReview={serviceReview}

                    ></ServiceReview>)
                }

            </div>
        </div>
    );
};

export default ServiceReviews;