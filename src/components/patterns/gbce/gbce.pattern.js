import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Container, Jumbotron } from 'react-bootstrap';
import HeaderBlock from '../../blocks/header/header.block';
import SpinnerBlock from '../../blocks/spinner/spinner.block';
import copyProvider from '../../../resources';
import { StockMarketContext } from '../../../contexts/stock.market.context';
import { BASE_PATH, GBCE_API } from '../../../constants';
import { GBCEContext } from '../../../contexts/gbce.context';

const API_BASE_PATH = process.env.MOCK_HOST ? process.env.MOCK_HOST : BASE_PATH;
const URL = API_BASE_PATH + GBCE_API;

const Wrapper = styled.div`
  padding: 30px;
`;

const GBCEText = styled.span`
  font-size: 26px;
  color: red;
  font-weight: bold;
`;

const getCopy = copyProvider.getResource;

function GBCEPattern() {
    const { gbce } = useContext(GBCEContext);
    const [gbceValue, setGbceValue] = useState('');

    useEffect(() => {
        setGbceValue(gbce);
    }, [gbce])
    
    return gbceValue === '' ? (
        <SpinnerBlock />
        )
        : (
        <div>
            <HeaderBlock/>
            <Wrapper>
                <Container fluid="md">
                <Jumbotron fluid>
                    <Container>
                        <h1>{getCopy('gbcePage.heading')}</h1>
                        <p>
                            {getCopy('gbcePage.description')}<GBCEText>  "{gbceValue}"</GBCEText>
                        </p>
                    </Container>
                </Jumbotron>
                </Container>
            </Wrapper>
        </div>
    );
}

export default GBCEPattern;