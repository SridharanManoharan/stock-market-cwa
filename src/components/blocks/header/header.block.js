import React from 'react';
import {  Navbar, Nav } from 'react-bootstrap';
import copyProvider from '../../../resources';

const getCopy = copyProvider.getResource;

export default function HeaderBlock() {
  return (
    <Navbar data-testid="stockMarketHeaderID" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#">{getCopy('navBar.appName')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link data-testid="linkHomeID" href="#/">{getCopy('navBar.home')}</Nav.Link>
          <Nav.Link data-testid="linkTradeID" href="#/trade">{getCopy('navBar.tradeLog')}</Nav.Link>
          <Nav.Link data-testid="linkTradeFormID" href="#/tradeForm">{getCopy('navBar.recordTrade')}</Nav.Link>
          <Nav.Link data-testid="linkGbceID" href="#/gbce">{getCopy('navBar.gbce')}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

