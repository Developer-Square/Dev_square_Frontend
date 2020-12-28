import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Portfolio.scss'

function Portfolio() {
    return (
        <Fragment>
            <Container id="portfolio-section">
                <Row>
                    <Col className="portfolio-column">
                        <div className="portfolio">
                            <div className="heading text-center">portfolio</div>
                            <div className="d-flex portfolio-header mx-auto justify-content-around">
                                <p>ALL</p>
                                <p>BUSINESS TYPE</p>
                                <p>PHOTOGRAPHY</p>
                                <p>WEDDING</p>
                                <p className="fashion-lg-screens">FASHION</p>
                            </div>
                            <div className="d-flex justify-content-center fashion-sm-screens"><p>FASHION</p></div>
                            <div className="portfolio-images mx-xl-auto">
                                <Row className="mx-auto">
                                    <Col xs={12} sm={7} md={7} lg={3} className="p-sm-0 image-container-large">
                                        <img src="images/portfolio-1.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                                    </Col>
                                    <Col sm={5} md={5}  lg={3} className="larger-screens bank-image p-sm-0">
                                        <img src="images/portfolio-2.webp" alt="portfolio" className="portfolio-2 img-fluid"/>
                                        <img src="images/image-cover.webp" alt="portfolio" className="portfolio-2 image-cover img-fluid"/>
                                        <img src="images/plus-icon.webp" alt="portfolio" className="portfolio-2 plus-icon img-fluid"/>
                                        <p className="image-text">design name</p>
                                    </Col>
                                    <Col xs={12} sm={7} lg={3} className="p-sm-0 image-container-large">
                                        <img src="images/portfolio-3.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                                    </Col>
                                    <Col sm={5} lg={3} className="larger-screens p-sm-0">
                                        <img src="images/portfolio-4.webp" alt="portfolio" className="portfolio-2 img-fluid"/>
                                    </Col>
                                    <Col sm={5} lg={3} className="larger-screens p-sm-0">
                                        <img src="images/portfolio-5.webp" alt="portfolio" className="portfolio-2 img-fluid"/>
                                    </Col>
                                    <Col xs={12} sm={7} lg={3} className="p-sm-0 image-container-large">
                                        <img src="images/portfolio-6.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                                    </Col>
                                    <Col sm={5} lg={3} className="larger-screens p-sm-0">
                                        <img src="images/portfolio-7.webp" alt="portfolio" className="portfolio-2 img-fluid"/>
                                    </Col>
                                    <Col xs={12} sm={7} lg={3} className="p-sm-0 image-container-large">
                                        <img src="images/portfolio-8.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="scroll-bar portfolio-bar mt-2 mx-auto">
                            <img src="images/rsz_scroll-bar.webp" className="scroll-dot img-fluid" alt="scroll" />
                        </div>
                    </Col>
                </Row>
            </Container> 
        </Fragment>
    )
}

export default Portfolio;