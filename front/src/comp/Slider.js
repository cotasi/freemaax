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
        background-color: white;
    `;

    const Images = styled.img`
        width: 70%;
        object-fit:cover;
        transform: translateX(30%);
        @media (max-width: 460px) {
            transform: translateY(8%) translateX(25%);
        }
        @media (max-width: 370px) {
            transform: translateY(20%) translateX(25%);
        }
        @media (max-width: 300px) {
            transform: translateY(47%) translateX(25%);
        }
        @media (max-width: 235px) {
            transform: translateY(83%) translateX(25%);
        }
    `

    const Textwrap = styled.div`
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        > div:first-of-type {
            @media (max-width: 1200px) {
                font-size: 1.8em;
            }
            @media (max-width: 1060px) {
                font-size: 1.5em;
            }
            @media (max-width: 970px) {
                font-size: 1.3em;
            }
            @media (max-width: 880px) {
                font-size: 1.15em;
            }
            @media (max-width: 760px) {
                font-size: 1.05em;
            }
            @media (max-width: 700px) {
                font-size: 1.00em;
            }
            @media (max-width: 620px) {
                font-size: .95em;
            }
            @media (max-width: 560px) {
                font-size: .88em;
            }
            @media (max-width: 460px) {
                display: none;
            }
        }
        >div:nth-of-type(2) {
            @media (max-width: 1200px) {
                font-size: 1.8em;
            }
            @media (max-width: 1060px) {
                font-size: 1.5em;
            }
            @media (max-width: 970px) {
                font-size: 1.3em;
            }
            @media (max-width: 880px) {
                font-size: 1.15em;
            }
            @media (max-width: 760px) {
                font-size: 1.05em;
            }
            @media (max-width: 700px) {
                font-size: 1.00em;
            }
            @media (max-width: 620px) {
                font-size: .95em;
            }
            @media (max-width: 560px) {
                font-size: .88em;
            }
            @media (max-width: 460px) {
                display: none;
            }
        }
        @media (max-width: 460px) {
            width: 100%;
        }
    `;

    const Textdivide = styled.div`
        &:first-of-type {
            font-size: 2.1em;
            letter-spacing: -0.051em;
        }
        &:nth-of-type(2) {
            font-size: 2.1em;
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
        @media (max-width: 1200px) {
            font-size: 0.7em;
            padding: 8px 19px;
        }
        @media (max-width: 1060px) {
            font-size: 0.6em;
            padding: 6px 16px;
        }
        @media (max-width: 970px) {
            font-size: 0.5em;
            padding: 5px 15px;
        }
        @media (max-width: 880px) {
            font-size: .4em;
            padding: 4px 14px;
        }
        @media (max-width: 770px) {
            font-size: .35em;
            padding: 3px 13px;
        }
        @media (max-width: 700px) {
            font-size: .30em;
            padding: 2.5px 12.5px;
        }
        @media (max-width: 620px) {
            font-size: .25em;
            padding: 2px 12px;
        }
        @media (max-width: 460px) {
            width: 20%;
            margin: 0 auto;
            text-align: center;
            display: block;
            margin-top: 2%;
        }
    `;

    const Lower = styled.div`
        font-weight: 200 !important;
        padding-top: 6%;
        @media (max-width: 1200px) {
            font-size: 1em;
            padding-top: 4%;
        }
        @media (max-width: 1060px) {
            font-size: .8em;
        }
        @media (max-width: 970px) {
            font-size: .75em;
        }
        @media (max-width: 880px) {
            font-size: .7em;
        }
        @media (max-width: 770px) {
            font-size: .65em;
        }
        @media (max-width: 700px) {
            font-size: .6em;
        }
        @media (max-width: 620px) {
            font-size: .55em;
        }
        @media (max-width: 560px) {
            font-size: .50em;
        }
        @media (max-width: 460px) {
            width: 100%;
            text-align: center;
            padding-top: 6%;
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