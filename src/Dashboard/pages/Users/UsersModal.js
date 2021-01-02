import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'

//Own Components
import Api from '../../../services/network'
import notify from '../../../helpers/Notify'
import IsNotEmpty from '../../../helpers/IsNotEmpty'

export default function UsersModal(props) {
    const [email, setEmail] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [skills, setSkills] = useState('')
    const [status, setStatus] = useState('')
    const [password, setPassword] = useState('')
    const [validated, setValidated] = useState(false)

    function handleSubmit(e, props) {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            setValidated(true)
            let newString = skills.replace(/\s/g, "")
            let skillsArray = [newString]
            const name = fname.concat(' ', lname)
            let data = {
                email,
                name,
                skills: skillsArray,
                status: status.toLocaleLowerCase(),
                password
            }
            
            // //Checking if the data is empty with the helper function
            if (IsNotEmpty(data) === true) {
                //Hide the modal if the data is Not empty
                props.onHide()
                const api = new Api()
                api.auth().registerUser(data)
                .then(res => {
                    if (res.status === 201) {
                        notify('success', 'User successfully created')
                    }
                })
                .catch(err => {
                    const {message} = err.response.data
                    const customMessage = `User not created! \n ${message}`
                    notify('error', customMessage)
                })
            }
        }
    }

    //Preventing enter from submitting the form
    $(document).ready(function() {
        $(window).keydown(function(event){
          if(event.key === 13) {
            event.preventDefault();
            return false;
          }
        });
      });

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
                <Form noValidate validated={validated} {...props}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicfname">
                            <Form.Control required type="text" onChange={(e) => setFname(e.target.value)} placeholder="First Name..." />
                            <Form.Control.Feedback type="invalid">
                                Please fill in your First Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasiclname">
                            <Form.Control required type="text" onChange={(e) => setLname(e.target.value)} placeholder="Last Name..." />
                            <Form.Control.Feedback type="invalid">
                                Please fill in your Last Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>List your skills e.g PHP, Java</Form.Label>
                        <Form.Control as="textarea" rows={4} value={skills} onChange={(e) => setSkills(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Please add a skill.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicstatus">
                    <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Status...</option>
                        <option>Available</option>
                        <option>Busy</option>
                    </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please fill your status.
                            </Form.Control.Feedback>
                        </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your Password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e, props)}>
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
