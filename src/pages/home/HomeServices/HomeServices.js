import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import Service from '../../Serviecs/Service/Service';


const HomeServices = () => {
    const homeServices = useLoaderData()
    const navigation = useNavigation();
    //data loading spinner
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='mb-24'>
            <h1 className='text-center font-bold text-4xl mt-8 py-4'>Special services</h1>
            <div className='grid lg:grid-cols-3 gap-20 services-container'>
                {
                    homeServices.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn bg-gradient-to-r from-slate-900 to-yellow-600 border-0 text-lg mt-5 px-12 btn-primary hover:shadow-md hover:shadow-yellow-600">See All
                    <HiArrowNarrowRight className='ml-3 text-white' />
                </button>
                </Link>
            </div>
        </div>
    );
};

export default HomeServices;