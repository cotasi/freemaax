import React from 'react';
import styled from 'styled-components';
import Q from '../scss/query.module.scss';
import QNavi from './QNavi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';



const Query = () => {
    const {register, handleSubmit} = useForm();

    return (
    <>
      <QNavi></QNavi>
      <div className={`${Q.mainquery}`}>
        <h2><span>상담 양식을</span> 확인해주세요</h2>
        <h3>고객님의 의견을 적극 반영하겠습니다.</h3>
        <div className={`${Q.querycon}`}>
            <Form onSubmit={handleSubmit((data)=> alert(JSON.stringify(data)))}>
                <h2>상담정보</h2>
                <Form.Group>
                    <Form.Label>이름</Form.Label>
                    <Form.Control required type="text" placeholder="이름을 입력해주세요."></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>이메일</Form.Label>
                    <Form.Control required type="text" placeholder="이름을 입력해주세요."></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button type="submit">확인</Button>
                </Form.Group>
            </Form>
        </div>
      </div>
    </>
    );
};

export default Query;