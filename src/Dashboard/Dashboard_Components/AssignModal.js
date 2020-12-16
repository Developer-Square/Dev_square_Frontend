import React from 'react'
import {useDispatch} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

//Own Components
import Api from '../../services/network'
import notify from '../../helpers/Notify'
import {assignedTask} from '../../redux/action-creator/index'

export default function AssignModal(props) {
    const {admins, show, onHide, task} = props
    const dispatch = useDispatch()

    function assignTask(e, onHide) {
        const api = new Api()
        const name = e.target.value
        // eslint-disable-next-line
        admins.map(admin => {
            if (admin.name.toLowerCase() === name.toLowerCase()) {
                let userId = admin.id
                let taskId = {
                    taskId: task
                }
                api.Tasks().assignUserTask(userId, taskId)
                .then(res => {
                    if (res.status === 200) {
                        notify('success', 'Task assigned successfully')
                        dispatch(assignedTask())
                        onHide()
                    }
                })
                .catch(err => {
                    const {message} = err.response.data
                    notify('error', message)
                })
            }
        })
    }
    return (
        <Modal size="sm" {...props} show={show} onHide={onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Assign Tasks</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {admins.length !== 0 ?
                    <Form.Group {...props}>
                        <Form.Label>Assign to: </Form.Label>
                        <Form.Control as="select" onChange={(e) => assignTask(e, onHide)}>
                            <option>Choose user</option>
                            {admins.map((admin, index) => (
                                <option key={index} className="names">{admin.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    :
                    null
                }
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                Close
            </Button>
            </Modal.Footer>
      </Modal>
    )
}
