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
import 'swiper/css/scrollbar';

// import required modules
import { FreeMode, Autoplay, Pagination, Navigation, Controller, EffectFade, Scrollbar } from 'swiper/modules';
import { Fade } from 'react-bootstrap';

const Subcript = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-bottom: 5%;
    & > h2 {
        font-size: 1.6em;
        padding-bottom: 2%;
    }

    & > p {
        font-size: .9em;
        font-weight: 200 !important;
        padding-bottom: 5%;
    }
`;

const PhotoSwiper = styled.div`
    width: 100%;
    height: 300px;
`;

const LegendPhoto = styled.div`
    height: 100%;
`;

const Imgprops = styled.div`
    background-image: url(${(props)=>props.img1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    position: relative;
    &.imgon {
        background-image: url(${(props)=>props.img2});
    }
`;

const Phototext = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
    padding-bottom: 6%;
    color: white;
    font-weight: 200 !important;
`;

const Contents2 = () => {
    const [swiperRefs, setSwiperRefs] = useState(null);

  /*   const Interval = useEffect(()=>{
        setInterval(()=>{
            document.querySelector('.imgswiper .swiper-slide > div > div:first-child').classList.add('imgon')
        },100)
    },[]);
    clearInterval(Interval);

    const Intervalout = useEffect(()=>{
        setInterval(()=>{
            document.querySelector('.imgswiper .swiper-slide > div > div:first-child').classList.remove('imgon')
        },100);
    },[]);
    clearInterval(Intervalout); */


    return (
        <div>
           <Subcript>
                <h2>예약 시스템 혜택</h2>
                <p>예약 시스템을 이용하시는 VIP 고객님께 다음과 같은 혜택을 제공합니다.</p>
                <PhotoSwiper>
                    <Swiper onSwiper={setSwiperRefs} scrollbar={{hide: true,}} modules={[Navigation,Scrollbar,Pagination,Autoplay]} slidesPerView={3} centeredSlides={true} spaceBetween={10} /* autoplay={{delay:2500,disableOnInteraction: false,}} */ className="imgswiper">
                        {
                            Data[0].swiper[3].fassionswiper.map((ee,ii)=>{
                                return(
                                    <SwiperSlide>
                                        <LegendPhoto /* onMouseEnter={Interval} onMouseOut={Intervalout} */>
                                            <Imgprops img1={ee.img1} img2={ee.img2} img3={ee.img3}></Imgprops>
                                            <Phototext>{ee.texter}</Phototext>
                                        </LegendPhoto>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </PhotoSwiper>
            </Subcript> 
        </div>
    );
};

export default Contents2;