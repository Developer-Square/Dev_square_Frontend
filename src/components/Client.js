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
                                <Col xs={12} md={6} className="d-flex mx-auto mt-5 flex-column justify-content-center">
                                    <p className="mt-0">Please feel free to leave a review about our services or our website in general.</p>
                                    <Button variant="primary" className="review-btn" onClick={handleReview}>
                                        Add a Review
                                        <span className="iconify" data-icon="ant-design:plus-circle-outlined" data-inline="false"></span>
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Client;