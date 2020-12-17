import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

//Own Components
import Api from '../../services/network'
import notify from '../../helpers/Notify'
import {assignedTask, setLoading} from '../../redux/action-creator/index'
import HandAnimation from './HandAnimation'

const Loader = styled.div`
    height: 100px;
`

export default function AssignModal(props) {
    const {admins, show, onHide, task} = props
    const {Loading} = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    function assignTask(e, onHide) {
        dispatch(setLoading())
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
                        dispatch(setLoading())
                        onHide()
                    }
                })
                .catch(err => {
                    const {message} = err.response.data
                    notify('error', message)
                    dispatch(setLoading())
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
                {admins.length === 0 ?
                    <>
                        <Loader>
                        <HandAnimation loading={Loading} />
                        </Loader>
                        <Form.Group {...props}>
                            <Form.Label>Assign to: </Form.Label>
                            <Form.Control as="select" onChange={(e) => assignTask(e, onHide)}>
                                <option>Choose user</option>
                                {admins.map((admin, index) => (
                                    <option key={index} className="names">{admin.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </>
                    :
                    <Loader>
                        <HandAnimation loading={true} />
                    </Loader>
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
