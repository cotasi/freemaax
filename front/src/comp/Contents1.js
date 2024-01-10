import React, { useState }from 'react';
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
import { FreeMode, Pagination, Navigation, Controller } from 'swiper/modules';


const Contents1 = () => {
    const [firstswiper,setfirstswiper] = useState(null);
    const [secondswiper,setsecondswiper] = useState(null);

    const bullet = {
        clickable: true,
        renderBullet: function(i,c) {
            return`<div class=${c}>
                       <div>
                            <div><img src=${Data[1].choice[i].regionimg}></img></div>
                       </div>
                       <div>${Data[1].choice[i].region}</div>
                   </div>`;
        }
    }

    return (
        <div className={`${C1.backg}`}>
            <h2>버스 지역 선택하기</h2>
            <div className={`${C1.swiperwrap}`}>
                <Swiper modules={[Controller,Pagination,Navigation]} onSwiper={setfirstswiper} navigation={true} controller={{control: secondswiper}} pagination={bullet} className={`${C1.regionswiper} reswiper`}>
                    {
                        Data[1].choice.map((eeee,iiii)=>{
                            return(
                                <SwiperSlide key={iiii}></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <Swiper modules={[Controller]} onSwiper={setsecondswiper} controller={{ control: firstswiper}}>
                                <SwiperSlide>
                                    <div className={`${C1.datatable} d-flex`}>
                                        <span className="col">지역</span>
                                        <span className="col">시작점</span>
                                        <span className="col">종점</span>
                                        <span className="col">버스 매니징 넘버</span>
                                    </div>
                                    <div className={`${C1.datacon}`}>
                                        {
                                            gbus.BusStation.row.map((eee,iii)=>{
                                                return(
                                                <div className={`${C1.datacon2} d-flex`}>
                                                    <div className="col">{eee.SIGUN_NM}</div>
                                                    <div className="col">{eee.STATION_NM_INFO}</div>
                                                    <div className="col">{eee.STATION_DIV_NM}</div>
                                                    <div className="col">{eee.STATION_MANAGE_NO}</div>
                                                </div>
                                                )

                                            })
                                        }
                                    </div>
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