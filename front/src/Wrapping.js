import React, { useEffect } from 'react';
import HeaderAll from './comp/HeaderAll';
import Main from './comp/Main';
import CI from './comp/CI';
import RealInfo from './comp/RealInfo';
import Notice from './comp/Notice';
import Query from './comp/Query';
import { Route, Routes } from 'react-router-dom';
import Modals from './comp/Modal';
import Footer from './comp/Footer';

const Wrapping = () => {
    useEffect(()=>{
    },[]);

    return (
        <div>
            <HeaderAll />
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route path="/com/ci" element={<CI></CI>}></Route>
                <Route path="/com/real" element={<RealInfo></RealInfo>}></Route>
                <Route path="/com/notice" element={<Notice></Notice>}></Route>
                <Route path="/sangdam/shinchung" element={<Query></Query>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default Wrapping;