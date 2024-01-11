import React, { useEffect } from 'react';
import styled from 'styled-components';
import Q from '../scss/query.module.scss';
import QNavi from './QNavi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm, SubmitHandler } from 'react-hook-form';

const Query = () => {
    const {register, handleSubmit,watch,formState: {errors}} = useForm();

    const onSubmit = (data) => console.log(data);

    return (
    <>
      <QNavi></QNavi>
      <div className={`${Q.mainquery}`}>
        <h2><span>상담 양식을</span> 확인해주세요</h2>
        <h3>고객님의 의견을 적극 반영하겠습니다.</h3>
        <div className={`${Q.querycon}`}>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <h2>상담정보</h2>
                <Form.Group>
                    <Form.Label>이름</Form.Label>
                    <Form.Control defaultValue="test" {...register("example")}required type="text" placeholder="이름을 입력해주세요."></Form.Control>
                    {/* regiser(...)가 name 속성이다. */}
                </Form.Group>
                <Form.Group>
                    <Form.Label>이메일</Form.Label>
                    <Form.Control {...register("example required", { required: true })} name="emails" required type="text" placeholder="이름을 입력해주세요."></Form.Control>
                    {errors.exampleRequired && <span>반드시 입력해주세요.</span>}
                </Form.Group>
                <Form.Group>
                    <Button type="submit" onClick="knowme()">확인</Button>
                </Form.Group>
            </form>
        </div>
      </div>
    </>
    );
};

export default Query;