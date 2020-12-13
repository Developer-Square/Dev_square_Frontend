import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



export default function ProjectsModal(props) {
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="-container-"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Create a New Client
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-center">Fill the form below</h5>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="email..." />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username..." />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="Project name..." />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" placeholder="Date" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Stack to be used</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
