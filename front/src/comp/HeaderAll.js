import React from 'react';
import Hall from '../scss/header.module.scss';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const HeaderAll = () => {
    return (
        <div className={`${Hall.headerall}`}>
            <Navbar expand="lg" className="bg-body-teriary position-relative">
                <div className={`${Hall.hcontainer} d-flex justify-content-between align-items-center`}>
                    <Navbar.Brand as={Link} to="/"><img src="/img/freemax_logo.png" alt="logo"></img></Navbar.Brand>
                    <Nav className={`${Hall.navmain}`}>
                        <Nav.Link>사업소개
                            <Nav className={`${Hall.submain} position-absolute`}>
                                <Nav.Link>기업 CI</Nav.Link>
                                <Nav.Link>상세 소개</Nav.Link>
                                <Nav.Link>서비스 안내</Nav.Link>
                            </Nav>
                        </Nav.Link>
                        <Nav.Link>지역별 버스</Nav.Link>
                        <Nav.Link>상담원 신청 
                            <Nav className={`${Hall.submain} position-absolute`}>
                                <Nav.Link as={Link} to='/sangdam/shinchung'>상담 맡기기</Nav.Link>
                                <Nav.Link>이메일 상담</Nav.Link>
                            </Nav>  
                        </Nav.Link>
                        <Nav.Link>프로모션 이벤트</Nav.Link>
                        <Nav.Link>고객센터</Nav.Link> 
                    </Nav>
                    <NavDropdown title="KR" id="basic-nav-dropdown">
                         <h2 className="m-0">언어 선택</h2>
                         <NavDropdown.Item href="#action/3.1">KR</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
                    </NavDropdown>
                    <Button className={`${Hall.searchbtn}`}><span>검색하기</span>
                            
                    </Button>
                </div>
            </Navbar>
        </div>
    );
};

export default HeaderAll;