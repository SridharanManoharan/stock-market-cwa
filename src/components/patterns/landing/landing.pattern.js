import React, {useContext} from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderBlock from '../../blocks/header/header.block';
import StockTableBlock from '../../blocks/stockTable/stock.table.block';
import DividendBlock from '../../blocks/dividend/dividend.block';
import PERatioBlock from '../../blocks/peratio/peratio.block';
import SpinnerBlock from '../../blocks/spinner/spinner.block';
import VWPriceBlock from '../../blocks/vwprice/vwprice.block';
import { StockMarketContext } from '../../../contexts/stock.market.context';

const Wrapper = styled.div`
  padding: 30px;
`;

function LandingPattern() {
    const { state } = useContext(StockMarketContext);

    return state.retrieveStockStatus === false ? (
        <SpinnerBlock />
        )
        : (
        <div data-testid="landingPatternID">
            <HeaderBlock/>
            <Wrapper>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <StockTableBlock />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <DividendBlock />
                        </Col>
                        <Col md="auto">
                            <PERatioBlock />
                        </Col>
                        <Col md="auto">
                            <VWPriceBlock />
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </div>
    );
}

export default LandingPattern;