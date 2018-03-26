import React from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Sheraz Token</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
    <NavItem eventKey={1} href="#">
          Advisors
        </NavItem>
        <NavItem eventKey={2} href="#">
          Token Sale
        </NavItem>
        <NavItem eventKey={3} href="#">
          Goals
        </NavItem>
        <NavItem eventKey={4} href="#">
          About!
        </NavItem>
      </Nav>
    </Navbar>
  );
};
