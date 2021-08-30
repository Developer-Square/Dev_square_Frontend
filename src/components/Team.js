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
                            Listed below is our team of talented individuals who will help you achieve your goals, whether its a website you're looking for or an app or even a revolutionary piece of software we will help you get there.
                        </p>
                        <Row>
                            <Col xs={11} sm={6} lg={3} className="mx-auto">
                                <div className="team-container">
                                    <img src="images/team-1.webp" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Linus</p>
                                    <p className="team-role mb-2">Chief Technology Officer, TecHive</p>
                                    <p className="team-role mb-2">Co-founder</p>
                                </div>
                            </Col>
                            <Col xs={11} sm={6} lg={3} className="mx-auto">
                                <div className="team-container">
                                    <img src="images/team-images/Sophie Profile Pic-cropped-6.jpeg" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Sophie</p>
                                    <p className="team-role mb-2">Chief Executive Officer, TecHive</p>
                                    <p className="team-role mb-2">Co-founder</p>
                                </div>
                            </Col>

                            <Col xs={11} sm={6} lg={3} className="mx-auto">
                                <div className="team-container">
                                    <img src="images/team-images/Ryan's Profile Pic-cropped-2.jpeg" alt="team" className="img-fluid profile"/>
                                    <p className="team-name">Ryan</p>
                                    <p className="team-role mb-2">Chief Operations Officer, TecHive</p>
                                    <p className="team-role mb-2">Co-founder</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Team;