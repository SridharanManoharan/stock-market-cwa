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
import { BASE_PATH, PERATIO_API } from '../../../constants';

const API_BASE_PATH = process.env.MOCK_HOST ? process.env.MOCK_HOST : BASE_PATH;
const URL = API_BASE_PATH + PERATIO_API;

const getCopy = copyProvider.getResource;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ErrorWrapper = styled.p`
    color: red;
`;

export default function PERatioBlock() {
    const { state, dispatch } = useContext(StockMarketContext);
    const [ errorMsg, setErrorMsg ] = useState('');
    const [ peSymbol, setPeSymbol ] = useState('TEA');
    const [ pePrice, setPePrice ] = useState(0);
    const [ peRatio, setPeRatio ] = useState({});
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

    const calculatePeRatio = async (e) => {
        e.preventDefault();
        if(state.peRatioFormIsInValid === false) {
            const symbol = await e.target.elements.peratioSymbol.value;
            const price = await e.target.elements.peratioPrice.value;
            const obj = {
                'stockSymbol': symbol,
                'stockPrice': price
            };
            setErrorMsg('');
            const peRatio = await getPeRatioValue(obj);
            setPeSymbol(peRatio.stockSymbol);
            setPePrice(peRatio.stockPrice);
            setPeRatio(peRatio.value);
            setShow(true);
        } else {
            setErrorMsg('Please check the values before submit');
        }
    }

    const getPeRatioValue = async (data) => {
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
    }

    return (
    <Jumbotron>
        { state.retrieveStockStatus === false ? (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> ) : (
            <div>
            <h2>{getCopy('form.peratioTitle')}</h2>
            <Wrapper>
                {
                    errorMsg !== '' && state.peRatioFormIsInValid && <ErrorWrapper>{errorMsg}</ErrorWrapper>
                }
                <Form onSubmit={calculatePeRatio}>
                    <Form.Row>
                        <StockBlock 
                            fieldIdentifier="peratioSymbol" />
                        <PriceBlock 
                            fieldIdentifier="peratioPrice" />
                    </Form.Row>
                    <Button
                        id="peratioSubmit"
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
                <Modal.Title>PE-Ratio</Modal.Title>
            </Modal.Header>
            <Modal.Body>PE-Ratio for {peSymbol} given price {pePrice} is {peRatio ? peRatio: 0}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </Jumbotron>
    );
}