import React, { useState, useEffect }from 'react';
import C1 from '../scss/Contents1.module.scss';
import Data from '../Data/Data.json';
import gbus from '../Data/gyeonggibus.json';
import styled from 'styled-components';

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

const {kakao} = window;

const Contents1 = () => {
    const [firstswiper,setfirstswiper] = useState(null);
    const [secondswiper,setsecondswiper] = useState(null);

    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701,126.570667),
            level:3
        }
        const map = new kakao.maps.Map(container,options);
    })

    return (
        <div className={`${C1.backg}`}>
            <h2>버스 지역 선택하기</h2>
            <div className={`${C1.swiperwrap}`}>
                <Swiper modules={[Controller,Pagination,Navigation]} onSwiper={setfirstswiper} navigation={true} controller={{control: secondswiper}} className={`${C1.regionswiper} reswiper`}>
                    {
                        Data[1].choice.map((eeee,iiii)=>{
                            return(
                                <SwiperSlide key={iiii} className={`${C1.slideflex}`}>
                                    <div>{eeee.region}</div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <Swiper effect={Fade} navigation={true} modules={[Controller,Navigation]} onSwiper={setsecondswiper} controller={{ control: firstswiper}} className="twoswiper">
                                <SwiperSlide>
                                    <div id="map" style={{width: "500px",height:"500px"}}></div>
                                </SwiperSlide>
                                <SwiperSlide>1</SwiperSlide>
                                <SwiperSlide>2</SwiperSlide>
                                <SwiperSlide>3</SwiperSlide>
                                <SwiperSlide>4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Contents1;