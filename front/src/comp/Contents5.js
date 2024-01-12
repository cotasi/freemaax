import React from 'react';
import styled from 'styled-components';
import Data from '../Data/Data.json'

const Noticepresswrap = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-bottom: 3.5%;
    & h2 {
        font-size: 1.5em;
        margin-bottom: 7%;
        &:after {
            content: '';
            position: absolute;
            display: block;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            background-color: black;
        }
    }

`;

const Noticepress = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2%;
    & ul {
        display: flex;
        gap: 20px;
        li {
          list-style: none;
          &.noticeactive {
            color:#5f87f4;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: -43%;
                display: block;
                height: 3px;
                background-color: #5f87f4;
            }
          }
        }
    }
`;

const Noticewrap = styled.div`
    width: 100%;
    >div {
        padding: 2% 1%;
        >div:first-child {
            font-size: 1.3em;
            padding-bottom: 1%;
        }
        >div:last-child {
            font-size: 1.1em;
            font-weight: 200 !important;
        }
    }
    >div:first-child {
        border-top: 2px solid black;
    }
    >div {
        border-bottom: 1px solid black;
    }
`;

const Contents5 = () => {
    return (
        <Noticepresswrap>
            <Noticepress>
                <h2 className="m-0">Notice & Press</h2>
                <ul className="m-0 p-0">
                    <li class="noticeactive">공지사항</li>
                    <li>보도자료</li>
                </ul>
            </Noticepress>
            <Noticewrap>
                {Data[3].Notice.map((eee,iii)=>{
                    return(
                        <div>
                        <div>{eee.contents}</div>
                        <div>{eee.date}</div>
                        </div>
                        
                    )
                })}
            </Noticewrap>
        </Noticepresswrap>
    );
};

export default Contents5;