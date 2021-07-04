import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { IsNotEmpty } from '../../../helpers/Reusable Functions'
import { createUpdateProject } from '../../../helpers/ApiFunctions'
import notify from '../../../helpers/Notify'



export default function ProjectsModal(props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [stack, setStack] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.projecttobeupdated !== '') {
            const {name, description, dueDate, stack} = props.projecttobeupdated
            setName(name)
            setDescription(description)
            setDueDate(dueDate.slice(0, 10))
            setStack(stack)
        }
    }, [props])

    const clearFields = (props) => {
        setName('')
        setDescription('')
        setDueDate('')
        setStack('')
        props.onHide()
    }

    function handleSubmit(e, formProps) {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            // Provide the ID of the user who created it.
            const clientId = localStorage.getItem('userID')
            const data = {
                clientId,
                name,
                description,
                dueDate,
                stack
            }
            if (IsNotEmpty(data)) {
                const {projecttobeupdated} = props
                if (projecttobeupdated !== '') {
                    // Update a project
                    createUpdateProject(projecttobeupdated, data, dispatch, clearFields, formProps, 'update')
                } else {
                    // Create a project
                    createUpdateProject('', data, dispatch, clearFields, formProps)
                }
            } else {
                notify('error', 'Please fill in all the fields')
            }
        }
    }

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="-container-"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.projecttobeupdated !== '' ? 'Update' : 'Create'} a Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-center">Fill the form below</h5>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="name..." value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" placeholder="Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Stack to be used</Form.Label>
                        <Form.Control as="textarea" rows={3} value={stack} onChange={(e) => setStack(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e, props)}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => clearFields(props)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
