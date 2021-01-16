import React from 'react';
import styled from 'styled-components';
import ErrorPattern from '../../patterns/error/error.pattern';

const Wrapper = styled.div`
  background: '#f0f0f0';
`;

function ErrorPage() {
    return (
        <Wrapper>
            <ErrorPattern />
        </Wrapper>
    );
}

export default ErrorPage;