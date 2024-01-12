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

const Notice = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 110px;
    background-color:#F6F6F6;
    display: flex;
    padding: 10px;
    @media (max-width: 630px) {
        flex-direction: column;
    }
    & h1 {
        @media (max-width: 630px) {
            width: 100%;
            text-align: center;
        }
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
            @media (max-width: 630px) {
                width: 100%;
                text-align: center;
            }
            @media (max-width: 445px) {
                white-space:nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
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
    @media (max-width: 730px) {
        width: 100%;
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
    height: 300px;
`;

const Buswrap = styled.div`
    width: 80%;
    height: 80%;
    margin: 0 auto;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        @media (max-width: 730px) {
            object-fit: none;
        }
    }

    & + div {
        text-align: center;
        font-weight: 200 !important;
        @media (max-width: 830px) {
            font-size: .95em !important;
        }
        @media (max-width: 700px) {
            font-size: .85em !important;
        }
        @media (max-width: 354px) {
            display: none;
        }
    }
`;


const Contents1 = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div>
            <Notice>
                <h1 className="m-0 col-2">공지사항</h1>
                <ul className="col-12 slides">
                    {
                        Data[0].swiper[1].swiper2.map((e,i)=>{
                            return(
                                <li className={`one${i}`}>{e.event}</li>
                            )
                        })
                    }
                </ul>
            </Notice>
            <Popular>
                <Popularsubject>
                    <PSubject className="m-0">오늘은 어떤 버스를 예약해볼까요?</PSubject>
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