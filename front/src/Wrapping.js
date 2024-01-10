import React from 'react';
import HeaderAll from './comp/HeaderAll';
import Main from './comp/Main';
import Query from './comp/Query';
import { Route, Routes } from 'react-router-dom';

const Wrapping = () => {
    return (
        <div>
            <HeaderAll />
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route path="/sangdam/shinchung" element={<Query></Query>}></Route>
            </Routes>
        </div>
    );
};

export default Wrapping;