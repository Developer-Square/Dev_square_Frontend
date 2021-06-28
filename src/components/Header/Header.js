import React, {useState, Fragment} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Header.scss'

function Header() {
    const [headername, ] = useState('tecHive')
    
    const scrollFunction = (id, top) => {
        let offset = document.getElementById(`${id}`)
        if (offset !== null) {
            let offsetTop = offset.offsetTop
            window.scrollTo({
                top: offsetTop - top,
                behavior: 'smooth'
            })
        }
    }

    return (
        <Fragment>
            <Navbar className="mx-auto" expand="md" variant="dark">
                <Navbar.Brand href="#home" onClick={() => scrollFunction('landing-section', 0)}>
                    <img src="images/Logo-2.webp" className="img-fluid" alt="Logo" data-testid="logoImg"/>
                    <span className="logo-text pl-2" data-testid="logoText">{headername}</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav data-testid="headerNav">
                        <Nav.Link data-testid="home" href="#home" className="mx-auto" onClick={() => scrollFunction('landing-section', 0)}><div className="indicator ml-md-2"></div>Home<div className="indicator-2 ml-md-2"></div></Nav.Link>
                        <Nav.Link data-testid="about us" href="#about" className="mx-auto" onClick={() => scrollFunction('aboutus-section', 75)}><div className="indicator ml-md-4"></div>About us<div className="indicator-2 ml-md-4"></div></Nav.Link>
                        <Nav.Link data-testid="portfolio" href="#portfolio" className="mx-auto" onClick={() => scrollFunction('portfolio-section', 75)}><div className="indicator ml-md-4"></div>Portfolio<div className="indicator-2 ml-md-4"></div></Nav.Link>
                        <Nav.Link data-testid="services" href="#services" className="mx-auto" onClick={() => scrollFunction('product-section', 75)}><div className="indicator ml-md-4"></div>Services<div className="indicator-2 ml-md-4"></div></Nav.Link>
                        <Nav.Link data-testid="clients" href="#clients" className="mx-auto" onClick={() => scrollFunction('client-section', 75)}><div className="indicator ml-md-3"></div>Clients<div className="indicator-2 ml-md-3"></div></Nav.Link>
                        <Nav.Link data-testid="team" href="#Team" className="mx-auto" onClick={() => scrollFunction('team-section', 75)}><div className="indicator ml-md-2"></div>Team<div className="indicator-2 ml-md-2"></div></Nav.Link>
                        <Nav.Link data-testid="blog" href="#blog" className="mx-auto" onClick={() => scrollFunction('blog-section', 75)}><div className="indicator ml-md-2"></div>Blog<div className="indicator-2 ml-md-2"></div></Nav.Link>
                        <Nav.Link data-testid="contact" href="#contact" className="mx-auto contact" onClick={() => scrollFunction('contact-section', 75)}><div className="indicator ml-md-3"></div>Contact<div className="indicator-2 ml-md-3"></div></Nav.Link>
                        <Nav.Link href="/login" className="mx-auto pl-2 pr-2 mt-2 mt-md-0 login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header;