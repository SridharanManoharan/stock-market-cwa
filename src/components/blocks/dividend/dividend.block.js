import React, {
    useState,
    useContext
} from 'react';
import styled from 'styled-components';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import { Button, Col, Form, Jumbotron } from 'react-bootstrap';
import copyProvider from '../../../resources';
import { symbol } from 'prop-types';

const getCopy = copyProvider.getResource;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ErrorWrapper = styled.div`
    color: red;
`;

export default function DividendBlock() {
    const { state } = useContext(StockMarketContext);
    const [ data, setData ] = useState(state.data.stockMarketData);
    const [ price, setPrice ] = useState('');
    const [ symbol, setSymbol ] = useState('');
    const [ errorMsg, setErrorMsg ] = useState('');
    const [ symbolValid, setSymbolValid ] = useState(false);
    const [ priceValid, setPriceValid ] = useState(false);
    const [ isfocusForPrice, setIsfocusForPrice ] = useState(false);
    const [ isfocusForSymbol, setIsfocusForSymbol ] = useState(false);

    const calculateDivident = (e) => {
        e.preventDefault();
        if(errorMsg === '' && symbol !== '') {
            setSymbolValid(false);
            setPriceValid(false);
            const objToCheck = data.filter(elem => elem.stockSymbol === symbol);
        } else {
            setSymbolValid(true);
            setPriceValid(true);
            setErrorMsg('Please check the values before submit');
        }
    }

    const priceOnChange = (e) => {
        setPrice(e.target.value);
    }

    const handleFocusForPrice = () => {
        setIsfocusForPrice(true);
    };

    const handleBlurForPrice = (e) => {
        const { value } = e.target;
        setIsfocusForPrice(false);
        setError(validate(value, isoCode));
    };

    const handleFocusForSymbol = () => {
        setIsfocusForSymbol(true);
    };

    const handleBlurForSymbol= (e) => {
        const { value } = e.target;
        setIsfocusForSymbol(false);
        setError(validate(value, isoCode));
    };

    const symbolOnChange = (e) => {
        if( e.target.value === 'Choose...') {
            setSymbolValid(true);
            setErrorMsg('Please select a value for symbol');
        } else {
            setSymbolValid(false);
            setSymbol(e.target.value);
        }
        
    }

    const handleKeyPressPrice = (e) => {
        const re = /^[0-9]+$/; // numeric only
        if (!re.test(e.key)) {
            setPriceValid(true);
            setErrorMsg("Only number is allowed in price");
            e.preventDefault();
        } else {
            setPriceValid(false);
            setErrorMsg('');
        }
    };

    return (
    <Jumbotron>
        <h2>{getCopy('form.dividentTitle')}</h2>
        {
            errorMsg !== '' && 
            <ErrorWrapper>
                {errorMsg}
            </ErrorWrapper>
        }
        <Wrapper>
            <Form onSubmit={calculateDivident}>

                <Form.Row isInvalid={true}>
                    <Form.Group as={Col} controlId="dividentSymbol">
                    <Form.Label>{getCopy('form.symbolLabel')}</Form.Label>
                    <Form.Control 
                        as="select" 
                        defaultValue="Choose..."
                        onChange={symbolOnChange}
                        onFocus={handleFocusForSymbol}
                        onBlur={handleBlurForSymbol}
                        isInvalid={symbolValid}
                        >
                        <option key={'optionChoose'}>Choose...</option>
                        {data.map(elem => {
                            return <option key={'option' + elem.stockSymbol}>{elem.stockSymbol}</option>
                        })}
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="dividentPrice">
                        <Form.Label>{getCopy('form.priceLabel')}</Form.Label>
                        <Form.Control 
                            onChange={priceOnChange}
                            onKeyPress={handleKeyPressPrice}
                            onFocus={handleFocusForPrice}
                            onBlur={handleBlurForPrice}
                            value={price}
                            isInvalid={priceValid}
                            />
                    </Form.Group>
                </Form.Row>
                <Button
                    id="dividentSubmit"
                    variant="primary" 
                    type="submit">
                    {getCopy('button.submit')}
                </Button>
            </Form>
        </Wrapper>
    </Jumbotron>
    );
}