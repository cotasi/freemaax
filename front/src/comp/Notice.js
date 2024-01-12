import React from 'react';
import styled from 'styled-components';
import Data from '../Data/Data.json';

const Noticewrap = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 5%;
    & h2 {
        font-size: 1.6em;
        width: 100%;
        position: relative;
        margin-bottom: 8%;
        &::after {
            content: '';
            position: absolute;
            display: block;
            left: 0;
            right: 0;
            bottom: -80%;
            height: 2px;
            background-color: rgba(0,0,0,.7);
        }
    }
`;

const Tabletitle = styled.div`
    width: 100%;
    padding: 2% 0;
    border-top: 2px solid black;
    padding-left: 2%;
    & span {
        color: rgba(0,0,0,.4);
        font-size: 0.85em;
    }
`;

const Tablewrap = styled.div`
    width: 100%;
`;

const Tablecontent = styled.div`
    width: 100%;
    padding: 3% 0;
    border-top: 1px solid black;
    padding-left: 3%;
`;

const Tablecwrap = styled.div`
    width: 100%;
`;

const Notice = () => {
    return (
        <>
            <Noticewrap>
                <h2>공지사항</h2>
                <Tablewrap>
                    <Tabletitle className="d-flex">
                        <span className="col-3">번호</span>
                        <span className="col-6">제목</span>
                        <span className="col-3">등록일</span>
                    </Tabletitle>
                    <Tablecwrap>
                        {
                            Data[3].Notice.map((e,i)=>{
                                return(
                                        <Tablecontent className="d-flex">
                                            <span className="col-3" style={{opacity: '0.4'}}>{e.NIndex}</span>
                                            <span className="col-6">{e.contents}</span>
                                            <span className="col-3">{e.date}</span>
                                        </Tablecontent>
                                    );
                            })
                        }
                    </Tablecwrap>
                </Tablewrap>
            </Noticewrap>
        </>
    );
};

export default Notice;