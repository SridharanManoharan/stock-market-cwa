import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import { Jumbotron, Button, Container, Row, Col, Form } from 'react-bootstrap';
import QuantityBlock from '../../blocks/quantity/quantity.block';
import TradePriceBlock from '../../blocks/tradePrice/trade.price.block';
import copyProvider from '../../../resources';
import { BASE_PATH, TRADE_API } from '../../../constants';
import stockMarketTypes from '../../../contexts/stock.market.types';

const API_BASE_PATH = process.env.MOCK_HOST ? process.env.MOCK_HOST : BASE_PATH;
const URL = API_BASE_PATH + TRADE_API;

const getCopy = copyProvider.getResource;

const Wrapper = styled.div`
  padding-top: 40px;
`;

const ErrorWrapper = styled.p`
    color: red;
`;

const FormWrapper = styled.div`
    padding: 40px;
    form.tradeForm {
        padding-top: 20px;
    }
`;

function RecordTradeBlock() {
    const { state, dispatch } = useContext(StockMarketContext);
    const history = useHistory();
    const [ errorMsg, setErrorMsg ] = useState('');

    const handleError = (error) => {
        dispatch({
            type: stockMarketTypes.ERROR,
            payload: { 
                error
            }
        });
        history.push('/error');
    };

    const recordTradeLog = async (e) => {
        e.preventDefault();
        if(document.getElementById('errorFeedbackRecordQuantity').innerHTML.length >= 0 ||
            document.getElementById('errorFeedbackRecordPrice').innerHTML.length >= 0) {
                dispatch({
                    type: stockMarketTypes.RECORD_FORM_ERROR,
                    payload: true
                });
                setErrorMsg('Please check the values before submit');
        } else if(state.recordTradeFormIsInValid === false) {
            const symbol = await e.target.elements.recordsymbol.value;
            const tradeType = await e.target.elements.recordTradeType.value;
            const price = await e.target.elements.recordPrice.value;
            const quantity = await e.target.elements.recordQuantity.value;
            const obj = {
                "sharesQuantity": quantity, 
                "symbol": symbol, 
                "tradePrice": price, 
                "tradeType": tradeType
            };
            setErrorMsg('');
            const tradeLog = await updateTradeLog(obj);
        }
    };

    const updateTradeLog = async (data) => {
        const response = await fetch(URL, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status !== 201) {
            handleError(getCopy('genericError.heading'));
        } else if (response.status === 201) {
            history.push('/success');
        }
        return response.json();
    };

    return state.retrieveStockStatus === true &&
        <div>
            <Wrapper>
                <Container fluid="md">
                    <Row className="justify-content-md-center">
                        <Col>
                            <Jumbotron fluid="md">
                                <FormWrapper>
                                    <h1>Trade entry form:</h1>
                                    {
                                        errorMsg !== '' && state.recordTradeFormIsInValid && <ErrorWrapper>{errorMsg}</ErrorWrapper>
                                    }
                                    <Form onSubmit={recordTradeLog} className="tradeForm">
                                        <QuantityBlock />
                                        <Form.Group controlId="recordForm.Symbol">
                                            <Form.Label>Symbol</Form.Label>
                                            <Form.Control name="recordsymbol" as="select">
                                                <option value="TEA">TEA</option>
                                                <option value="POP">POP</option>
                                                <option value="ALE">ALE</option>
                                                <option value="GIN">GIN</option>
                                                <option value="JOE">JOE</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <TradePriceBlock />
                                        <Form.Group controlId="recordForm.recordTradeType">
                                            <Form.Label>Trade Type</Form.Label>
                                            <Form.Control name="recordTradeType" as="select">
                                                <option value="buy">Buy</option>
                                                <option value="sell">Sell</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Button
                                            id="recordTradeSubmit"
                                            variant="primary" 
                                            type="submit">
                                            {getCopy('button.submit')}
                                        </Button>
                                    </Form>
                                </FormWrapper>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </div>
}

export default RecordTradeBlock;