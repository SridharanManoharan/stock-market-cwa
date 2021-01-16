import React, {
    useState,
    useContext
} from 'react';
import styled from 'styled-components';
import { Button, Col, Form, Jumbotron } from 'react-bootstrap';
import copyProvider from '../../../resources';

const getCopy = copyProvider.getResource;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ErrorWrapper = styled.div`
    color: red;
`;

export default function PriceBlock() {
    const [ error, setError ] = useState(false);
    
    return (
        <Form.Group as={Col} isInvalid={!!error} controlId="dividentPrice">
            <Form.Label>{getCopy('form.priceLabel')}</Form.Label>
            <Form.Control />
        </Form.Group>
    )
}