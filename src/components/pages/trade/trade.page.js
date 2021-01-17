import React from 'react';
import styled from 'styled-components';
import TradePattern from '../../patterns/trade/trade.pattern';
import TradeContextProvider from '../../../contexts/trade.context';

const Wrapper = styled.div`
  background: '#f0f0f0';
`;

function TradePage() {
    return (
        <Wrapper>
            <TradeContextProvider>
                <TradePattern/>
            </TradeContextProvider>
        </Wrapper>
    );
}

export default TradePage;