import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';
import Header from '../shared/Header/Header';
import MyReview from './MyReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [userReviews, setUserReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useSetTitle('My Reviews- Cake & Craft')

    useEffect(() => {
        fetch(`http://localhost:5000/userReviews/${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                setUserReviews(data)
                setIsLoading(false)
            })
    }, [user?.uid])

    const handleDeleteReview = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    toast.success('deleted review')
                    const remaining = userReviews.filter(userReview => userReview._id !== id)
                    console.log(remaining)
                    setUserReviews(remaining)
                }
            })
    }

    return (
        <div>
            <Header />
            {
                isLoading ?
                    <>
                        <div className='text-center mt-10'>
                            <button className="btn loading bg-blue-900 text-2xl">loading</button>
                        </div>
                    </>
                    :
                    <>
                        <div className='services-container'>
                            <div className='w-11/12 md:w-2/3 lg:w-1/3 mx-auto my-24 bg-gray-900 p-16 text-white rounded-xl'>
                                {
                                    userReviews.length === 0 ?
                                        <h4 className='text-3xl font-semibold'>No review added</h4>
                                        :
                                        <>
                                            {
                                                userReviews.map(userReview => <MyReview
                                                    key={userReview._id}
                                                    userReview={userReview}
                                                    handleDeleteReview={handleDeleteReview}
                                                ></MyReview>)
                                            }
                                        </>
                                }
                            </div>

                        </div>
                    </>
            }
        </div>
    );
};

export default MyReviews;