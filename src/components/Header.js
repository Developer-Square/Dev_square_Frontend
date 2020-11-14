import React, {Fragment} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Header.scss'

function Header() {
    return (
        <Fragment>
            <Navbar className="mx-auto" expand="md" variant="dark">
                <Navbar.Brand href="#home">
                    <img src="images/Logo-2.png" className="img-fluid" alt="Logo"/>
                    <span className="logo-text pl-2">Lotus</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home" className="mx-auto"><span className="indicator"></span>Home<span className="indicator"></span></Nav.Link>
                        <Nav.Link href="#about" className="mx-auto"><span className="indicator"></span>About us<span className="indicator"></span></Nav.Link>
                        <Nav.Link href="#portfolio" className="mx-auto"><span className="indicator"></span>Portfolio<span className="indicator"></span></Nav.Link>
                        <Nav.Link href="#clients" className="mx-auto"><span className="indicator"></span>Clients<span className="indicator"></span></Nav.Link>
                        <Nav.Link href="#Team" className="mx-auto"><span className="indicator"></span>Team<span className="indicator"></span></Nav.Link>
                        <Nav.Link href="#services" className="mx-auto"><span className="indicator"></span>Services<span className="indicator"></span></Nav.Link>
                        <Nav.Link href="#blog" className="mx-auto"><span className="indicator"></span>Blog<span className="indicator"></span></Nav.Link>
                        <Nav.Link href="#contact" className="mx-auto"><span className="indicator"></span>Contact<span className="indicator"></span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header;