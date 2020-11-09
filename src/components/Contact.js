import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './Contact.scss'

function Contact() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="contact">
                        <div className="heading text-center">Find us <span>here</span></div>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit.</span> Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis. 
                            </p>
                        <div className="contact-address">
                            <img src="images/contact.png" alt="Contact" className="img-fluid"/>
                            <div className="address">
                                <div className="pt-2 pl-3">Lotus</div>
                                <div className="pt-2 pl-3">Address: California 11011, USA</div>
                                <div className="pt-2 pl-3">Email: creativia@example.com</div>
                                <div className="pt-2 pl-3">Phone: + 1 911 9919 1991</div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <div className="title text-center">SEND MESSAGE</div>

                            <Form>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Name" className="mx-auto" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email" className="mx-auto" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control as="textarea" placeholder="Message" rows={3} className="mx-auto" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    SEND
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Contact;