import React from 'react';
import Md from '../scss/modal.module.scss';

const Modal = () => {
    return (
        <div className={`${Md.modals}`}>
            <div className={`${Md.imagewraps}`}>
                <img src="/img/openbanner.jpg" alt="openbanner" />
            </div>
            <div className={`${Md.buttonwraps} d-flex`}>
                <button className="col">오늘 하루 더 이상 안보기</button>
                <button className="col">닫기</button>
            </div>
        </div>
    );
};

export default Modal;