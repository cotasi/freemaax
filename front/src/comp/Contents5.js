import React from 'react';
import styled from 'styled-components';

const Noticepresswrap = styled.div`
    width: 60%;
    margin: 0 auto;
    & h2 {
        font-size: 1.5em;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            display: block;
            left: 0;
            right: 0;
            bottom: 23%;
            height: 2px;
            background-color: black;
        }
    }

`;

const Contents5 = () => {
    return (
        <Noticepresswrap>
            <h2>Notice&Press</h2>
        </Noticepresswrap>
    );
};

export default Contents5;