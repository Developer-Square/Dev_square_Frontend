import React, {Fragment, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {ToastContainer} from 'react-toastify'

//Own Components
import FormSpree from '../helpers/FormSpree'
import './Contact.scss'

function ContactAndFooter() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    //Sending the request to formspree
    function submitForm(e) {
        e.preventDefault();
        e.stopPropagation()
        
        //Preparing the data for sending
        const form_data = {
            name,
            email,
            message
        }
        const formAction = 'https://formspree.io/f/mknppbbw'
        FormSpree(form_data, formAction)
    }

    return (
        <Fragment>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Container id="contact-section" className="p-0">
                <Row>
                    <Col className="contact">
                        <div className="heading text-center">Find us <span>here</span></div>
                            <p className="text-center pl-2 pr-2">
                            As every project has its own unique requirements, please contact us so that we can discuss the project in detail <br />
                            We're also available to accept the custom offer to work on full/part-time as a subsidiary to your company.
                            </p>
                        <div className="contact-address">
                            <img src="images/contact.webp" alt="Contact" className="img-fluid"/>
                            <div className="address">
                                <div className="pt-2 pt-xl-3 pl-xl-3 pl-3">tecHive</div>
                                <div className="pt-2 pt-xl-3 pl-xl-3 pl-3">Address: 1776-00200, Nairobi</div>
                                <div className="pt-2 pt-xl-3 pl-xl-3 pl-3">Email: techive9@gmail.com</div>
                                <div className="pt-2 pt-xl-3 pl-xl-3 pl-3">Phone: +254 703418580</div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <div className="title text-center">SEND MESSAGE</div>

                            <Form onSubmit={submitForm} action="https://formspree.io/f/mknppbbw" method="POST">
                                <Form.Group>
                                    <Form.Control required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="mx-auto" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mx-auto" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control required as="textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows={3} className="mx-auto" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    SEND
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col id="footer" className="mx-auto" xs={12}>
                        <div className="d-md-flex flex-md-row justify-content-around align-items-center">
                            <div className="footer-logo d-flex justify-content-center mt-md-0">
                                <img src="images/Logo-2.webp" alt="Footer" className="img-fluid"/>
                                <div className="logo-text pl-2">tecHive</div>
                            </div>
                            <div className="copyright text-center">&copy; Copyright, tecHive Creatives</div>
                        </div>
                        <div className="bottom-footer text-center">
                                <p className="mr-1">Made with</p>
                                <div className="footer-icon-love"><span class="iconify" data-icon="bx:bxs-heart" data-inline="false"></span></div> 
                                <p className="ml-1 mr-2">from Kenya</p>
                                <div className="footer-icon-kenya"><span class="iconify" data-icon="twemoji:flag-for-flag-kenya" data-inline="false"></span></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default ContactAndFooter;