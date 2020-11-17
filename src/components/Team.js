import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Team.scss'
function Team() {
    return (
        <Fragment>
            <Container id="team-section">
                <Row>
                    <Col className="team">
                        <div className="heading text-center">our <span>team</span></div>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit.</span> Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis. 
                        </p>
                        <Row>
                            <Col xs={11} sm={6} lg={3} className="mx-auto">
                                <div className="team-container">
                                    <img src="images/team-1.webp" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Ben Ajax</p>
                                    <p className="team-role">UI/UX Designer</p>
                                    <div className="socials d-flex justify-content-around">
                                        <img src="images/facebook.webp" alt="facebook" className="img-fluid"/>
                                        <img src="images/twitter.webp" alt="twitter" className="img-fluid"/>
                                        <img src="images/linkedin.webp" alt="linkedin" className="img-fluid"/>
                                        <img src="images/instagram.webp" alt="instagram " className="img-fluid"/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={11} sm={6} lg={3} className="mx-auto">
                                <div className="team-container">
                                    <img src="images/team-2.webp" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Ben Ajax</p>
                                    <p className="team-role">UI/UX Designer</p>
                                    <div className="socials d-flex justify-content-around">
                                        <img src="images/facebook.webp" alt="facebook" className="img-fluid"/>
                                        <img src="images/twitter.webp" alt="twitter" className="img-fluid"/>
                                        <img src="images/linkedin.webp" alt="linkedin" className="img-fluid"/>
                                        <img src="images/instagram.webp" alt="instagram " className="img-fluid"/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={11} sm={6} lg={3} className="mx-auto">
                                <div className="team-container">
                                    <img src="images/team-3.webp" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Ben Ajax</p>
                                    <p className="team-role">UI/UX Designer</p>
                                    <div className="socials d-flex justify-content-around">
                                        <img src="images/facebook.webp" alt="facebook" className="img-fluid"/>
                                        <img src="images/twitter.webp" alt="twitter" className="img-fluid"/>
                                        <img src="images/linkedin.webp" alt="linkedin" className="img-fluid"/>
                                        <img src="images/instagram.webp" alt="instagram " className="img-fluid"/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={11} sm={6} lg={3} className="mx-auto">
                                <div className="team-container">
                                    <img src="images/team-4.webp" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Ben Ajax</p>
                                    <p className="team-role">UI/UX Designer</p>
                                    <div className="socials d-flex justify-content-around">
                                        <img src="images/facebook.webp" alt="facebook" className="img-fluid"/>
                                        <img src="images/twitter.webp" alt="twitter" className="img-fluid"/>
                                        <img src="images/linkedin.webp" alt="linkedin" className="img-fluid"/>
                                        <img src="images/instagram.webp" alt="instagram " className="img-fluid"/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="scroll-bar team-bar mt-2 mx-auto">
                            <img src="images/rsz_scroll-dot.webp" className="scroll-dot img-fluid" alt="scroll" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Team;