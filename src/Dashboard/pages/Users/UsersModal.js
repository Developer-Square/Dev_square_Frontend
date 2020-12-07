import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

//Own Components
import IsEmpty from '../../../helpers/IsEmpty'
import notify from '../../../helpers/Notify'

export default function UsersModal(props) {
    const [email, setEmail] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [password, setPassword] = useState('')
    const [validated, setValidated] = useState(false)

    function handleSubmit(e) {
        const form = e.currentTarget;
        if (form.checkVl)
        e.preventDefault()
        let data = {
            email,
            fname,
            lname,
            password
        }
        if(IsEmpty(data)) {
        }
    }

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Create a New User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-center">Fill the form below</h5>
                <Form noValidate validated={validated}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicfname">
                            <Form.Control type="text" onChange={(e) => setFname(e.target.value)} placeholder="First Name..." />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasiclname">
                            <Form.Control type="text" onChange={(e) => setLname(e.target.value)} placeholder="Last Name..." />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
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
