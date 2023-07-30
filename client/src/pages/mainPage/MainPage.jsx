import React from 'react';
import Hero from '../../widgets/hero/Hero';
import Transition from '../func/Transition';

const MainPage = () => {
    return (
        <>
        <Hero/>
        </>
    );
};

export default Transition(MainPage);