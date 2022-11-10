import React from 'react';
import useSetTitle from '../../../hooks/useSetTitle';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeServices from '../HomeServices/HomeServices';
import ServicesSpecialty from '../ServicesSpecialty/ServicesSpecialty';

const Home = () => {
    useSetTitle('Cake & Craft')
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