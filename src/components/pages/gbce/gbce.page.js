import React from 'react';
import styled from 'styled-components';
import GBCEPattern from '../../patterns/gbce/gbce.pattern';
import GBCEContextProvider from '../../../contexts/gbce.context';

const Wrapper = styled.div`
  background: '#f0f0f0';
`;

function GBCEPage() {
    return (
        <Wrapper>
            <GBCEContextProvider>
                <GBCEPattern />
            </GBCEContextProvider>
        </Wrapper>
    );
}

export default GBCEPage;