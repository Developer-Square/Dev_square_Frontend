import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Client.scss'

function Client() {
    return (
        <Fragment>
            <Container id="client-section">
                <Row>
                    <Col className="portfolio-column">
                        <div className="clients">
                            {/* <img src="images/clients.webp" alt="clients" className="img-fluid"/> */}
                            <img src="images/clients-cover.webp" alt="clients" className="img-fluid cover"/>
                            <div className="heading">our <span>clients</span></div>
                            <p className="text-center">We encourage our clients to leave a review to know how best we can improve our services. This is what some of them had to say.
                            </p>
                            <Row className="limit mx-auto">
                                <Col xs={12} md={6}>
                                    <div className="inner-heading">WHAT CLIENTS SAY</div>
                                    <p className="inner-text">I like how they delivered my website on time and also the communication from the product manager.</p>
                                    <img src="images/client-pic.webp" alt="Client" className="img-fluid client-pic"/>
                                    <p className="client-name">James K.</p>
                                    <div className="navigation d-flex">
                                        <div className="navigation-dots mr-2"></div>
                                        <div className="navigation-dots middle"></div>
                                        <div className="navigation-dots ml-2"></div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="logos d-flex justify-content-around">
                                        <img src="images/rsz_client-logo.webp" alt="client" className="medium-sm-screens img-fluid"/>
                                        <img src="images/rsz_client-logo_992px.webp" alt="client" className="medium-lg-screens-client img-fluid"/>
                                        <img src="images/rsz_client-logo_992px.webp" alt="client" className="medium-lg-screens-client img-fluid"/>
                                        <img src="images/rsz_client-logo.webp" alt="client" className="medium-sm-screens img-fluid"/>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <div>
                                            <img src="images/rsz_client-logo-2.webp" alt="client" className="medium-sm-screens img-fluid pr-2"/>
                                            <img src="images/rsz_client-logo-2_992px.webp" alt="client" className="medium-lg-screens-client img-fluid pr-2"/>
                                            <img src="images/rsz_client-logo-3.webp" alt="client" className="medium-sm-screens img-fluid"/>
                                            <img src="images/rsz_client-logo-3_992px.webp" alt="client" className="medium-lg-screens-client img-fluid"/>
                                        </div>
                                        <div>
                                            <img src="images/rsz_client-logo-2.webp" alt="client" className="medium-sm-screens img-fluid pr-2"/>
                                            <img src="images/rsz_client-logo-2_992px.webp" alt="client" className="medium-lg-screens-client img-fluid pr-2"/>
                                            <img src="images/rsz_client-logo-3.webp" alt="client" className="medium-sm-screens img-fluid"/>
                                            <img src="images/rsz_client-logo-3_992px.webp" alt="client" className="medium-lg-screens-client img-fluid"/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="scroll-bar portfolio-bar client-bar mt-2 mx-auto">
                            <img src="images/rsz_scroll-bar.webp" className="scroll-dot img-fluid" alt="scroll" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Client;