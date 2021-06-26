import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

//Own Component
import { createUpdateProject, createUpdateUserDetails, deleteProjects, deleteTask, deleteUser } from '../../helpers/ApiFunctions'

export default function ConfirmDelete(props) {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.users)
    const {projects} = useSelector(state => state.projects)
    const {id, deleteType} = props

    /**
     * Check if the task is part of any project and if so,
     * remove the task and update the project's details.
     */
    function deleteTaskFromProject(formProps) {
        if (projects.length) {
            const len = projects.length
            // eslint-disable-next-line
            projects.map((project, index) => {
                if (project.tasks.includes(id)) {
                    // Make new array without the deleted task and
                    // send a request to update the user.
                    const newTasks = project.tasks.filter((task) => task !== id)
                    const data = {
                        tasks: newTasks
                    }
                    createUpdateProject(project, data, dispatch, () => {}, {onHide: () => {}}, 'update')
                }

                // Check if the map is done then move to the next step.
                if (index === len-1) {
                    deleteTask(id, formProps, dispatch)
                }
            })
        }
    }

    /**
     * Check if the task is assigned to any user and if so,
     * remove the task and update the user's details.
     */
    function deleteTaskFromUser(formProps) {
        if (Object.values(users).length) {
            const len = users.results.length
            // eslint-disable-next-line
            users.results.map((user, index) => {
                if (user.tasks.includes(id)) {
                    // Make new array without the deleted task and
                    // send a request to update the user.
                    const newTasks = user.tasks.filter((task) => task !== id)
                    const data = {
                        tasks: newTasks
                    }
                    createUpdateUserDetails(true, user.id, data, {onHide: () => {}}, dispatch, () => {})
                }

                // Check if the map is done then move to the next step.
                if (index === len-1) {
                    deleteTaskFromProject(formProps)
                }
            })
        }
    }

    function handleDelete(formProps) {
        if (deleteType === 'users') {
            deleteUser(id, dispatch, formProps)
        } else if (deleteType === 'projects') {
            deleteProjects(id, dispatch, formProps)
        } else {
            deleteTaskFromUser(formProps)
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
                        <Button variant="danger" onClick={() => handleDelete(props)}>Yes</Button>
                    </Modal.Body>
                </Modal>
            </>
        )
}
