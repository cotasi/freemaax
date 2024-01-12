import React, { useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MapInfowrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    height: 250px;
    & h2 {
        font-size: 1.5em;
        position: relative;
        margin-bottom: 8%;
        padding-top: 7%;
        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: -25%;
            width: 100%;
            height: 2px;
            background-color: black;
        }
    }
`;

const Mapwrapper = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
`;

const Formwrap = styled.div`
    width: 50%;
    height: 50%;
    position: absolute;
    z-index: 100000000;
    right: 0;
    bottom: 5%;
    background-color: #333;
    & form {
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
    }
    & input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid white;
        width: 60%;
        display: block;
    }
    & button {
        border: none;
        background-color: transparent;
        & span {
            display: block;
            text-indent: -9999em;
        }
    }

    & input::placeholder {
        color: white;
    }
`

const Mapinfo = () => {

    return (
        <MapInfowrapper>
            <h2>어디로 가야 할까요?</h2>
            <Mapwrapper>
                <Map center={{lat: 33.5563, lng: 126.79581}}
                     style ={{width: '100%', height:'100%', objectFit: 'cover'}}
                     level={3}>
                        <MapMarker position = {{ lat: 33.55635, lng: 126.795841}}></MapMarker>
                     </Map>
                <Formwrap>
                    <form>
                        <input placeholder="지점을 입력하시오."></input>
                        <button><span>검색</span>
                        <i class="bi bi-search"></i>
                        </button>
                    </form>
                </Formwrap>
            </Mapwrapper>
        </MapInfowrapper>
    );
};

export default Mapinfo;