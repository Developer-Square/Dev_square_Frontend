import React from 'react'
import {useDispatch} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

//Own Component
import Api from '../../services/network'
import notify from '../../helpers/Notify'
import {updatedTask} from '../../redux/action-creator/index'

export default function ConfirmDelete(props) {
    const dispatch = useDispatch()
    function handleDelete(e, props) {
        const api = new Api()
        const {rowIndex, taskIds} = props
        //Map the indexes stored in the props to see which one matches the one that was clicked
        // eslint-disable-next-line
        Object.keys(taskIds).map((key) => {
            if (parseInt(key) === rowIndex) {
                api.Tasks().deleteTask(taskIds[key])
                .then(res => {
                    if (res.status === 204) {
                        notify('success', 'Task deleted successfully')
                        props.onHide()
                        dispatch(updatedTask())
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
            <>
                <Modal
                    {...props}
                    size="sm"
                    show={props.show}
                    onHide={props.onHide}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Are you sure you want to delete this task?
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body {...props} className="mx-auto">
                        <Button variant="outline-primary" className="mr-3" onClick={props.onHide}>No</Button>
                        <Button variant="danger" onClick={(e) => handleDelete(e, props)}>Yes</Button>
                    </Modal.Body>
                </Modal>
            </>
        )
}
