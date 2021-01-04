import React from 'react'
import {useDispatch} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

//Own Component
import Api from '../../services/network'
import notify from '../../helpers/Notify'
import {updatedTask, updateUserCount} from '../../redux/action-creator/index'

export default function ConfirmDelete(props) {
    const dispatch = useDispatch()

    function handleDelete(e, props) {
        const api = new Api()
        const {id, packages, deleteType} = props
        //Map the indexes stored in the props to see which one matches the one that was clicked
        const {results} = packages

        // eslint-disable-next-line
        results.map((value) => {
            if (value.id === id) {
                if (deleteType === 'tasks') {
                    api.Tasks().deleteTask(value.id)
                    .then(res => {
                        if (res.status === 204) {
                            notify('success', 'Task deleted successfully')
                            props.onHide()
                            dispatch(updatedTask(true))
                        }
                    })
                    .catch(err => {
                        props.onHide()
                        if (err.response) {
                            const {message} = err.response.data
                            notify('error', message)
                        } else {
                            notify('error', 'Something went wrong, Please refresh the page.')
                        }
                    })
                } else if (deleteType === 'users') {
                    api.User().deleteUser(id)
                    .then(res => {
                        if (res.status === 204) {
                            dispatch(updateUserCount())
                            props.onHide()
                            notify('success', 'User deleted successfully')
                        }
                    })
                    .catch(err => {
                        props.onHide()
                        if (err.response) {
                            const {message} = err.response.data
                            notify('error', message)
                        } else {
                            notify('error', 'Something went wrong, Please refresh the page.')
                        }
                    })
                }
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
