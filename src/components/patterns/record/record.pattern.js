import React, { useContext } from 'react';
import styled from 'styled-components';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import HeaderBlock from '../../blocks/header/header.block';
import SpinnerBlock from '../../blocks/spinner/spinner.block';
import RecordTradeBlock from '../../blocks/recordTrade/record.trade.block';

const Wrapper = styled.div`
  background: '#f0f0f0';
`;

function RecordPattern() {
    const { state } = useContext(StockMarketContext);

    return state.retrieveStockStatus === false ? (
        <SpinnerBlock />
        )
        : (
        <div>
            <HeaderBlock/>
            <Wrapper>
                <RecordTradeBlock />
            </Wrapper>
        </div>);
}

export default RecordPattern;