import React from 'react';
import styled from 'styled-components';
import SuccessPattern from '../../patterns/success/success.pattern';

const Wrapper = styled.div`
  background: '#f0f0f0';
`;

function SuccessPage() {
    return (
        <Wrapper>
            <SuccessPattern />
        </Wrapper>
    );
}

export default SuccessPage;