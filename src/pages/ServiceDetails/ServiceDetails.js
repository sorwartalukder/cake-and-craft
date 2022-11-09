import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceReview from './ServiceReview/ServiceReview';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, title, img, description, price, ingredient } = service;
    return (
        <div className='services-container'>
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
            <ServiceReview service={service} />
        </div>
    );
};

export default ServiceDetails;