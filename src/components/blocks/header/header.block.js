import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import copyProvider from '../../../resources';
const getCopy = copyProvider.getResource;

export default function HeaderBlock() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#">{getCopy('LandingPage.heading')}</Navbar.Brand>
    </Navbar>
  );
}
