import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'

//Own Components
import Api from '../../../services/network'
import notify from '../../../helpers/Notify'
import IsNotEmpty from '../../../helpers/IsNotEmpty'
import { updateUserCount, updateUser, userToBeUpdated } from '../../../redux/action-creator'

export default function UsersModal(props) {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [skills, setSkills] = useState('')
    const [status, setStatus] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const [validated, setValidated] = useState(false)
    const [updateStatus, setUpdateStatus] = useState(false)
    const [noLastName, setNoLastName] = useState(false)
    const [taskupdateid, settaskupdateid] = useState('')

    useEffect(() => {
        if (props.usertobeupdated !== '') {
            setUpdateStatus(true)
            const {name, email, role, skills, status, id} = props.usertobeupdated
            settaskupdateid(id)
            let splitName = name.split(' ')
            let newStatus = status.charAt(0).toUpperCase() + status.slice(1)
            let newRole = role.charAt(0).toUpperCase() + role.slice(1)
            setFname(splitName[0])
            if (splitName[1] === undefined) {
                setNoLastName(true)
            } else {
                setLname(splitName[1])
            }
            setRole(newRole)
            setEmail(email)
            setStatus(newStatus)
            if (skills[0] !== undefined) {
                setSkills(skills[0])
            }
        }
    }, [props])

    const clearFields = (props) => {
        setLname('')
        setFname('')
        setEmail('')
        settaskupdateid('')
        setStatus('')
        setSkills('')
        setRole('')
        setPassword('')
        setUpdateStatus(false)
        dispatch(userToBeUpdated(''))
        props.onHide()
    }

    function handleSubmit(e, props) {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            setValidated(true)
            let newString = skills.replace(/\s/g, "")
            let skillsArray = [newString]
            let name = fname
            //Concat the last name to the first name if the first name is given
            if (noLastName === false) {
                name = fname.concat(' ', lname)
            } 
            let data = {
                email,
                name,
                role: role.toLocaleLowerCase(),
                skills: skillsArray,
                status: status.toLocaleLowerCase(),
                password
            }
            //Removing the update field when we are updating
            if (updateStatus === true) {
                delete data.password
                delete data.role
            }
            
            // //Checking if the data is empty with the helper function
            if (IsNotEmpty(data) === true) {
                const api = new Api()
                //Choose whether to update or register a user
                if (updateStatus === true) {
                    api.User().updateUser(taskupdateid, data)
                    .then(res => {
                        if(res.status === 200) {
                            notify('success', 'User updated successfully')
                            dispatch(updateUser(res.data))
                            dispatch(updateUserCount())
                            clearFields(props)
                            dispatch(userToBeUpdated(''))
                        }
                    })
                    .catch(err => {
                        if (err.response) {
                            const {message} = err.response.data
                            notify('error', message)
                        } else {
                            notify('error', 'Something went wrong, Please refresh the page.')
                        }
                    })
                } else {
                    api.User().createUser(data)
                    .then(res => {
                        if (res.status === 201) {
                            notify('success', 'User successfully created')
                            clearFields(props)
                        }
                    })
                    .catch(err => {
                        if (err.response) {
                            const {message} = err.response.data
                            const customMessage = `User not created! \n ${message}`
                            notify('error', customMessage)
                        } else {
                            notify('error', 'Something went wrong, Please refresh the page.')
                        }
                    })
                }
            } else {
                notify('error', 'Please fill in all the fields')
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
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {updateStatus ? 'Update': 'Create a New'} User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-center">Fill the form below</h5>
                <Form noValidate validated={validated} {...props}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
                        <Form.Control.Feedback type="invalid">
                            Please fill in your email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicfname">
                            <Form.Control required type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First Name..." />
                            <Form.Control.Feedback type="invalid">
                                Please fill in your First Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasiclname">
                            <Form.Control required={noLastName === true ? false : true} type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last Name..." />
                            <Form.Control.Feedback type="invalid">
                                Please fill in your Last Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>List your skills e.g PHP, Java</Form.Label>
                        <Form.Control required as="textarea" rows={4} value={skills} onChange={(e) => setSkills(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Please add a skill.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicstatus">
                        <Form.Label>User's status</Form.Label>
                        <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>Status...</option>
                            <option>Available</option>
                            <option>Busy</option>
                        </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please fill your status.
                            </Form.Control.Feedback>
                    </Form.Group>
                    {updateStatus !== true ?
                    <>
                        <Form.Group controlId="formBasicrole">
                            <Form.Label>User's role</Form.Label>
                            <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option>Role...</option>
                                <option>Admin</option>
                                <option>User</option>
                            </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please fill your role.
                                </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                            <Form.Control.Feedback type="invalid">
                                Please fill in your Password.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </>
                    : null
                    }
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
