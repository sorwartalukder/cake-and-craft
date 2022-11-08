import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Service from '../../Serviecs/Service/Service';


const HomeServices = () => {
    const homeSvrviecs = useLoaderData()
    return (
        <div>
            <h1 className='text-center text-4xl mt-8 py-4'>Special services</h1>
            <div className='grid lg:grid-cols-3 gap-20 services-container'>
                {
                    homeSvrviecs.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-active btn-primary text-lg mt-5 px-12">See All<HiArrowNarrowRight className='ml-3 text-white' /></button></Link>
            </div>
        </div>
    );
};

export default HomeServices;