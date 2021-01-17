import React, {
    useState,
    useContext,
    useEffect
} from 'react';
import { Col, Form } from 'react-bootstrap';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import copyProvider from '../../../resources';

const getCopy = copyProvider.getResource;

/**
 * @description Select field for the stock symbol
 * 
 * @props lang {string} - Helps identify given stock symbol field 
 * is for Dividend form or PERatio form.
*/
export default function StockBlock({ fieldIdentifier }) {
    const { state } = useContext(StockMarketContext);
    const [ data, setData ] = useState(state.data.stockMarketData);
    const [ stockSymbol, setStockSymbol ] = useState('TEA');
    const [ valid, setValid ] = useState(false);

    useEffect(() => {
        if(fieldIdentifier === 'peratioSymbol') {
            setValid(state.peRatioFormIsInValid);
        } else {
            setValid(state.dividentFormIsInValid);
        }
    });

    const handleChange = (e) => {
        setStockSymbol(e.target.value);
    };

    return (
        <Form.Group as={Col} controlId={fieldIdentifier}>
            <Form.Label>{getCopy('form.symbolLabel')}</Form.Label>
            <Form.Control 
                as="select"
                name={fieldIdentifier}
                defaultValue={stockSymbol}
                onChange={handleChange}
                isInvalid={valid}
                >
                {data.map(elem => {
                    return <option key={'option' + elem.stockSymbol}>{elem.stockSymbol}</option>
                })}
            </Form.Control>
        </Form.Group>
    )
}