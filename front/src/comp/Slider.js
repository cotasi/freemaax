import React, { useState,useEffect }from 'react';
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

    const {kakao} = window;

    useEffect(()=>{
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
	        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	        level: 3 //지도의 레벨(확대, 축소 정도)
            };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    },[])



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
                                <div id="map" style={{width:'500px',height:'500px',textAlign:'center'}}></div>
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