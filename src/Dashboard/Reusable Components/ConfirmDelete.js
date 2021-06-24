import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

//Own Component
import Api from '../../services/network'
import { deleteProjects, deleteUser } from '../../helpers/ApiFunctions'

export default function ConfirmDelete(props) {
    const dispatch = useDispatch()
    const {projects} = useSelector(state => state.projects)
    const api = new Api()
    const {id, deleteType} = props

    function handleDelete(e, formProps) {
        if (deleteType === 'users') {
            deleteUser(id, dispatch, formProps)
        } else if (deleteType === 'projects') {
            deleteProjects(id, dispatch, formProps)
        }
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
                        Are you sure you want to delete this {props.component}?
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
