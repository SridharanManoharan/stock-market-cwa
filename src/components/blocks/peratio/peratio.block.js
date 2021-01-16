import React, {
    useContext
} from 'react';
import styled from 'styled-components';
import { Button, Col, Form, Jumbotron } from 'react-bootstrap';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import copyProvider from '../../../resources';

const getCopy = copyProvider.getResource;

const Wrapper = styled.div`
  margin-top: 20px;
`;

export default function PERatioBlock() {
    const { state } = useContext(StockMarketContext);
    return (
    <Jumbotron>
        <h2>{getCopy('form.peratioTitle')}</h2>
        <Wrapper>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="peratioSymbol">
                    <Form.Label>{getCopy('form.symbolLabel')}</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option key={'optionChoose'}>Choose...</option>
                        {state.data.stockMarketData.map(elem => {
                            return <option key={'option' + elem.stockSymbol}>{elem.stockSymbol}</option>
                        })}
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="peratioPrice">
                        <Form.Label>{getCopy('form.priceLabel')}</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Button id="peratioSubmit" variant="primary" type="submit">
                    {getCopy('button.submit')}
                </Button>
            </Form>
        </Wrapper>
    </Jumbotron>
    );
}