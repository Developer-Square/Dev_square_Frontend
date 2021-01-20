import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

//Own Component
import Api from '../../services/network'
import notify from '../../helpers/Notify'
import {updatedTask, updateUserCount, addUsers, updateGetUsers} from '../../redux/action-creator/index'

export default function ConfirmDelete(props) {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.users)
    const api = new Api()
    const {id, deleteType} = props


    useEffect(() => {
        if (Object.keys(users).length === 0) {
            getUsers()
        }
        // eslint-disable-next-line
    }, [])

    //Get All Users
	function getUsers() {
        let data = {                
            limit: 6,
            page: 1
        }
		api.User().getAllUsers(data)
		.then(res => {
			if (res.status === 200){
                dispatch(addUsers(res.data))
				notify('success', 'Users fetched successfully')
				dispatch(updateGetUsers())
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
    }

    function handleDelete(e, props) {
        let len = users.results.length
        //pick the user id and use it to delete a user's tasks
        // eslint-disable-next-line
        users.results.map((user, index) => {
            // eslint-disable-next-line
            user.tasks.map(task => {
                if (task === id) {
                    let data = {
                        taskId: id
                    }
                    api.Tasks().deleteUsersTask(user.id, data)
                    .then(res => {
                        if (res.status === 204) {
                            notify('success', 'Task deleted from User successfully')
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
                }
            })
            if (index === len - 1) {
                //Wait till mapping is done to delete the task from the backend
                deleteTaskFromBackend()
            }
        })
    }

    const deleteTaskFromBackend = () => {
        if (deleteType === 'tasks') {
            api.Tasks().deleteTask(id)
            .then(res => {
                if (res.status === 204) {
                    notify('success', 'Task deleted successfully')
                    props.onHide()
                    dispatch(updatedTask(''))
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
