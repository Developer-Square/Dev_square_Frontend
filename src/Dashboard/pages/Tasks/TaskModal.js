import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {useSelector} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

//Own Components
import Api from '../../../services/network'
import {IsNotEmpty, converter, shallowEquality} from '../../../helpers/Reusable Functions'
import notify from '../../../helpers/Notify'
import {createUpdateTask} from '../../../helpers/ApiFunctions'

const TaskModal = forwardRef((props, ref) => {
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [stack, setStack] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [status, setStatus] = useState('')
    const [validated, setValidated] = useState(false)
    const [projects, setProjects] = useState('')
    const [projectName, setProjectName] = useState('')
    const [title, setTitle] = useState('')

    const {UpdatedTask, ModalShow} = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    //Function call coming from the parent component
    useImperativeHandle(
        ref,
        () => ({
            clearFormFields() {
                setDescription('')
                setProjectName('')
                setStack('')
                setDifficulty('Easy')
                setStatus('Not Started')
                setDueDate('')
            }
        })
    )

    //Creating a new instance of the api class
    const api = new Api()

    useEffect(() => {
        //Set the defaults
        setDifficulty('Easy')
        setStatus('Not Started')
        setTitle('Create a New')
        //Get projects
        getProjects()

        if(UpdatedTask !== '') {
            setTitle('Update')
            const {description, dueDate, stack, difficulty, status} = UpdatedTask
            setDescription(description)
            //Change the date to a proper format that can be displayed
            const date = dueDate.slice(0,10)
            UpdatedTask.dueDate = date
            setDueDate(date)
            if (status === 'inProgress') {
                setStatus('In Progress')
            } else if (status === 'onHold') {
                setStatus('On Hold')
            } else {
                setStatus('Not Started')
            }
            setStack(stack)
            //difficulty originally comes in small letters eg. easy, so it has to be
            //capitalized eg. Easy, to fit the value in the frontend
            let diff = difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
            setDifficulty(diff)
            //Get the specific project that the task to be updated is attached to
            if (projects) {
                // eslint-disable-next-line
                projects.map(project => {
                    // eslint-disable-next-line
                    project.tasks.map(task => {
                        if (task === UpdatedTask.id) {
                            setProjectName(project.name)
                        }
                    })
                })
            }
        }
        // eslint-disable-next-line
    }, [UpdatedTask, ModalShow])

    function getProjects() {
        api.Projects().getAllProjects()
        .then(res => {
            if (res.status === 200) {
                setProjects(res.data.results)
            }
        })
        .catch(err => {
            const {message} = err
            notify('error', message)
        })
    }

    const clearFields = () => {
        setDescription('')
        setDueDate('')
        setStack('')
        setDifficulty('')
        setStatus('')
        setProjectName('')
    }

    function handleSubmit(e, props) {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            setValidated(true)
            const diff = converter(difficulty)
            const stat = converter(status)
            let data = {
                description,
                status: stat,
                dueDate,
                difficulty: diff,
                id: UpdatedTask.id,
                creator: UpdatedTask.creator,
                stack
            }
            // If props is not empty then its an update
            if (Object.keys(UpdatedTask).length !== 0 && UpdatedTask.constructor === Object) {
                // Send an update request
                // First check if the user made any changes
                // If there's a difference between the two projects then
                // update the task
                if (shallowEquality(UpdatedTask, data) === false) {
                    // remove the project attribute as it is not to be sent
                    // along with the task's object
                    delete data.id
                    createUpdateTask(UpdatedTask, data, dispatch, clearFields, props, 'update', projectName, projects)
                } else {
                     // If nothing has been changed show the user a pop message
                    notify('info', 'You have Not changed anything')
                }
            } else {
                // Send a create task request 
                if (projectName !== '' && projectName !== 'Select the project') {
                    delete data.id               
                    data.creator = localStorage.getItem('userID')
                    // Checking if the data is empty with the helper function
                    if (IsNotEmpty(data) === true) {
                        // Hide the modal and send the details if the data is Not empty
                        props.onHide()
                        createUpdateTask('', data, dispatch, clearFields, props, '', projectName, projects)
                    }
                } else {
                    notify('error', 'You have not selected the project')
                }
            }
        }
    }

    const handleProjects = (e) => {
        setProjectName(e)
    }

    return (
        <>
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.onHide}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                {title} Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-center">Fill the form below</h5>
                <Form noValidate validated={validated} {...props}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control required type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Name..." />
                        <Form.Control.Feedback type="invalid">
                            Please fill in the task name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Control required as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option>Not Started</option>
                                <option>In Progress</option>
                                <option>On Hold</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formBasicDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control value={dueDate} onChange={(e) => setDueDate(e.target.value)} required type="date" placeholder="date" />
                            <Form.Control.Feedback type="invalid">
                                Please fill in the due date.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formBasicProjects">
                        <Form.Label>Project to attach to</Form.Label>
                        <Form.Control value={projectName} onChange={(e) => handleProjects(e.target.value)} required as="select">
                            <option>Select the project</option>
                            {/* Mapping out the available projects and adding a spinner if the projects aren't
                            available yet */}
                            {projects !== '' && Array.isArray(projects) ? projects.map((project, index) => (
                                <option key={index}>{project.name}</option>
                            )) : 'Loading'}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicStack">
                        <Form.Label>Stack</Form.Label>
                        <Form.Control required value={stack} onChange={(e) => setStack(e.target.value)} type="text" placeholder="Stack..." />
                        <Form.Control.Feedback type="invalid">
                            Please fill in the stack
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicDifficulty">
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Control value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required as="select">
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
        </>
    )
})

export default TaskModal;