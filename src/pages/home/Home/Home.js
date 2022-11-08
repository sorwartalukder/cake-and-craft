import React from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeServices from '../HomeServices/HomeServices';
import ServicesSpecialty from '../ServicesSpecialty/ServicesSpecialty';

const Home = () => {

    return (
        <div className='bg-slate-200'>
            <HomeHeader></HomeHeader>
            <ServicesSpecialty></ServicesSpecialty>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;