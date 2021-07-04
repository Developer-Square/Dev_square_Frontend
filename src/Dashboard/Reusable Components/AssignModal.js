import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

//Own Components
import {setLoading} from '../../redux/action-creator/index'
import HandAnimation from './HandAnimation'
import { assignTask } from '../../helpers/ApiFunctions'

const Loader = styled.div`
    height: 100px;
`

export default function AssignModal(props) {
    const {admins, show, onHide, task} = props
    const {Loading} = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    function assignTasksToUsers(e, props) {
        dispatch(setLoading())
        const name = e.target.value
        assignTask(name, admins, dispatch, task, props)
    }
    return (
        <Modal size="sm" {...props} onHide={onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Assign Tasks</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {admins.length !== 0 ?
                    <> 
                        <HandAnimation loading={Loading} />
                        <Form.Group>
                            <Form.Label>Assign to: </Form.Label>
                            <Form.Control as="select" onChange={(e) => assignTasksToUsers(e, props)}>
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
