import React, {
    useState,
    useContext
} from 'react';
import styled from 'styled-components';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import { Button, Form, Jumbotron, Modal, Spinner } from 'react-bootstrap';
import copyProvider from '../../../resources';
import PriceBlock from '../price/price.block';
import StockBlock from '../stock/stock.block';
import { BASE_PATH, DIVIDEND_API } from '../../../constants';

const API_BASE_PATH = process.env.MOCK_HOST ? process.env.MOCK_HOST : BASE_PATH;
const URL = API_BASE_PATH + DIVIDEND_API;

const getCopy = copyProvider.getResource;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ErrorWrapper = styled.p`
    color: red;
`;

export default function DividendBlock() {
    const { state, dispatch } = useContext(StockMarketContext);
    const [ errorMsg, setErrorMsg ] = useState('');
    const [ dySymbol, setDySymbol ] = useState('TEA');
    const [ dyPrice, setDyPrice ] = useState(0);
    const [ yeild, setYeild ] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleError = (error) => {
        dispatch({
            type: stockMarketTypes.ERROR,
            payload: { 
                error
            }
        });
        history.push('/error');
    };
    
    const calculateDivident = async (e) => {
        e.preventDefault();
        if(state.dividentFormIsInValid === false) {
            const symbol = await e.target.elements.dividentSymbol.value;
            const price = await e.target.elements.dividentPrice.value;
            const obj = {
                'stockSymbol': symbol,
                'stockPrice': price
            };
            setErrorMsg('');
            const dividendYield = await getDividendYield(obj);
            setDySymbol(dividendYield.stockSymbol);
            setDyPrice(dividendYield.stockPrice);
            setYeild(dividendYield.value);
            setShow(true);
        } else {
            setErrorMsg('Please check the values before submit');
        }
    }

    const getDividendYield = async (data) => {
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
        if (response.status !== 200 && response.status !== 304) {
            handleError(getCopy('genericError.heading'));
        }
        return response.json();
    };

    return (
        <Jumbotron>
            { state.retrieveStockStatus === false ? (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> ) : (
            <div>
                <h2>{getCopy('form.dividentTitle')}</h2>
                <Wrapper>
                    {
                        errorMsg !== '' && <ErrorWrapper>{errorMsg}</ErrorWrapper>
                    }
                    <Form onSubmit={calculateDivident}>
                        <Form.Row>
                            <StockBlock 
                                fieldIdentifier="dividentSymbol" />
                            <PriceBlock 
                                fieldIdentifier="dividentPrice" />
                        </Form.Row>
                        <Button
                            id="dividentSubmit"
                            variant="primary" 
                            type="submit">
                            {getCopy('button.submit')}
                        </Button>
                    </Form>
                </Wrapper>
            </div>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dividend Yeild</Modal.Title>
                </Modal.Header>
                <Modal.Body>Divident yeild for {dySymbol} given price {dyPrice} is {yeild ? yeild : 0}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Jumbotron>
    );
}