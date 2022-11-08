import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
        </div>
    );
};

export default HomeServices;