import React from 'react';
import Slider from './Slider'
import Contents1 from './Contents1';
import Contents2 from './Contents2';
import Contents3 from './Contents3';
import Contents4 from './Contents4';
import Mapinfo from './Mapinfo';
import Contents5 from './Contents5';

const Main = () => {
    return (
        <div>
            <Slider></Slider>
            <Contents1></Contents1>
            <Contents2></Contents2>
            <Contents3></Contents3>
            <Contents4></Contents4>
            <Mapinfo></Mapinfo>
            <Contents5></Contents5>
        </div>
    );
};

export default Main;