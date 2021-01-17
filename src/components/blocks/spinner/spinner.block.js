import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const SpinnerWrapper = styled.div`
    padding-top: 50px;
`;

function SpinnerBlock() {
    return (
        <SpinnerWrapper>
            <Container fluid="md">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner> 
                    </Col>
                </Row>
            </Container>
        </SpinnerWrapper>
    );
}

export default SpinnerBlock;
        