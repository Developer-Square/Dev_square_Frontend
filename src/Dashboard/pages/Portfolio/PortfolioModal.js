import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import {useDispatch} from 'react-redux'

// import { createUpdateUserDetails } from '../../../helpers/ApiFunctions'


export default function PortfolioModal(props) {
    const [name, setName] = useState('')
    const [stack, setStack] = useState('')
    // const dispatch = useDispatch()

    useEffect(() => {
        setName(props.user?.name)
        setStack(props.user?.skills[0])
        // eslint-disable-next-line
    }, [])

    const clearFields = () => {
        setName('')
        setStack('')
    }

    const handleClose = () => {
        clearFields()
        props.onHide()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {name, skills: props.user?.skills.splice(0, 1, 'Android')}
        console.log(data);
        // createUpdateUserDetails(true, props.user.id, data, dispatch, clearFields)
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
                Edit Your Portfolio
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-center">Fill the form below</h5>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name..." />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Stack</Form.Label>
                        <Form.Control type="text" value={stack} onChange={(e) => setStack(e.target.value)} placeholder="Stack..." />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Upload new profile photo" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
