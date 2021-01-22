import React, {useContext} from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderBlock from '../../blocks/header/header.block';
import SpinnerBlock from '../../blocks/spinner/spinner.block';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import TradeTableBlock from '../../blocks/tradeTable/trade.table.block';

const Wrapper = styled.div`
  padding: 30px;
`;

function LandingPattern() {
    const { state } = useContext(StockMarketContext);

    return state.retrieveTradeStatus === false ? (
        <SpinnerBlock />
        )
        : (
        <div>
            <HeaderBlock/>
            <Wrapper>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <TradeTableBlock tradeData={state.trade}/>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </div>
    );
}

export default LandingPattern;