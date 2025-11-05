import React from 'react';
import Banner from '../../components/Banner/Banner';
import Trusted from '../../components/Trusted/Trusted';
import Hero from '../Hero/Hero';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trusted></Trusted>
            <Hero></Hero>
        </div>
    );
};

export default Home;