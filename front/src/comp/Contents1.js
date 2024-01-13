import React, { useState, useEffect }from 'react';
import Data from '../Data/Data.json';
import gbus from '../Data/gyeonggibus.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Pagination, Navigation, Controller, EffectFade } from 'swiper/modules';
import { Fade } from 'react-bootstrap';

const Popular = styled.div`
    max-width: 60%;
    margin: 0 auto;
    @media (max-width: 730px) {
        max-width: 100%;
        margin: 0;
    }
`;

const Popularsubject = styled.div`
     display: flex;
     margin-bottom: 3%;
     @media (max-width: 730px) {
        padding: 0 20%;
     }
`;

const PSubject = styled.h1`
    font-size: 1.6em;
    padding-right: 2em;
    line-height: 40px;
    @media (max-width: 730px) {
        width: 100%;
    }
    @media (max-width: 675px) {
        font-size: 1.4em;
        line-height: 1.4em;
    }
    @media (max-width: 600px) {
        font-size: 1.3em;
        line-height: 1.3em;
    }
`;

const PTab = styled.div`
    @media (max-width: 1010px) {
        margin-top: 3%;
    }
`;

const Best = styled.button`
    text-decoration: none;
    background-color: #f6f6f6;
    color: black;
    padding: 8px 15px;
    font-weight: 200 !important;
    border-radius: 30px;
    border: none;
    margin-right: 1em;
    &.btnactive {
        background-color: #5f87f4;
        color: white;
    }
`;

const Weekend = styled.button`
    text-decoration: none;
    background-color: #f6f6f6;
    color: black;
    padding: 8px 15px;
    font-weight: 200 !important;
    border-radius: 30px;
    border: none;

    &.btnactive {
        background-color: #5f87f4;
        color: white;
    }
`

const PopularSwiper = styled.div`
    width: 100%;
    height: 500px;
    padding-bottom: 80px;
`;

const Buswrap = styled.div`
    width: 100%;
    height: 50%;
    margin: 0 auto;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media (max-width: 730px) {
            object-fit: cover;
        }
    }

    & + div {
        height: 20%;
        text-align: center;
        font-weight: 200 !important;
        & img {
            width: 50%;
            height: 100%;
            object-fit: cover;
        }
       
        & + div {
            text-align: center;
            font-size: 1.3em;
            line-height: 1.3em;
            @media (max-width: 730px) {
                padding-top: 60px;
                font-size: 1.6em;
            }
        }
    }
`;

const Topmenu = styled.div`
    max-width: 60%;
    margin: 0 auto;
    align-items: stretch;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 70px;
    gap: 60px;
    @media (max-width: 730px) {
        display: none !important;
    }
    & a {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        text-decoration: none;
    }
    & a div:first-child {

        max-width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        transtion: all .4s;
        position: relative;
        @media (max-width: 1270px) {
            max-width: 60px;
            height: 60px;
        }
        @media (max-width: 940px) {
            max-width: 35px;
            height: 35px;
        }
        }
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    & a div:last-child {
        text-align: center;
        padding-top: 20px;
        color: black;
        font-weight: 200 !important;
        @media (max-width: 1030px) {
            font-size: .7em;
        }
        @media (max-width: 940px) {
            font-size: 0;
        }
    }
    & a:hover div:last-child {
        color: #5f87f4;
    }
    & a:hover div:first-child::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
    }
`;


const Contents1 = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const swiperbreakpoint = {
        1130: {
            slidesPerView: 4
        },
        760: {
            slidesPerView: 2
        }
    }

    return (
        <div>
            <Topmenu className="d-flex">
                {
                    Data[0].swiper[1].swiper2.map((eee,iii)=>{
                        return(
                            <Link>
                                <div><img src={eee.swiper2img} alt={iii}></img></div>
                                <div>{eee.swiper2ject}</div>
                            </Link>
                        );
                    })
                }
            </Topmenu>
            <Popular>
                <Popularsubject>
                    <PSubject className="m-0">오늘은 어떤 버스를 예약해볼까요?</PSubject>
                </Popularsubject>
                <PopularSwiper>
                    <Swiper breakpoints={swiperbreakpoint} initialSlide={1} onSwiper={setSwiperRef} modules={[Navigation]} navigation={true} loop={true} slidesPerView={1} centeredSlides={true} spaceBetween={10} className="bestswiper">
                        {
                            Data[0].swiper[2].swiper3best.map((e,i)=>{
                                return(
                                    <SwiperSlide>
                                        <Buswrap><img src={e.bestimg} alt={i}></img></Buswrap>
                                        <div><img src={e.logo} alt="logo"></img></div>
                                        <div className="bestinfo">{e.bestinfo}</div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    
                </PopularSwiper>
            </Popular>
        </div>
    );
};

export default Contents1;