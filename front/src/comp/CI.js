import React from 'react';
import styled from 'styled-components';
import CNavi from './CNavi';

const CIMain = styled.div`
    width: 100%;
    background: url('../img/bus_bg.jpg') no-repeat center/cover;
    background-attachment: fixed;
`;

const Aboutwrap = styled.div`
    position: fixed;
    top: 20%;
`;

const Aboutus = styled.div`
padding: 0 20%;
padding-bottom: 10%;
padding-top: 10%;
background-color: white;
margin-bottom: 10%;
`;

const Heading = styled.h2`
    font-size: 1.3em;
    font-weight: bold;

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
    &::after {
        content: '';
        position: absolute;
        display: block;
        width: 25%;
        height: 5px;
        background-color: black;
        right: 110%;
        bottom: 40%;
    }
`;

const CIInfo = styled.div`
    padding: 0 20%;
    padding-top: 10%;
    background-color: white;
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
`

const CIConceptimg = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RealImg = styled.img`
    width: 500px;
    object-fit: cover;
`

const CIText = styled.div`
    height: 200px;
    padding: 0 5%;
`;

const CIText1 = styled.h2`
    height: 80%;
    font-size: 1.1em;
    font-weight: lighter;
    padding: 0;
    margin: 0;
`;

const CIButton = styled.button`
    height: 20%;
    width: 100%;
    background-color:#DC2626;
    border: none;
    color: white;
`;

const CI = () => {
    return (
    <>
       <CNavi></CNavi>
       <CIMain>
            <Aboutus>
             <Aboutwrap>
                <Heading>ABOUT US</Heading>
                <Heading2>CORPORATE IDENTITY</Heading2>
             </Aboutwrap>
            </Aboutus>
            <Empty></Empty>
            <CIInfo>
                <CIHeading>CI</CIHeading>
                <CIConcept>
                    <CIConceptimg className="col-4"><RealImg src="../img/logo_black.png"></RealImg></CIConceptimg>
                    <CIText className="col-8">
                        <CIText1>SK Identity와 사명이 조합된 SK pucore의 Identifier입니다.<br></br>
                                공식적인 상징으로서 적용 시 규정과 원칙을 반드시 준수하여 <br></br>왜곡, 변형되지 않도록 합니다.</CIText1>
                        <CIButton>다운받기</CIButton>
                    </CIText>
                </CIConcept>
            </CIInfo>
       </CIMain>
    </>
    );
};

export default CI;