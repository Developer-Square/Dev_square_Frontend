import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Portfolio.scss'

function Portfolio() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="portfolio-column">
                        <div className="portfolio">
                            <div className="heading text-center">portfolio</div>
                            <div className="d-flex justify-content-around">
                                <p>ALL</p>
                                <p>ILLUSTRATION</p>
                                <p>DIGITAL ART</p>
                                <p>WEB DESIGN</p>
                            </div>
                            <div className="portfolio-images">
                                <Row>
                                    <Col xs={12}>
                                        <img src="images/portfolio-1.png" alt="portfolio" className="img-fluid"/>
                                    </Col>
                                    <Col xs={12}>
                                        <img src="images/portfolio-3.png" alt="portfolio" className="img-fluid"/>
                                    </Col>
                                    <Col xs={12}>
                                        <img src="images/portfolio-6.png" alt="portfolio" className="img-fluid"/>
                                    </Col>
                                    <Col xs={12}>
                                        <img src="images/portfolio-8.png" alt="portfolio" className="img-fluid"/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="scroll-bar mt-2 mx-auto">
                            <img src="images/rsz_scroll-bar.png" className="scroll-dot img-fluid" alt="scroll" />
                        </div>
                    </Col>
                </Row>
            </Container> 
        </Fragment>
    )
}

export default Portfolio;