import React from 'react';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeServices from '../HomeServices/HomeServices';
import ServicesSpecialty from '../ServicesSpecialty/ServicesSpecialty';

const Home = () => {

    return (
        <div className='bg-slate-200'>
            <HomeHeader></HomeHeader>
            <ServicesSpecialty></ServicesSpecialty>
            <HomeServices></HomeServices>
            <HomeAbout></HomeAbout>
        </div>
    );
};

export default Home;