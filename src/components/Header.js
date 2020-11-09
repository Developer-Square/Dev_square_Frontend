import React, {Fragment} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Header.scss'

function Header() {
    return (
        <Fragment>
            <Navbar expand="md" variant="dark">
                <Navbar.Brand href="#home">
                    <img src="images/Logo-2.png" className="img-fluid" alt="Logo"/>
                    <span className="logo-text pl-2">Lotus</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home" className="mx-auto">Home</Nav.Link>
                        <Nav.Link href="#about" className="mx-auto">About us</Nav.Link>
                        <Nav.Link href="#portfolio" className="mx-auto">Portfolio</Nav.Link>
                        <Nav.Link href="#clients" className="mx-auto">Clients</Nav.Link>
                        <Nav.Link href="#Team" className="mx-auto">Team</Nav.Link>
                        <Nav.Link href="#services" className="mx-auto">Services</Nav.Link>
                        <Nav.Link href="#blog" className="mx-auto">Blog</Nav.Link>
                        <Nav.Link href="#contact" className="mx-auto">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header;