import React, {
    useState,
    useContext
} from 'react';
import styled from 'styled-components';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import { Button, Form, Jumbotron, Modal, Spinner } from 'react-bootstrap';
import copyProvider from '../../../resources';
import StockBlock from '../stock/stock.block';
import { BASE_PATH, VOLUME_WEIGHTED_API } from '../../../constants';

const API_BASE_PATH = process.env.MOCK_HOST ? process.env.MOCK_HOST : BASE_PATH;
const URL = API_BASE_PATH + VOLUME_WEIGHTED_API;

const getCopy = copyProvider.getResource;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ErrorWrapper = styled.p`
    color: red;
`;

export default function VWPriceBlock() {
    const { state, dispatch } = useContext(StockMarketContext);
    const [ errorMsg, setErrorMsg ] = useState('');
    const [ vwSymbol, setvwSymbol ] = useState('TEA');
    const [ vwPrice, setVwPrice ] = useState({});
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

    const calculateVwPrice = async (e) => {
        e.preventDefault();
        const {vwPriceSymbol} = e.target.elements;
        if(state.peRatioFormIsInValid === false) {
            const symbol = await vwPriceSymbol.value;
            const obj = {
                'stockSymbol': symbol,
            };
            setErrorMsg('');
            const data = await getVwPriceValue(obj);
            setvwSymbol(data.stockSymbol);
            setVwPrice(data.vwprice);
            setShow(true);
        } else {
            setErrorMsg('Please check the values before submit');
        }
    }

    const getVwPriceValue = async (data) => {
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
            <h2>{getCopy('form.vwpriceTitle')}</h2>
            <Wrapper>
                {
                    errorMsg !== '' && <ErrorWrapper>{errorMsg}</ErrorWrapper>
                }
                <Form onSubmit={calculateVwPrice}>
                    <Form.Row>
                        <StockBlock 
                            fieldIdentifier="vwPriceSymbol" />
                    </Form.Row>
                    <Button
                        id="vwpriceSubmit"
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
                <Modal.Title>Volume Weighted Stock Price</Modal.Title>
            </Modal.Header>
            <Modal.Body>Volume Weighted Stock Price for {vwSymbol} is {vwPrice ? vwPrice: 0}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </Jumbotron>
    );
}