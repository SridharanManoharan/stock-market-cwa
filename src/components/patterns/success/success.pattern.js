import React from 'react';
import styled from 'styled-components';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import HeaderBlock from '../../blocks/header/header.block';
import copyProvider from '../../../resources';
import { useHistory } from 'react-router-dom';

const getCopy = copyProvider.getResource;

const Wrapper = styled.div`
  padding: 30px;
`;

const SucessHeadingText = styled.h1`
  color: green;
`;

function SuccessPattern() {
    const history = useHistory();

    const backToHome = () => {
        history.push('/landing');
    };

    return (
        <div>
            <HeaderBlock/>
            <Wrapper>
                <Container fluid="md">
                <Jumbotron fluid>
                    <Container>
                        <SucessHeadingText>Updated Successfully</SucessHeadingText>
                        <p>
                            Trade record has been updated successfully. Please check in the Trade record log for the latest report.
                        </p>
                        <section className="float-right">
                            <Button variant="primary" onClick={backToHome}>{getCopy('back.linkTitle')}</Button>
                        </section>
                    </Container>
                </Jumbotron>
                </Container>
            </Wrapper>
        </div>
    );
}

export default SuccessPattern;