import React, { useState }from 'react';
import Slide from '../scss/slide.module.scss';

import {Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Controller } from 'swiper/modules';

import Data from '../Data/Data.json';

const Slider = () => {
    const [fswiper,setfswiper] = useState(null);
    const [sswiper,setsswiper] = useState(null);


    return (
        <div className={`${Slide.slidewrap} newsliderwrap`}>
            <div className={`${Slide.slidenest} d-flex`}>
                <Swiper className={`${Slide.mainslide1} col-6`} navigation={true} modules={[Controller,Navigation]} onSwiper={setfswiper} controller={{control: sswiper}}>
                    {
                        Data[0].swiper[0].swiper1.map((e,i)=>{
                            return(
                                <SwiperSlide>
                                    <img src={e.swiper1img} alt={i}></img>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <Swiper className={`${Slide.mainslide2} col-6`} modules={[Controller]} onSwiper={setsswiper} controller={{control: fswiper}}>
                    {
                        Data[0].swiper[1].swiper2.map((ee,ii)=>{
                            return(
                                <SwiperSlide className={`${Slide.mainslide2slide}`} >
                                <div>
                                    <h2>{

                                        ee.swiper2text1.split('/').map((첫첫,둘둘)=>{
                                            return(
                                                <div>{첫첫}</div>
                                            )
                                        })
                                        }</h2>
                                    <p>{ee.swiper2text2}</p>
                                    <p>{ee.swiper2lasttext}</p>
                                </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;