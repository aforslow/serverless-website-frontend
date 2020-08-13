import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom"

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">AFORSLOW</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/food">Food</Nav.Link>
                <Nav.Link href="/code">Code</Nav.Link>
                <Nav.Link href="/travel">Travel</Nav.Link>
                {/* <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Food app</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Code blog</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Travel blog</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                <Nav>
                    <Button href="/login">Log in</Button>
                    <Nav.Link href="/signup">Sign up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar;