import React, { useState, useEffect }from 'react';
import C1 from '../scss/Contents1.module.scss';
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

const Notice = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color:#F6F6F6;
    display: flex;
    padding: 10px;
    & h1 {
        font-size: .9em;
        font-weight: 200 !important;
        line-height: 20px;
    }

    & ul {
        height: 20px;
        overflow: hidden;
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
        & li {
            font-size: .9em;
            font-weight: 200 !important;
            position: absolute;
            &:nth-child(1) {
                left: 0;
                top: 0;
            }
            &:nth-child(2) {
                left: 0;
                top: 20px;
            }
            &:nth-child(3) {
                left: 0;
                top: 40px;
            }
            &:nth-child(4) {
                left: 0;
                top: 60px;
            }
            &:nth-child(5) {
                left: 0;
                top: 60px;
            }
        }
    }
`;

const Popular = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const Popularsubject = styled.div`
     display: flex;
     margin-bottom: 3%;
`;

const PSubject = styled.h1`
    font-size: 1.3em;
    padding-right: 2em;
    line-height: 40px;
`;

const PTab = styled.div`

`;

const Best = styled.button`
    text-decoration: none;
    background-color: #f6f6f6;
    color: black;
    padding: 8px 15px;
    font-weight: 200 !important;
    border-radius: 30px;
    border: none;
    margin-right: 2em;
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
    height: 300px;
`;

const Buswrap = styled.div`
    width: 80%;
    height: 80%;
    margin: 0 auto;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & + div {
        text-align: center;
        font-weight: 200 !important;
    }
`;


const Contents1 = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div className={`${C1.backg}`}>
            <Notice>
                <h1 className="m-0 col-2">공지사항</h1>
                <ul className="col-12 slides">
                    {
                        Data[0].swiper[1].swiper2.map((e,i)=>{
                            return(
                                <li className={`one${i}`} style={{transform: `translateY(${e.swiperslide})`}}>{e.event}</li>
                            )
                        })
                    }
                </ul>
            </Notice>
            <Popular>
                <Popularsubject>
                    <PSubject className="m-0">오늘은 어떤 버스를 예약해볼까요?</PSubject>
                    <PTab>
                        <Best className="btnactive">베스트</Best>
                        <Weekend>이번주 베스트</Weekend>
                    </PTab>
                </Popularsubject>
                <PopularSwiper>
                    <Swiper onSwiper={setSwiperRef} modules={[Navigation]} navigation={true} slidesPerView={3} centeredSlides={true} spaceBetween={10} className="bestswiper">
                        {
                            Data[0].swiper[2].swiper3best.map((e,i)=>{
                                return(
                                    <SwiperSlide>
                                        <Buswrap><img src={e.bestimg} alt={i}></img></Buswrap>
                                        <div>{e.bestinfo}</div>
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