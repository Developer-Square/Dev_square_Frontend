import React, {Fragment, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//Own Components
import './Client.scss'
import ModalComponent from './Reusable Components/ModalComponent'

function Client() {
    const [formType, setFormType] = useState('')
    const [modalShow, setModalShow] = useState(false)

    function handleReview () {
        setFormType('Review Form')
        setModalShow(!modalShow)
    }

    return (
        <Fragment>
            <Container id="client-section">
                <ModalComponent type={formType} show={modalShow} onHide={() => setModalShow(false)}/>
                <Row>
                    <Col className="portfolio-column">
                        <div className="clients">
                            <img src="images/clients-cover.webp" alt="clients" className="img-fluid cover"/>
                            <div className="heading text-center">our <span>clients</span></div>
                            <p className="text-center header-text">We encourage our clients to leave a review to know how best we can improve our services. This is what some of them had to say.
                            </p>
                            <Row className="limit mx-auto">
                                <Col xs={12} md={6}>
                                    <div className="inner-heading text-center">WHAT CLIENTS SAY</div>
                                    <p className="inner-text">I like how they delivered my website on time and also the communication from the product manager. Would recommend them to anyone</p>
                                    <img src="images/client-pic.webp" alt="Client" className="img-fluid client-pic"/>
                                    <p className="client-name">James Kimotho</p>
                                    <div className="navigation d-flex">
                                        <div className="navigation-dots mr-3"></div>
                                        <div className="navigation-dots middle"></div>
                                        <div className="navigation-dots ml-3"></div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="d-flex mt-5 mt-md-0 flex-column justify-content-center">
                                    <p className="mt-0">Please feel free to leave a review about our services or our website in general.</p>
                                    <Button variant="primary" className="review-btn" onClick={handleReview}>
                                        Add a Review
                                        <span class="iconify" data-icon="ant-design:plus-circle-outlined" data-inline="false"></span>
                                    </Button>
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