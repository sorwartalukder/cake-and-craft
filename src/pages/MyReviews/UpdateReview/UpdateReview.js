import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Header from '../../shared/Header/Header';

const UpdateReview = () => {
    const review = useLoaderData()
    const navigate = useNavigate()
    const { _id, feedback, serviceName } = review;


    const handleUpdateReview = (event) => {
        event.preventDefault()
        const feedback = event.target.feedback.value;

        fetch(`http://localhost:5000/update/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback })
        })
            .then(res => res.json())
            .then(data => {
                navigate('/userReviews')
            })

    }
    return (
        <div>
            <Header />
            <div className='w-11/12 md:w-2/3 lg:w-1/3 mx-auto my-24 bg-gray-900 p-16 text-white rounded-xl'>

                <form onSubmit={handleUpdateReview}>
                    <div >
                        <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Update <br />{serviceName} service review</h2>

                        <textarea required name='feedback' className="input input-ghost input-bordered h-24 w-full mt-4" defaultValue={feedback} >
                        </textarea>

                        <input className='btn btn-active btn-primary mt-8 block mx-auto px-14' type="submit" value="update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;