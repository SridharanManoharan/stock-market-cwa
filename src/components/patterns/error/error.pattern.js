import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import HeaderBlock from '../../blocks/header/header.block';
import copyProvider from '../../../resources';
import { useHistory } from 'react-router-dom';

const getCopy = copyProvider.getResource;

const Wrapper = styled.div`
  padding: 30px;
`;

function ErrorPattern() {
    const history = useHistory();

    const backToHome = () => {
        history.push('/landing');
    };

    return (
        <div>
            <HeaderBlock/>
            <Wrapper>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h1>{getCopy('errorPage.heading')}</h1>
                                <p>
                                    {getCopy('errorPage.description')}
                                </p>
                                <section className="float-right">
                                    <Button variant="primary" onClick={backToHome}>{getCopy('back.linkTitle')}</Button>
                                </section>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </div>
    );
}

export default ErrorPattern;