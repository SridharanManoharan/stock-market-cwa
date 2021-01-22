import React from 'react';
import styled from 'styled-components';
import LandingPattern from '../../patterns/landing/landing.pattern';
import RetrieveContextProvider from '../../../contexts/retrieve.context';

const Wrapper = styled.div`
  background: '#f0f0f0';
`;

function LandingPage() {
    return (
        <Wrapper data-testid="landingPageID">
            <RetrieveContextProvider>
                <LandingPattern />
            </RetrieveContextProvider>
        </Wrapper>
    );
}

export default LandingPage;