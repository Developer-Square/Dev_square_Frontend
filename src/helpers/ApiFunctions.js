import {addUsers, setLoading, updateGetUsers, addAdminUsers, updateUser, updateUserCount, userToBeUpdated, addTaskCreators, addTasks, updateGetTasks, addUser, updateAuth, updateTasks, createdTask} from '../redux/action-creator/index'
import Api from '../services/network'
import { displayErrorMsg } from './ErrorMessage';
import notify from "./Notify";

const api = new Api()

// Get all users
export function getUsers(params, dispatch) {

    let data = {}
    if (params !== undefined) {
        data = params  
    } else {
        data = {
            limit: 10,
            page: 1
        }
    }
    dispatch(setLoading())
    api.User().getAllUsers(data)
    .then(res => {
        if (res.status === 200){
            dispatch(addUsers(res.data))
            notify('success', 'Users fetched successfully')
            dispatch(setLoading())
            dispatch(updateGetUsers())
        }
    })
    .catch(err => {
        displayErrorMsg(err, dispatch)
    })
}

    // Get the Developer name    
export function getUser (id, dispatch, location)  {
    api.User().getUser(id).then(res => {
        if (res.status === 200) {
            // If the function is being called from the Profile.js then dispatch the following.
            if (location === 'profile') {
                dispatch(addUser(res.data))
                dispatch(updateAuth())
            } else {
                // Else dispatch action from the Pagination.js
                dispatch(addTaskCreators(res.data.name))
            }
        } 
    }).catch(err => {
        displayErrorMsg(err, dispatch)
    })
}

// Get admin users so that you can filter tasks by name in tasks page.
export function getAdminUsers(data, dispatch) {
    api.User().getAllUsersWithRole(data)
    .then(res => {
        if (res.status === 200) {
            dispatch(addAdminUsers(res.data.results))
        }
    })
    .catch(err => {
        displayErrorMsg(err, dispatch)
    })
}

// Update a user's details in the UserModal
export function createUpdateUserDetails(updateStatus, taskupdateid, data, props, dispatch, clearFields) {
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
            displayErrorMsg(err)
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
            const {message} = err.response.data
            const customMessage = `User not created! \n ${message}`
            displayErrorMsg(err, dispatch, customMessage)
        })
    }
}

// Tasks
// Get all tasks when the page loads
export function getTasks(params, dispatch) {
        //Set Loading to true
        dispatch(setLoading())
        //default attributes
        let data = {}
        if (params !== undefined) {
            data = params  
        } else {
            data = {
                limit: 10,
                page: 1
            }
        }

        api.Tasks().getAllTasks(data)
        .then(res => {
            if (res.status === 200) {
                //Dispatching an action to add tasks to the redux store
                dispatch(addTasks(res.data))
                dispatch(updateGetTasks(true))
                //Set Loading to false
                dispatch(setLoading())
                notify('success', 'Tasks fetched successfully')
                //eslint-disable-next-line
                res.data.results.map((task) => {
                    getUser(task.creator, dispatch)
                })
            }
        })
        .catch(err => {
            //Set Loading to false
            displayErrorMsg(err, dispatch)
        })

}

// Creates or updates a task using the modal.
export function createUpdateTask(UpdatedTask, data, dispatch, clearFields, props, instruction, addTaskToProject) {
    if (instruction === 'update') {
        api.Tasks().updateTask(UpdatedTask.id, data)
        .then(res => {
            if (res.status === 200) {
                notify('success', 'Task successfully updated')
                dispatch(updateTasks(res.data))
                clearFields()
                props.onHide()
            }
        })
        .catch(err => {
            displayErrorMsg(err, dispatch)
        })
    } else {
        api.Tasks().createTask(data)
        .then(res => {
            if (res.status === 201) {
                //Once a task is created we get its ID and pass it to the addToTask Function
                //so that we can add it to its specific project
                addTaskToProject(res.data.id)
                dispatch(createdTask(true))
                clearFields()
                notify('success', 'Task successfully created')
            }
        })
        .catch(err => {
            console.log(err)
            const {message} = err.response.data
            const customMessage = `Task not created! \n ${message}`
            displayErrorMsg(err, dispatch, customMessage)
        })
    }
}