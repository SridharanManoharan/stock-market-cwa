import React from 'react';
import {  Jumbotron, Container } from 'react-bootstrap';

export default function GBCEBlock() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>{getCopy('gbcePage.heading')}</h1>
                <p>
                    {getCopy('gbcePage.description')}
                </p>
            </Container>
        </Jumbotron>
    );
}