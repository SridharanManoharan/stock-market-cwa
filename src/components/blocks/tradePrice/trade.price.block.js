import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import { Form } from 'react-bootstrap';
import copyProvider from '../../../resources';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import stockMarketTypes from '../../../contexts/stock.market.types';

const getCopy = copyProvider.getResource;

/**
 * @description Input field for the price
 * 
*/
export default function TradePriceBlock() {
    const { state, dispatch } = useContext(StockMarketContext);
    const [ errorMsg, setErrorMsg ] = useState(false);
    const [ price, setPrice ] = useState(0);
    const [ isFocus, setIsFocus ] = useState(false);
    const [ priceInValid, setPriceInValid ] = useState(false);

    useEffect(() => {
        if (!isFocus) { setPriceInValid(validate(price)); }
    }, [price]);

    const validate = (value) => {
        let isInValid = false;
        let errorMessage = '';
        const re = /^[0-9]+$/; // numeric only
        if (value === '') {
            isInValid = true;
            errorMessage = 'Please enter a value';
        } else if (!re.test(value)) {
            isInValid = true;
            errorMessage = 'Only numeric value is allowed in price field';
        } else if (!isInValid) {
            errorMessage = '';
        }
        dispatchValidateResult(isInValid);
        setErrorMsg(errorMessage);
        return isInValid;
    };

    const dispatchValidateResult = (isInValid) => {
        dispatch({
            type: stockMarketTypes.RECORD_FORM_ERROR,
            payload: isInValid
        });
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setPrice(value);
    }

    const handleFocus = (e) => {
        setIsFocus(true);
    };

    const handleBlur = (e) => {
        const { value } = e.target;
        setIsFocus(false);
        setPriceInValid(validate(value));
    };

    /**
     * @description Allow only numberic value
     * on key press event
    */
    const handleKeyPress = (e) => {
        const re = /^[0-9]+$/; // numeric only
        if (!re.test(e.key)) {
            setPriceInValid(true);
            setErrorMsg('Only numeric value is allowed in price field');
            e.preventDefault();
        } else {
            setPriceInValid(false);
            setErrorMsg('');
        }
    };

    return (
        <Form.Group id="fGroupRecordPrice" controlId="recordForm.recordPrice">
            <Form.Label>Trade Price</Form.Label>
            <Form.Control 
                type="text" 
                name="recordPrice" 
                placeholder="Price"
                value={price}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                isInvalid={priceInValid} />
            <Form.Control.Feedback id="errorFeedbackRecordPrice" type="invalid">
                {errorMsg}
            </Form.Control.Feedback>
        </Form.Group>
    )
}