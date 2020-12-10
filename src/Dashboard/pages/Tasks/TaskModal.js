import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react'
// import {useSelector} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

//Own Components
import Api from '../../../services/network'
import IsEmpty from '../../../helpers/IsEmpty'
import notify from '../../../helpers/Notify'

const TaskModal = forwardRef((props, ref) => {
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [stack, setStack] = useState('')
    const [difficulty, setDifficulty] = useState('Easy')
    const [status, setStatus] = useState('Not Started')
    const [validated, setValidated] = useState(false)
    const [projects, setProjects] = useState('')
    const [projectTasks, setProjectTasks] = useState('')
    // //Fetching the task id from the store
    // const {TaskUpdateId, Tasks} = useSelector((state) => state.tasks)
    useImperativeHandle(
        ref,
        () => ({
            updateFormfields() {
                if(props.task !== '') {
                    const {description, dueDate, stack, difficulty, status, projects} = props.task
                    setDescription(description)
                    console.log(dueDate)
                    setDueDate(dueDate)
                    //TODO: change status when a status is assigned
                    setStatus(status)
                    setStack(stack)
                    let diff = difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
                    setDifficulty(diff)
                    setProjects(projects)
                }
            }
        })
    )

    //Creating a new instance of the api class
    const api = new Api()

    useEffect(() => {
        //Get projects
        getProjects()
        // eslint-disable-next-line
    }, [props])

    function getProjects() {
        api.Projects().getAllProjects()
        .then(res => {
            if (res.status === 200) {
                setProjects(res.data.results)
            }
        })
        .catch(err => {
            const {message} = err.response.data
            notify('error', message)
        })
    }
    
    //Add the task to the specific project selected
    function addTaskToProject(id) {
        // eslint-disable-next-line
        projects.map(project => {
            if (projectTasks === project.name) {
                project.tasks.push(id)
                const data = {tasks: project.tasks}
                //Remove the clientId since its not allowed in the backend
                api.Projects().updateProject(project.id, data)
            }
        })
    }

    //Converts words like 'Not Started' into camelCase e.g. 'notStarted'
    //since the backend only receives camelCase strings in some instances
    const converter = (input) => {
        let regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
        let data = input.match(regex)
        
        let result = ""
        if(data !== null) {
            for (let i = 0; i < data.length; i++) {
                let tempStr = data[i].toLowerCase();
                
                if (i !== 0) {
                    //Convert first letter to Uppercase( the word is in lowercase )
                    tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1)
                }
    
                result += tempStr
            }
        }
        return result
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
                stack
            }
            
            //Checking if the data is empty with the helper function
            if (IsEmpty(data) === true) {
                //Hide the modal if the data is Not empty
                props.onHide()
                data.creator = localStorage.getItem('userID')
                api.Tasks().createTask(data)
                .then(res => {
                    if (res.status === 201) {
                        //Once a task is created we get its ID and pass it to the addToTask Function
                        //so that we can add it to its specific project
                        addTaskToProject(res.data.id)
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
        <>
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
                        <Form.Control required type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Name..." />
                        <Form.Control.Feedback type="invalid">
                            Please fill in the task name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Control disabled required as="select" value={status}>
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
                        <Form.Control value={projectTasks} onChange={(e) => setProjectTasks(e.target.value)} required as="select">
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