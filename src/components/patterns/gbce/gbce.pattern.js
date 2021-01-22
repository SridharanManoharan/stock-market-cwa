import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Container, Jumbotron } from 'react-bootstrap';
import HeaderBlock from '../../blocks/header/header.block';
import SpinnerBlock from '../../blocks/spinner/spinner.block';
import copyProvider from '../../../resources';
import { GBCEContext } from '../../../contexts/gbce.context';

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