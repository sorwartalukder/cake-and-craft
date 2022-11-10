import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './Service/Service';
import useSetTitle from '../../hooks/useSetTitle';

const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useSetTitle('Services - Cake & Craft')

    useEffect(() => {
        fetch('https://cake-and-craft-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false)
            })
    }, [setIsLoading])
    return (
        <div className='mb-40'>
            {
                isLoading ?
                    <>
                        <div className='text-center mt-10'>
                            <button className="btn loading bg-blue-900 text-2xl">loading</button>
                        </div>
                    </>
                    :
                    <>
                        <h1 className='text-center text-4xl mt-8 py-4'>Total services: {services.length}</h1>
                        <div className='grid lg:grid-cols-3 gap-20 services-container'>
                            {
                                services.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                        </div>
                    </>
            }


        </div>
    );
};

export default Services;