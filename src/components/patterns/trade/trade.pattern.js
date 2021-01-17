import React, {useContext} from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import HeaderBlock from '../../blocks/header/header.block';
import StockTableBlock from '../../blocks/stockTable/stock.table.block';
import DividendBlock from '../../blocks/dividend/dividend.block';
import PERatioBlock from '../../blocks/peratio/peratio.block';
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
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                        </Col>
                        <Col md="auto">
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </div>
    );
}

export default LandingPattern;