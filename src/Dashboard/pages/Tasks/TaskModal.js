import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react'
import {useDispatch} from 'react-redux'
// import {useSelector} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

//Own Components
import Api from '../../../services/network'
import IsNotEmpty from '../../../helpers/IsNotEmpty'
import notify from '../../../helpers/Notify'
import {createdTask, updatedTask} from '../../../redux/action-creator/index'

const TaskModal = forwardRef((props, ref) => {
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [stack, setStack] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [status, setStatus] = useState('')
    const [validated, setValidated] = useState(false)
    const [projects, setProjects] = useState('')
    const [projectTasks, setProjectTasks] = useState('')
    const [disabledProject, setDisabledProject] = useState(false)
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    //Function call coming from the parent component
    useImperativeHandle(
        ref,
        () => ({
            updateFormfields() {
                if(props.task !== '') {
                    setTitle('Update')
                    const {description, dueDate, stack, difficulty, status} = props.task
                    setDisabledProject(true)
                    setDescription(description)
                    //Change the date to a proper format that can be displayed
                    const date = dueDate.slice(0,10)
                    props.task.dueDate = date
                    setDueDate(date)
                    //TODO: change status when a status is assigned
                    setStatus(status)
                    setStack(stack)
                    //difficulty originally comes in small letters eg. easy, so it has to be
                    //capitalized eg. Easy, to fit the value in the frontend
                    let diff = difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
                    setDifficulty(diff)
                    //Get the specific project that the task to be updated is attached to
                    if (projects !== '' && projects !== undefined) {
                        // eslint-disable-next-line
                        projects.map(project => {
                            // eslint-disable-next-line
                            project.tasks.map(task => {
                                if (task.includes(props.task.id)) {
                                    setProjectTasks(project.name)
                                }
                            })
                        })
                    }
                }
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
            const {message} = err
            notify('error', message)
        })
    }
    
    //Add the task to the specific project selected
    function addTaskToProject(id) {
        // eslint-disable-next-line
        projects.map(project => {
            //projectTasks contains the name chosen in the form
            if (projectTasks === project.name) {
                if (id !== null) {
                    project.tasks.push(id)
                    const data = {tasks: project.tasks}
                    //Remove the clientId since its not allowed in the backend
                    api.Projects().updateProject(project.id, data)
                    .then(res => {
                        if (res.status === 200) {
                            notify('success', 'Added task to project successfully')
                        }
                    })
                    .catch(err => {
                        const {message} = err.response.data
                        notify('error', message)
                    })
                }
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

    const clearFields = () => {
        setDescription('')
        setDueDate('')
        setStack('')
        setDifficulty('')
        setStatus('')
        setProjectTasks('')
        setDisabledProject(false)
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
                id: props.task.id,
                creator: props.task.creator,
                stack
            }
            //If props is not empty then its an update
            if (Object.keys(props.task).length !== 0 && props.task.constructor === Object) {
                const {task} = props
                //Send an update request
                //First check if the user made any changes
                function shallowEquality(obj1, obj2) {
                    const keys1 = Object.keys(obj1)
                    const keys2 = Object.keys(obj2)
                    //checking if the number of keys are the same between the two objects
                    if (keys1.length !== keys2.length) {
                        return false
                    }

                    for (let key of keys1) {
                        if (obj1[key] !== obj2[key]) {
                            return false 
                        }
                    }
                    return true
                }

                //If there's a difference between the two projects then
                //update the task
                if (shallowEquality(task, data) === false) {
                    //remove the project attribute as it is not to be sent
                    //along with the task's object
                    delete data.id
                    api.Tasks().updateTask(task.id, data)
                    .then(res => {
                        if (res.status === 200) {
                            notify('success', 'Task successfully updated')
                            dispatch(updatedTask())
                            clearFields()
                            props.onHide()
                        }
                    })
                    .catch(err => {
                        const {message} = err.response.data
                        notify('error', message)
                    })
                } else {
                     //If nothing has been changed show the user a pop message
                    notify('info', 'You have Not changed anything')
                }
            } else {
                //Send a create task request 
                if (projectTasks !== '' && projectTasks !== 'Select the project') {
                    delete data.id               
                    data.creator = localStorage.getItem('userID')
                    //Checking if the data is empty with the helper function
                    if (IsNotEmpty(data) === true) {
                        //Hide the modal if the data is Not empty
                        props.onHide()
                        api.Tasks().createTask(data)
                        .then(res => {
                            if (res.status === 201) {
                                //Once a task is created we get its ID and pass it to the addToTask Function
                                //so that we can add it to its specific project
                                addTaskToProject(res.data.id)
                                dispatch(createdTask())
                                clearFields()
                                notify('success', 'Task successfully created')
                            }
                        })
                        .catch(err => {
                            const {message} = err.response.data
                            const customMessage = `Task not created! \n ${message}`
                            notify('error', customMessage)
                        })
                    }
                } else {
                    notify('error', 'You have not selected the project')
                }
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
        show={props.show}
        onHide={props.onHide}
        >
            <Modal.Header closeButton>
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
                        <Form.Control disabled={disabledProject} value={projectTasks} onChange={(e) => setProjectTasks(e.target.value)} required as="select">
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