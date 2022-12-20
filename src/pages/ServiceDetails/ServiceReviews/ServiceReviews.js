import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const ServiceReviews = ({ service, setNewReview }) => {
    const { user } = useContext(AuthContext)
    const [ratings, setRatings] = useState(0)

    const { _id, title } = service;
    const stars = [1, 2, 3, 4, 5];
    const handleReviews = event => {
        event.preventDefault()
        const feedback = event.target.message.value;
        const review = {
            serviceName: title,
            serviceId: _id,
            userId: user.uid,
            userEmail: user.email || '',
            userName: user.displayName || '',
            userPhotoURL: user.photoURL || '',
            feedback,
            ratings
        }
        fetch('https://cake-and-craft-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setNewReview(review)
                    event.target.reset()
                }
                console.log(data)
            })
    }
    return (
        <div className='services-container pb-5'>

            <div className=' mt-11' style={{ width: '250px' }}>
                <form onSubmit={handleReviews}>

                    <div className='flex items-center'>
                        <div className="avatar online mt-4">
                            <div className="w-11 rounded-full ring ring-primary">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} alt='' />
                                        :
                                        <p className='text-5xl'><FaUser /></p>

                                }
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
                                ><HiStar className='hover:shadow-md hover:shadow-orange-500 hover:rounded-full' /></p>)
                            }
                        </div>
                    </div>
                    <textarea required name='message' className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your message" >
                    </textarea>

                    <input className='btn btn-active btn-primary px-14 block mx-auto hover:shadow-md hover:shadow-yellow-500' type="submit" value="feedback" />
                </form>
            </div>


        </div>
    );
};

export default ServiceReviews;