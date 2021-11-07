import React from 'react';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;