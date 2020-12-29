import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Own Components
import './Portfolio.scss'
import PortfolioList from './PortfolioList'

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
                                <PortfolioList />
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