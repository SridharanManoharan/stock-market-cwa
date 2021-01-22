import React, { useContext, useState } from 'react';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import { Form } from 'react-bootstrap';
import copyProvider from '../../../resources';
import stockMarketTypes from '../../../contexts/stock.market.types';

const getCopy = copyProvider.getResource;

function QuantityBlock() {
    const { dispatch } = useContext(StockMarketContext);
    const [ errorMsg, setErrorMsg ] = useState(false);
    const [ quantity, setQuantity ] = useState(0);
    const [ isFocus, setIsFocus ] = useState(false);
    const [ quantityInValid, setQuantityInValid ] = useState(false);

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
        setQuantity(value);
    }

    const handleFocus = (e) => {
        setIsFocus(true);
    };

    const handleBlur = (e) => {
        const { value } = e.target;
        setIsFocus(false);
        setQuantityInValid(validate(value));
    };

    /**
     * @description Allow only numberic value
     * on key press event
    */
    const handleKeyPress = (e) => {
        const re = /^[0-9]+$/; // numeric only
        if (!re.test(e.key)) {
            setQuantityInValid(true);
            setErrorMsg('Only numeric value is allowed in price field');
            e.preventDefault();
        } else {
            setQuantityInValid(false);
            setErrorMsg('');
        }
    };

    return (
        <Form.Group id="fGroupRecordQuantity" controlId="recordForm.recordQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control 
                name="recordQuantity"
                type="text"
                placeholder="Quantity"
                value={quantity}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                isInvalid={quantityInValid}
            />
            <Form.Control.Feedback id="errorFeedbackRecordQuantity" type="invalid">
                {errorMsg}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default QuantityBlock;