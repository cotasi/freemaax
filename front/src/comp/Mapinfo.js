import React from 'react';
import styled from 'styled-components';

const MapInfowrapper = styled.div`
    width: 100%;
    height: 250px;
`;

const Mapinfo = () => {
    return (
        <MapInfowrapper>
            <h2>어디로 가야 할까요?</h2>
        </MapInfowrapper>
    );
};

export default Mapinfo;