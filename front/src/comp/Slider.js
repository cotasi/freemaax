import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Controller } from 'swiper/modules';

import Data from '../Data/Data.json';


const Slider = () => {


    const Slidermain = styled.div`
        width: 100%;
        height: 600px;

    `;

    const Swiperbgwrap = styled.div`
        width: auto;
        height: 100%;
        background-color:${(props) => props.pstyle};
    `;

    const Swipercontainer = styled.div`
        width: 80%;
        margin: 0 auto;
        position: relative;
        height: 100%;
    `;

    const Imagwrap = styled.div`
        width: 100%;
    `;

    const Images = styled.img`
        width: 100%;
        height: 100%;
        object-fit:cover;
    `

    const Textwrap = styled.div`
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    `;

    const Textdivide = styled.div`
        &:first-child {
            font-size: 1.8em;
        }
        &:last-child {
            font-size: 1.5em;
            font-weight: normal;
        }
    `;

    const Formbtn = styled.button`
        position: absolute;
        bottom: 33%;
        left: 0;
        border: none;
        background-color: #5f87f4;
        padding: 0;
        padding: 10px 26px;
        border-radius: 30px;
        font-size: 0.9em;
        color: white;
    `;


    return (
        <>
            <Slidermain className="topswiper">
               <Swiper navigation={true} modules={[Navigation,Pagination]} pagination={{type:'fraction'}}>
                {
                    Data[0].swiper[0].swiper1.map((e,i)=>{
                        return(
                            <SwiperSlide>
                                <Swiperbgwrap pstyle={e.bgc}>
                                    <Swipercontainer>
                                        <Imagwrap><Images src={e.swiper1img} alt={i}></Images></Imagwrap>
                                        <Textwrap>{
                                                e.subject.split('/').map((첫,둘)=>{
                                                    return(
                                                        <Textdivide>{첫}</Textdivide>
                                                    )
                                                })
                                            }</Textwrap>
                                        <Formbtn>지금 상담</Formbtn>
                                    </Swipercontainer>
                                </Swiperbgwrap>
                            </SwiperSlide>
                        )
                    })
                }
               </Swiper>
            </Slidermain>
        </>
    );
};

export default Slider;