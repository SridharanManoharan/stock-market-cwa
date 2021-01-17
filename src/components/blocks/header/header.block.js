import React from 'react';
import {  Navbar, Nav } from 'react-bootstrap';
import copyProvider from '../../../resources';

const getCopy = copyProvider.getResource;

export default function HeaderBlock() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#">{getCopy('navBar.appName')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/">{getCopy('navBar.home')}</Nav.Link>
          <Nav.Link href="#/trade">{getCopy('navBar.tradeLog')}</Nav.Link>
          <Nav.Link href="#/tradeForm">{getCopy('navBar.recordTrade')}</Nav.Link>
          <Nav.Link href="#/gbce">{getCopy('navBar.gbce')}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

