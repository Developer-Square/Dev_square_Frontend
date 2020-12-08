import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

//Own Components
import Api from '../../../services/network'
import IsEmpty from '../../../helpers/IsEmpty'
import notify from '../../../helpers/Notify'

export default function TaskModal(props) {
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [stack, setStack] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [validated, setValidated] = useState(false)

    function handleSubmit(e, props) {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            setValidated(true)
            let data = {
                description,
                status,
                dueDate,
                difficulty,
                stack
            }
            
            //Checking if the data is empty with the helper function
            if (IsEmpty(data) === true) {
                //Hide the modal if the data is Not empty
                props.onHide()
                const api = new Api()
                api.auth().registerUser(data)
                .then(res => {
                    if (res.status === 201) {
                        notify('success', 'Task successfully created')
                    }
                })
                .catch(err => {
                    const {message} = err.response.data
                    const customMessage = `Task not created! \n ${message}`
                    notify('error', customMessage)
                })
            }
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
                Create a New Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-center">Fill the form below</h5>
                <Form noValidate validated={validated} {...props}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control required type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Task Name..." />
                        <Form.Control.Feedback type="invalid">
                            Please fill in the task name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Status</Form.Label>
                        <Form.Control onChange={(e) => setStatus(e.target.value)} required as="select">
                            <option>In Progress</option>
                            <option>On Hold</option>
                            <option>Not Started</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control onChange={(e) => setDueDate(e.target.value)} required type="date" placeholder="date" />
                        <Form.Control.Feedback type="invalid">
                            Please fill in the due date.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Stack</Form.Label>
                        <Form.Control required onChange={(e) => setStack(e.target.value)} type="text" placeholder="Stack..." />
                        <Form.Control.Feedback type="invalid">
                            Please fill in the stack
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicDifficulty">
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Control onChange={(e) => setDifficulty(e.target.value)} required as="select">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </Form.Control>
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
