import React from 'react';
import C2 from '../scss/Contents2.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Data from '../Data/Data.json';
import { FreeMode, Pagination } from 'swiper/modules';

const Contents2 = () => {
    return (
        <div className={`${C2.c2main}`}>
            <h2>프리맥스 예약 시스템</h2>
            <div className={`${C2.c2swiperwr}`}>
                <Swiper slidesPerView={3} spaceBetween={30} modules={[FreeMode]}>
                    {
                        Data[0].swiper[2].swiper3.map((e,i)=>{
                            return(
                                <SwiperSlide className={`${C2.swiperslide}`}>
                                    <div className={`${C2.swiperimgwrap}`}><img src={e.swiper3img} alt={i} /></div>
                                    <div className={`${C2.swipertextpart}`}>
                                        <div>{e.swiper3text1}({e.swiper3arrive})</div>
                                        <div>{e.swiper3ment.split('/').map((ee,ii)=>{
                                            return(
                                                <div>{ee}</div>
                                            )
                                        })}</div>
                                        <div>
                                            <div>성인 ${e.swiperprice.split('/')[0]}</div>
                                            <div>청소년 ${e.swiperprice.split('/')[1]}</div>
                                        </div>
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

export default Contents2;