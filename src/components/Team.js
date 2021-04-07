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
                        <p className="text-center">
                            Listed below is our team of talented developers who will help you achieve your goals, whether its a website you're looking for or an app or even a revolutionary piece of software we will help you get there.
                        </p>
                        <Row>
                            <Col xs={11} sm={6} lg={3} className="mx-auto">
                                <div className="team-container">
                                    <img src="images/team-1.webp" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Linus</p>
                                    <p className="team-role mb-2">Chief Technology Officer, TecHive</p>
                                    <p className="team-role">Nodejs, Reactjs Developer</p>
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
                                    <img src="images/team-images/Sophie Profile Pic-cropped-6.jpeg" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Sophie</p>
                                    <p className="team-role mb-2">Chief Executive Officer, TecHive</p>
                                    <p className="team-role">Data Analyst</p>
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
                                    <img src="images/team-1.webp" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Timo</p>
                                    <p className="team-role">Android, PHP Developer</p>
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
                                    <img src="images/team-images/Ryan's Profile Pic-cropped-2.jpeg" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Ryan</p>
                                    <p className="team-role mb-2">Chief Operations Officer, TecHive</p>
                                    <p className="team-role">Reactjs, Python Developer</p>
                                    <div className="socials d-flex justify-content-around">
                                        <img src="images/facebook.webp" alt="facebook" className="img-fluid"/>
                                        <img src="images/twitter.webp" alt="twitter" className="img-fluid"/>
                                        <img src="images/linkedin.webp" alt="linkedin" className="img-fluid"/>
                                        <img src="images/instagram.webp" alt="instagram " className="img-fluid"/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={11} sm={6} lg={3} className="mx-auto ml-lg-0 mr-lg-0">
                                <div className="team-container">
                                    <img src="images/team-4.webp" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Clinton</p>
                                    <p className="team-role">Ruby on Rails Developer</p>
                                    <p className="team-role mb-2"></p>
                                    <div className="socials d-flex justify-content-around">
                                        <img src="images/facebook.webp" alt="facebook" className="img-fluid"/>
                                        <img src="images/twitter.webp" alt="twitter" className="img-fluid"/>
                                        <img src="images/linkedin.webp" alt="linkedin" className="img-fluid"/>
                                        <img src="images/instagram.webp" alt="instagram " className="img-fluid"/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={11} sm={6} lg={3} className="mx-auto ml-lg-0 mr-lg-0">
                                <div className="team-container">
                                    <img src="images/team-4.webp" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Franklin</p>
                                    <p className="team-role">Django Developer</p>
                                    <p className="team-role mb-2"></p>
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