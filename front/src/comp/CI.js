import React , { useRef, useEffect } from 'react';
import styled from 'styled-components';
import CNavi from './CNavi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CIMain = styled.div`
    width: 100%;
    background: url('../img/bus_bg.jpg') no-repeat center/cover;
    background-attachment: fixed;
`;

const Aboutwrap = styled.div`
    position: absolute;
    top: 200px;
    @media (max-width: 840px) {
        top: 400px;
    }
`;

const Aboutus = styled.div`
padding: 0 20%;
background-color: white;
height: 400px;
>div {
    @media (max-width: 840px) {
        left: 50%;
        transform: translateX(-50%) !important;
    }
}
@media (max-width:840px) {
    height: 800px;
}
`;

const Heading = styled.h2`
    font-size: 1.3em;
    font-weight: bold;
    @media (max-width: 840px) {
        font-size: 1.1em;
        text-align: center;
    } 

`;

const Empty = styled.div`
    width: 100%;
    height: 200px;
    background-color: transparent;
`

const Heading2 = styled.h3`
    font-size: 3.8em;
    font-weight: bold;
    position: relative;
    @media (max-width: 840px) {
        font-size: 3.0em;
        text-align: center;
    }
    &::after {
        content: '';
        position: absolute;
        display: block;
        width: 25%;
        height: 5px;
        background-color: black;
        right: 110%;
        bottom: 40%;
        @media (max-width: 840px) {
            display: none;
        }
    }
`;

const CIInfo = styled.div`
    padding: 0 20%;
    padding-top: 150px;
    background-color: white;
    padding-bottom: 150px;
`

const CIHeading = styled.h1`
    font-weight: bold;
    position: relative;
    &::after {
        content: '';
        display: block;
        position: absolute;
        height: 80%;
        width: .5vw;
        background-color: orange;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 20px;
    }
`;

const CIConcept = styled.div `
    display: flex;
    @media (max-width: 910px) {
        flex-direction: column;
    }
`

const CIConceptimg = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 910px) {
        width: 100%;
    }
`

const RealImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media (max-width: 910px) {
        width: 70%;
    }
`

const CIText = styled.div`
    height: 200px;
    padding: 0 5%;
    @media (max-width: 910px) {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 20px;
    }
`;

const CIText1 = styled.h2`
    height: 80%;
    font-size: 1.40em;
    font-weight: lighter;
    padding: 0;
    padding-left: 60px;
    margin: 0;
    @media (max-width: 1020px) {
        font-size: 1.20em;
    }
    @media (max-width: 910px) {
        height: 100%;
        overflow: auto;
    }
`;

const CIButton = styled.button`
    height: 20%;
    width: 100%;
    background-color:#DC2626;
    border: none;
    color: white;
    & > i {
        margin-left: .8em;
        @media (max-width: 600px) {
            margin: 0;
            display: block;
        }
    }
    @media (max-width: 600px) {
        display: block;
        height: 40%;
    }
`;

const CI = () => {
    const textscroll = useRef();
    const empty = useRef();

    useEffect(()=>{
        AOS.init({
            duration: 1000
        });
    })


    return (
    <>
       <CNavi></CNavi>
       <CIMain>
            <Aboutus>
             <Aboutwrap ref={textscroll} data-aos="fade-up">
                <Heading>ABOUT US</Heading>
                <Heading2>CORPORATE IDENTITY</Heading2>
             </Aboutwrap>
            </Aboutus>
            <Empty ref={empty}></Empty>
            <CIInfo>
                <CIHeading>CI</CIHeading>
                <CIConcept>
                    <CIConceptimg className="col-4"><RealImg src="../img/logo_black.png"></RealImg></CIConceptimg>
                    <CIText className="col-8">
                        <CIText1>SK Identity와 사명이 조합된 SK pucore의 Identifier입니다.<br></br>
                                공식적인 상징으로서 적용 시 규정과 원칙을 반드시 준수하여 <br></br>왜곡, 변형되지 않도록 합니다.</CIText1>
                        <CIButton><span>다운받기</span>
                                  <i class="bi bi-download"></i>  
                        </CIButton>
                    </CIText>
                </CIConcept>
            </CIInfo>
       </CIMain>
    </>
    );
};

export default CI;