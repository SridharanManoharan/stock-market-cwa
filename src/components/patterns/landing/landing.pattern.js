import React, {useContext} from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import HeaderBlock from '../../blocks/header/header.block';
import TableBlock from '../../blocks/table/table.block';
import DividendBlock from '../../blocks/dividend/dividend.block';
import PERatioBlock from '../../blocks/peratio/peratio.block';
import { StockMarketContext } from '../../../contexts/stock.market.context';

const Wrapper = styled.div`
  padding: 30px;
`;

function LandingPattern() {
    const { state } = useContext(StockMarketContext);

    return state.retrieveStatus === false ? (
        <Spinner /> )
        : (
        <div>
            <HeaderBlock/>
            <Wrapper>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <TableBlock data={state.data.stockMarketData} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <DividendBlock />
                        </Col>
                        <Col md="auto">
                            <PERatioBlock />
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </div>
    );
}

export default LandingPattern;