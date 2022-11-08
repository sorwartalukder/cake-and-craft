import React from 'react';
import './Services.css'
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const services = useLoaderData()
    return (
        <div>
            <h1 className='text-center text-4xl mt-8 py-4'>Total services: {services.length}</h1>
            <div className='grid lg:grid-cols-3 gap-20 services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;