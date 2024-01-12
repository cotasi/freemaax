import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Data from '../Data/Data.json';

const Listbar = styled.div`
    width: 60%;
    margin: 0 auto;
    padding-top: 5%;
`;

const Listbarsub = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 8%;
    & h2 {
        font-size: 1.7em;
        padding-bottom: .1%;
        position: relative;
        margin: 0;
    }
    &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: black;
            bottom: -50%;
        }

    & ul {
        padding-bottom: .1% !important;
        & li {
            list-style: none;
            & a {
                text-decoration: none;
                padding: 0 30px;
                display: block;
                color: black;
            }
        }
    }
`;

const ListInfo = styled.h2`
    font-size: 1.0em;
    font-weight: 200 !important;
    padding-bottom: 4%;
    & span {
        color:#5f87f4;
        font-weight: bold;
    }
`;

const Listmatch = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Eachgoods = styled.div`
    padding: 0 3%;
    border-right: 1px solid rgba(0,0,0,.2);
    border-bottom: 1px solid rgba(0,0,0,.2);
    transition: all .4s;
    &:hover {
        background-color: black;
        > div:nth-child(2) {
            color: white;
        }
        > div:last-child {
            color: white;
        }
    }
`;

const GoodsImg = styled.div`
    height: 60%;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Goodsname = styled.h2`

    font-size: 1.1em;
    padding-top: 26%;
    font-weight: 200 !important;
`;

const Goodsprice = styled.div`

`;

const Contents4 = () => {
    return (
        <Listbar>
            <Listbarsub className="d-flex align-items-center justify-content-between">
                <h2>예약 시스템 세트</h2>
                <ul className="d-flex m-0 p-0">
                    <li><Link>커피</Link></li>
                    <li><Link>과자</Link></li>
                    <li><Link>핸드백</Link></li>
                    <li><Link>향수</Link></li>
                    <li><Link>트리트먼트</Link></li>
                </ul>
            </Listbarsub>
            <ListInfo>총 <span>16개</span>의 상품이 있습니다.</ListInfo>
            <Listmatch>
                {
                    Data[4].goods[0].coffee.map((ee,ii)=>{
                        return(
                            <Eachgoods className="col-3">
                                <GoodsImg><img src={ee.coffeeimg} alt={ii}></img></GoodsImg>
                                <Goodsname>{ee.coffeeinfo}</Goodsname>
                                <Goodsprice>{ee.coffeeprice}원</Goodsprice>
                            </Eachgoods>
                        )
                    })
                }
            </Listmatch>
        </Listbar>
    );
};

export default Contents4;