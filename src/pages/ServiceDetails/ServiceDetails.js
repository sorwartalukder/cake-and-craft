import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceReview from './ServiceReview/ServiceReview';
import ServiceReviews from './ServiceReviews/ServiceReviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [serviceReviews, setServiceReviews] = useState([])
    const service = useLoaderData();
    const { _id, title, img, description, price, ingredient } = service;

    useEffect(() => {
        console.log()
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setServiceReviews(data)
            })
    }, [_id])
    return (
        <div className='services-container pt-10'>
            <div className="w-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="text-3xl font-bold">
                        {title}
                    </h2>
                    <p style={{ textAlign: 'justify' }}>{description}</p>
                    <div className='my-5 text-lg font-semibold'>
                        <ol>
                            {
                                ingredient.map((ingred, index) => <li
                                    key={index}
                                >{index + 1}. {ingred}</li>)
                            }
                        </ol>
                    </div>
                    <h4 className="card-title">Price:<span style={{ color: 'darkorange' }}>{price}TK</span></h4>
                    <h4 className="card-title">Ratting:<span style={{ color: 'darkorange' }}></span></h4>
                    <Link ><button className="badge badge-outline px-10 py-5 text-2xl font-bold  text-blue-900 my-5 ">Buy Now</button></Link>
                </div>
            </div>

            <div>
                <hr style={{ border: '3px solid' }} />

                {
                    user ?
                        <ServiceReviews service={service}></ServiceReviews>
                        :
                        <div className='my-2'>
                            <h4 className="text-2xl font-semibold"> Please login to add a review.</h4>
                            <Link to='/login'><button className="btn btn-active btn-primary text-lg mt-5 px-12">log in</button></Link>
                        </div>
                }
                <div className='mb-10'>
                    <h2 className="text-3xl font-semibold">Review: {serviceReviews.length}</h2>

                    {
                        serviceReviews.map(serviceReview => <ServiceReview
                            key={serviceReview._id}
                            serviceReview={serviceReview}
                        ></ServiceReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;