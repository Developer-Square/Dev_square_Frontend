import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Services.scss'

function Services() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="services">
                        <div className="heading text-center">our <span>services</span></div>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit.</span> Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis. 
                        </p>
                        <Row>
                            <Col xs={12} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-1.png" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-1.png" alt="services" className="service-icon img-fluid"/>
                                    <p className="title my-auto pl-4">dEVELOPMENT</p>
                                </div>
                                <div className="inner-content-dev p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.png" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-2.png" alt="services" className="service-icon-html img-fluid"/>
                                    <p className="title my-auto pl-4">HTML/CSS</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.png" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-3.png" alt="services" className="service-icon-word img-fluid"/>
                                    <p className="title my-auto pl-4">WORDPRESS</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.png" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-4.png" alt="services" className="service-icon-app img-fluid"/>
                                    <p className="title my-auto pl-4">APPLICATIONS</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.png" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-5.png" alt="services" className="service-icon img-fluid"/>
                                    <p className="title my-auto pl-4">UI/UX DESIGN</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.png" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-6.png" alt="services" className="service-icon-responsive img-fluid"/>
                                    <p className="title my-auto pl-4">RESPONSIVE LAYOUT</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    <div className="scroll-bar services-bar mt-2 mx-auto">
                        <img src="images/rsz_scroll-bar.png" className="scroll-dot img-fluid" alt="scroll" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Services;