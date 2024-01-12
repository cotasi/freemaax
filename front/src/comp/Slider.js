import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Pagination, Navigation, Controller, Scrollbar } from 'swiper/modules';

import Data from '../Data/Data.json';


const Slider = () => {


    const Slidermain = styled.div`
        width: 100%;
        height: 400px;

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
        height: 100%;
        background-color: white;
    `;

    const Images = styled.img`
        width: 100%;
        height: 100%;
        object-fit:contain;
        opacity: .4;
    `

    const Textwrap = styled.div`
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
           
       @media (max-width: 730px) {
            top: 78%;
            width: 100%;
       }
    `;

    const Textdivide = styled.div`
        &:first-of-type {
            font-size: 2.1em;
            letter-spacing: -0.051em;
            @media (max-width: 430px) {
                font-size: 1.8em;
            }
            @media (max-width: 360px) {
                font-size: 1.5em;
            }
            @media (max-width: 310px) {
                font-size: 1.2em;
            }
        }
        &:nth-of-type(2) {
            font-size: 2.1em;
            @media (max-width: 430px) {
                font-size: 1.8em;
            }
            @media (max-width: 360px) {
                font-size: 1.5em;
            }
            @media (max-width: 310px) {
                font-size: 1.2em;
            }
        }
        @media (max-width: 730px) {
            text-align: center;
        }
    `;

    const Formbtn = styled.button`
        border: none;
        background-color: #5f87f4;
        padding: 0;
        padding: 10px 26px;
        border-radius: 30px;
        font-size: 0.9em;
        color: white;
        margin-top: 5%;
        @media (max-width: 730px) {
            margin: 0 30%;
            width: 40%;
            text-align: center;
            margin-top: 5%;
        }
        @media (max-width: 360px) {
            padding: 7px 20px;
            font-size: 0.8em;
        }
        @media (max-width: 310px) {
            padding: 5px 17px;
            font-size: 0.7em;
        }
        
    `;

    const Lower = styled.div`
        font-weight: 200 !important;
        padding-top: 6%;
        @media (max-width: 730px) {
            text-align: center;
            padding-top: 3%;
        }
        @media (max-width: 310px) {
           font-size: 0.8em;
        }
    `;


    return (
        <>
            <Slidermain className="topswiper">
               <Swiper navigation={true} modules={[Navigation,Pagination,Scrollbar]} scrollbar={{hide: true}}>
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
                                                        <>
                                                        <Textdivide>{첫}</Textdivide>
                                                        </>
                                                    )
                                                })
                                            }
                                            <Lower>{e.cant}</Lower>
                                            <Formbtn>지금 상담</Formbtn>
                                            </Textwrap>
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