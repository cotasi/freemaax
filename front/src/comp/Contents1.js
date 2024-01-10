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
    function csvToJSON(csv_string){

        // 1. 문자열을 줄바꿈으로 구분 => 배열에 저장
        const rows = csv_string.split("\r\n");
        
        // 줄바꿈을 \n으로만 구분해야하는 경우, 아래 코드 사용
        // const rows = csv_string.split("\n");
      
    
        // 2. 빈 배열 생성: CSV의 각 행을 담을 JSON 객체임
        const jsonArray = [];
    
      
        // 3. 제목 행 추출 후, 콤마로 구분 => 배열에 저장
        const header = rows[0].split(",");
    
      
        // 4. 내용 행 전체를 객체로 만들어, jsonArray에 담기
        for(let i = 1; i < rows.length; i++){
      
            // 빈 객체 생성: 각 내용 행을 객체로 만들어 담아둘 객체임
            let obj = {};
    
            // 각 내용 행을 콤마로 구분
            let row = rows[i].split(",");
      
            // 각 내용행을 {제목1:내용1, 제목2:내용2, ...} 형태의 객체로 생성
            for(let j=0; j < header.length; j++){
                obj[header[j]] = row[j];
            }
      
            // 각 내용 행의 객체를 jsonArray배열에 담기
            jsonArray.push(obj);
      
        }
        
        // 5. 완성된 JSON 객체 배열 반환
        return jsonArray;
    
        // 문자열 형태의 JSON으로 반환할 경우, 아래 코드 사용
        // return JSON.stringify(jsonArray);
    }

    const csv_string = `업체명,전화번호,차고지,대표자,노선번호,운행대수,예비운행대수,소요시간(분),운행거리(km),배차간격(분),첫차,막차,운행구간
    영도여객㈜,051-412-3440,부산광역시 영도구 해양로 128(청학동),이막례,영도구1,3,1,36,8.8,18,6:20,21:45,홈플러스-대교사거리-강남병원-흰여울문화마을-유림아파트
    영도여객㈜,051-412-3440,부산광역시 영도구 해양로 128(청학동),이막례,영도구2,3,0,36,7.8,18,6:15,21:35,영선동반도보라아파트-대평동-(구)전차종점-선용품유통센터-영선동반도보라아파트-남항초등학교-흰여울문화마을-체육공원
    ㈜대일버스,051-403-7782,부산광역시 영도구 조내기로 74(청학동),최재영,영도구5,10,1,80,45,19,6:00,22:25,동삼그린힐-영도구청-고신대-중복도로-이송도-남포역-연안부두
    ㈜대일버스,051-403-7782,부산광역시 영도구 조내기로 74(청학동),최재영,영도구7,1,0,18,5.3,30,6:00,22:00,청학동시장-부산은행-미주아파트-광명고-롯데낙천대-82번종점-청학동시장`;

    const busan_json = csvToJSON(csv_string);

    console.log(busan_json);


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