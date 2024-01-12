import React, {useEffect} from 'react';
import Hall from '../scss/header.module.scss';
import Data from '../Data/Data.json';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const HeaderAll = () => {
    const hamcallback = ()=> {

        document.querySelector('.mobile').classList.toggle('mobileon');
        document.querySelector('button.ham').classList.toggle('hamon');

    }



return (
    <div className={`${Hall.headerall}`}>
        <Navbar expand="lg" className="bg-body-teriary position-relative">
            <div className={`${Hall.hcontainer} d-flex justify-content-between align-items-center`}>
                <Navbar.Brand as={Link} to="/"><img src="/img/freemax_logo.png" alt="logo"></img></Navbar.Brand>
                <Nav className={`${Hall.navmain} d-xl-flex d-none ham`}>
                    {
                        Data[2].menu.map((첫,둘)=>{
                            return(
                                <Nav.Link as={Link} to={첫.href1}>{첫.menu1}
                                    <Nav className={`${Hall.submain} position-absolute`}>
                                       {
                                        첫.menu2.map((셋,넷)=>{
                                            return(
                                                <Nav.Link as={Link} to={셋.href}>{셋.name}</Nav.Link>
                                            )
                                        })
                                       }  
                                       </Nav>       
                                </Nav.Link>
                            );
                        })
                    }
                </Nav>
                <NavDropdown title="KR" id="basic-nav-dropdown" className="d-xl-block d-none">
                     <h2 className="m-0">언어 선택</h2>
                     <NavDropdown.Item href="#action/3.1">KR</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
                     <h2 className="m-0">회원 기능</h2>
                     <NavDropdown.Item href="#action/3.1">로그인</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.1">회원가입</NavDropdown.Item>
                </NavDropdown>
                <Button className={`${Hall.searchbtn} d-xl-flex d-none`}><span>검색하기</span>                     
                </Button>
                <Button className={`${Hall.hambtn} d-flex d-xl-none ham`} onClick={hamcallback}>
                    <span>햄버거버튼</span>
                    <i class="bi bi-list"></i>
                </Button>
                <Nav className={`${Hall.mobile} mobile d-xl-none position-absolute d-block`}>
                    {
                        Data[2].menu.map((첫,둘)=>{
                            return(
                                <Nav.Link as={Link} to={첫.href1}>{첫.menu1}
                                    <Nav className={`${Hall.mobilesub}`}>
                                       {
                                        첫.menu2.map((셋,넷)=>{
                                            return(
                                                <Nav.Link as={Link} to={셋.href}>{셋.name}</Nav.Link>
                                            )
                                        })
                                       }  
                                       </Nav>       
                                </Nav.Link>
                            );
                        })
                    }
                    <Nav.Link as={Link}>
                        회원기능
                        <Nav className={`${Hall.mobilesub}`}>
                            <Nav.Link>로그인</Nav.Link>
                            <Nav.Link>회원가입</Nav.Link>
                        </Nav>
                    </Nav.Link>
                    <Nav.Link as={Link}>
                        언어 선택
                        <Nav className={`${Hall.mobilesub}`}>
                            <Nav.Link>KR</Nav.Link>
                            <Nav.Link>EN</Nav.Link>
                        </Nav>
                    </Nav.Link>
                </Nav>
            </div>
        </Navbar>
    </div>
);
};


export default HeaderAll;