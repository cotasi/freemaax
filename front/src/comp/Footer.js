import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footerwrap = styled.div`
    width: 100%;
    padding: 4%;
    height: auto;
    background-color: #333;
`;

const Footertop = styled.div`

`;

const Top1 = styled.div`

`;


const Footer = () => {
    return (
        <Footerwrap>
            <Footertop className="d-flex">
                <Top1 className="col">
                    <ul className="d-flex">
                        <li><Link>이용 약관</Link></li>
                        <li><Link>개인 처리 방침</Link></li>
                        <li><Link>이용안내</Link></li>
                        <li><Link>사업자정보확인</Link></li>
                    </ul>
                </Top1>
            </Footertop>
        </Footerwrap>
    );
};

export default Footer;