import React, {Fragment} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import './Header.scss'

function Header() {

    function scrollFunction(id, top) {
        let offsetTop = document.getElementById(`${id}`).offsetTop
        console.log(offsetTop)
        window.scrollTo({
            top: offsetTop - top,
            behavior: 'smooth'
        })
    }

    return (
        <Fragment>
            <Navbar className="mx-auto" expand="md" variant="dark">
                <Navbar.Brand href="#home" onClick={() => scrollFunction('landing-section', 0)}>
                    <img src="images/Logo-2.png" className="img-fluid" alt="Logo"/>
                    <span className="logo-text pl-2">Lotus</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home" className="mx-auto" onClick={() => scrollFunction('landing-section', 0)}><div className="indicator ml-md-2"></div>Home<div className="indicator-2 ml-md-2"></div></Nav.Link>
                        <Nav.Link href="#about" className="mx-auto" onClick={() => scrollFunction('aboutus-section', 75)}><div className="indicator ml-md-4"></div>About us<div className="indicator-2 ml-md-4"></div></Nav.Link>
                        <Nav.Link href="#portfolio" className="mx-auto" onClick={() => scrollFunction('portfolio-section', 75)}><div className="indicator ml-md-4"></div>Portfolio<div className="indicator-2 ml-md-4"></div></Nav.Link>
                        <Nav.Link href="#clients" className="mx-auto" onClick={() => scrollFunction('client-section', 75)}><div className="indicator ml-md-3"></div>Clients<div className="indicator-2 ml-md-3"></div></Nav.Link>
                        <Nav.Link href="#Team" className="mx-auto" onClick={() => scrollFunction('team-section', 75)}><div className="indicator ml-md-2"></div>Team<div className="indicator-2 ml-md-2"></div></Nav.Link>
                        <Nav.Link href="#services" className="mx-auto" onClick={() => scrollFunction('services-section', 75)}><div className="indicator ml-md-4"></div>Services<div className="indicator-2 ml-md-4"></div></Nav.Link>
                        <Nav.Link href="#blog" className="mx-auto" onClick={() => scrollFunction('blog-section', 75)}><div className="indicator ml-md-2"></div>Blog<div className="indicator-2 ml-md-2"></div></Nav.Link>
                        <Nav.Link href="#contact" className="mx-auto contact" onClick={() => scrollFunction('contact-section', 75)}><div className="indicator ml-md-3"></div>Contact<div className="indicator-2 ml-md-3"></div></Nav.Link>
                        <Nav.Link href="#login" className="mx-auto pl-2 pr-2 mt-2 mt-md-0 login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header;