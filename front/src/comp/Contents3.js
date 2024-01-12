import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules'

const Promotionwrap = styled.div`
    width: 100%;
    padding: 1% 0;
    background-color: #333333;
    &>a {
        text-decoration: none;
        color: white;
        display: block;
        text-align: center;
    }
    &>a>span {
        text-align: center;
    }
    &>a>i {
        margin-left: .9em;
    }
`;

const PromotionSwiper = styled.div`
    width: 100%;
    height: 600px;
    background-color: #f6f5ef;
    display: flex;
    align-items: center;
`;

const Wrapwrap = styled.div`
width: 100%;
height: 100%;
& img {
    width: 100%;
    height: 100%;
    object-fit: cover;   
}
`;

const Contents3 = () => {
    const promotion = (e) => {

        document.querySelector(".promotionswiper").classList.toggle('legend');
        document.querySelector(".bi-chevron-down").classList.toggle('btntoggle');
        }


    return (
    <>
        <Promotionwrap>
            <Link onClick={promotion}><span>프로모션 미리보기</span>
            <i class="bi bi-chevron-down"></i>
            </Link>
        </Promotionwrap>
        <PromotionSwiper className="promotionswiper">
            <Swiper initialSlide={1} slidesPerView={3} spaceBetween={60} pagination={{clickable: true}} centeredSlides={true} loop={true} className="prswiper">
                <SwiperSlide>
                    <Wrapwrap><img src="/img/cafe2.jpg" alt="jpg" /></Wrapwrap>
                </SwiperSlide>
                <SwiperSlide>
                    <Wrapwrap><img src="/img/cafe2.jpg" alt="jpg" /></Wrapwrap>
                </SwiperSlide>
                <SwiperSlide>
                    <Wrapwrap><img src="/img/cafe2.jpg" alt="jpg" /></Wrapwrap>
                </SwiperSlide>
                <SwiperSlide>
                    <Wrapwrap><img src="/img/cafe2.jpg" alt="jpg" /></Wrapwrap>
                </SwiperSlide>
                <SwiperSlide>
                    <Wrapwrap><img src="/img/cafe2.jpg" alt="jpg" /></Wrapwrap>
                </SwiperSlide>
                <SwiperSlide>
                    <Wrapwrap><img src="/img/cafe2.jpg" alt="jpg" /></Wrapwrap>
                </SwiperSlide>
                <SwiperSlide>
                    <Wrapwrap><img src="/img/cafe2.jpg" alt="jpg" /></Wrapwrap>
                </SwiperSlide>
            </Swiper>
        </PromotionSwiper>
    </> 
    );
};

export default Contents3;