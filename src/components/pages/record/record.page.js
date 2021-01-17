import React from 'react';
import styled from 'styled-components';
import RetrieveContextProvider from '../../../contexts/retrieve.context';
import RecordPattern from '../../patterns/record/record.pattern';

const Wrapper = styled.div`
  background: '#f0f0f0';
`;

function RecordPage() {
    return (
        <Wrapper>
            <RetrieveContextProvider>
                <RecordPattern/>
            </RetrieveContextProvider>
        </Wrapper>
    );
}

export default RecordPage;