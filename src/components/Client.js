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
                            {/* <img src="images/clients.png" alt="clients" className="img-fluid"/> */}
                            <img src="images/clients-cover.png" alt="clients" className="img-fluid cover"/>
                            <div className="heading">our <span>clients</span></div>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit.</span> Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis. 
                            </p>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div className="inner-heading">WHAT CLIENTS SAY</div>
                                    <p className="inner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis.</p>
                                    <img src="images/client-pic.png" alt="Client" className="img-fluid client-pic"/>
                                    <p className="client-name">Ben Ajax</p>
                                    <div className="navigation d-flex">
                                        <div className="navigation-dots mr-2"></div>
                                        <div className="navigation-dots middle"></div>
                                        <div className="navigation-dots ml-2"></div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="logos d-flex justify-content-around">
                                        <img src="images/rsz_client-logo.png" alt="client" className="medium-sm-screens img-fluid"/>
                                        <img src="images/rsz_client-logo_992px.png" alt="client" className="medium-lg-screens img-fluid"/>
                                        <img src="images/rsz_client-logo_992px.png" alt="client" className="medium-lg-screens img-fluid"/>
                                        {/* <img src="images/client-logo.png" alt="client" className="medium-lg-screens img-fluid"/> */}
                                        {/* <img src="images/client-logo.png" alt="client" className="medium-lg-screens img-fluid"/> */}
                                        <img src="images/rsz_client-logo.png" alt="client" className="medium-sm-screens img-fluid"/>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <div>
                                            <img src="images/rsz_client-logo-2.png" alt="client" className="medium-sm-screens img-fluid pr-2"/>
                                            <img src="images/rsz_client-logo-2_992px.png" alt="client" className="medium-lg-screens img-fluid pr-2"/>
                                            <img src="images/rsz_client-logo-3.png" alt="client" className="medium-sm-screens img-fluid"/>
                                            <img src="images/rsz_client-logo-3_992px.png" alt="client" className="medium-lg-screens img-fluid"/>
                                        </div>
                                        <div>
                                            <img src="images/rsz_client-logo-2.png" alt="client" className="medium-sm-screens img-fluid pr-2"/>
                                            <img src="images/rsz_client-logo-2_992px.png" alt="client" className="medium-lg-screens img-fluid pr-2"/>
                                            <img src="images/rsz_client-logo-3.png" alt="client" className="medium-sm-screens img-fluid"/>
                                            <img src="images/rsz_client-logo-3_992px.png" alt="client" className="medium-lg-screens img-fluid"/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="scroll-bar portfolio-bar client-bar mt-2 mx-auto">
                            <img src="images/rsz_scroll-bar.png" className="scroll-dot img-fluid" alt="scroll" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Client;