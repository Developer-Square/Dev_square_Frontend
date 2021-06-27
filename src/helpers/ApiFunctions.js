import {addUsers, setLoading, updateGetUsers, addAdminUsers, updateUser, updateUserCount, userToBeUpdated, addTaskCreators, addTasks, updateGetTasks, addUser, updateAuth, updateTasks, createdTask, addNewUsers, assignedTask, updatedTask} from '../redux/action-creator/index'
import { updateProject, addProjects, addNewProjects } from '../redux/action-creator/projectActions';
import Api from '../services/network'
import { displayErrorMsg } from './ErrorMessage';
import notify from "./Notify";

const api = new Api()

// Get all users
export async function getUsers(params, dispatch) {
    let results
    let data = {}
    if (params !== undefined) {
        data = params  
    } else {
        data = {
            limit: 10,
            page: 1
        }
    }
    try {
        dispatch(setLoading())
        const res = await api.User().getAllUsers(data)

        if (res.status === 200){
            dispatch(addUsers(res.data))
            notify('success', 'Users fetched successfully')
            dispatch(setLoading())
            dispatch(updateGetUsers())
            // We need this data when deleting tasks from a user's task array.
            results = res.data
            return results
        }
    } catch (err) {
        displayErrorMsg(err, dispatch)
        return {}
    }
}

    // Get the Developer name    
export function getUser (id, dispatch)  {
    api.User().getUser(id).then(res => {
        if (res.status === 200) {
            dispatch(addUser(res.data))
            dispatch(updateAuth())
        } 
    }).catch(err => {
        displayErrorMsg(err, dispatch)
    })
}

// Get admin users so that you can filter tasks by name in tasks page.
export async function getAdminUsers(data, dispatch) {
    let results
    try {
        const res = await api.User().getAllUsersWithRole(data)

        if (res.status === 200) {
            dispatch(addAdminUsers(res.data.results))
            results = res.data
            // We need these results to compare them with the taskCreators Ids
            return results
        } 
    } catch (err) {
        displayErrorMsg(err, dispatch)
        return {}
    }
}

/**
 * @param  {} updateStatus
 * @param  {} taskupdateid
 * @param  {} data
 * @param  {} props
 * @param  {} dispatch
 * @param  {} clearFields
 * Update and Create users in the UserModal
 */
export function createUpdateUserDetails(updateStatus, userupdateid, data, props, dispatch, clearFields) {
    if (updateStatus === true) {
        api.User().updateUser(userupdateid, data)
        .then(res => {
            if(res.status === 200) {
                props.onHide()
                notify('success', 'User updated successfully')
                dispatch(updateUser(res.data))
                dispatch(updateUserCount())
                clearFields(props)
                dispatch(userToBeUpdated(''))
            }
        })
        .catch(err => {
            props.onHide()
            displayErrorMsg(err)
        })
    } else {
        api.User().createUser(data)
        .then(res => {
            if (res.status === 201) {
                notify('success', 'User successfully created')
                dispatch(addNewUsers(res.data))
                clearFields(props)
            }
            props.onHide()

        })
        .catch(err => {
            props.onHide()
            const customMessage = 'User not created!'
            displayErrorMsg(err, dispatch, customMessage)
        })
    }
}
/**
 * @param  {} id
 * @param  {} dispatch
 * @param  {} type
 * @param  {} deleteType
 * Reusable function for deleting users or projects
 */
export function deleteUser(id, dispatch, props) {
    api.User().deleteUser(id)
    .then(res => {
        if (res.status === 204) {
            notify('success', 'User deleted successfully')
            props.onHide()
            // Update the store so that the user page refreshes and gets
            // the new data from the backend.
            dispatch(updateUserCount())
        }
    })
    .catch(err => {
        props.onHide()
        displayErrorMsg(err, dispatch)
    })
}

// Tasks
// Get all tasks when the page loads
export function getTasks(params, dispatch, adminIds) {
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
                // Map over the every task and identify its creator's id
                // then map over the adminIds array and compare the task creator id
                // admin id to find the name of the admin who created the task
                // eslint-disable-next-line
                res.data.results.map((task) => {
                    // eslint-disable-next-line
                    adminIds.results.map(admin => {
                        if (admin.id === task.creator) {
                            dispatch(addTaskCreators(admin.name))
                        }
                    })
                })
            }
        })
        .catch(err => {
            //Set Loading to false
            displayErrorMsg(err, dispatch)
        })

}

// Creates or updates a task using the modal.
export function createUpdateTask(UpdatedTask, data, dispatch, clearFields, props, instruction, projectName, projects) {
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
                addTaskToProject(res.data.id, projectName, projects, dispatch, clearFields, props)
                dispatch(createdTask(true))
                clearFields()
                notify('success', 'Task successfully created')
            }
        })
        .catch(err => {
            const customMessage = 'Task not created!'
            displayErrorMsg(err, dispatch, customMessage)
        })
    }
}

    //Add the task to the specific project selected
export function addTaskToProject(id, projectName, projects, dispatch, clearFields, props) {
        // eslint-disable-next-line
        projects.map(project => {
            //projectName contains the name chosen in the form
            project.tasks.map((task, index) => {
                if (id !== undefined && id !== '') {
                    if (task === id) {
                        // Incase the task was in a previous project, remove it e.g. during 
                        // an task update we might want to remove a task from its current project to 
                        // another project. 
                        if (project.name !== projectName) {
                            project.tasks.splice(index, 1)
                        }
                        const data = {tasks: project.tasks}
                        createUpdateProject(project, data, dispatch, clearFields, props, 'update')
                    } 
                }
                return null
            })

            if (projectName === project.name) {
                if (id !== undefined && id !== '') {
                    if (project.tasks.includes(id) === false) {
                        project.tasks.push(id)
                        const data = {tasks: project.tasks}
                        console.log(project)
                        createUpdateProject(project, data, dispatch, clearFields, props, 'update')
                    }
                }
            } 
            
        })
    }
/**
 * @param  {} e
 * @param  {} props
 * Assign tasks to users and update tasks to show that they're assigned.
 */
export function assignTask(name, admins, dispatch, task, props) {
    // eslint-disable-next-line
    admins.map(admin => {
        if (admin.name.toLowerCase() === name.toLowerCase()) {
            let userId = admin.id
            let taskId = {
                taskId: task.id
            }
            api.Tasks().assignUserTask(userId, taskId)
            .then(res => {
                if (res.status === 200) {
                    notify('success', 'Task assigned successfully')
                    // Update task 'assigned: false' to 'assigned: true'
                    const data = {
                        assigned: true
                    }
                    createUpdateTask(task, data, dispatch, () => {}, props, 'update')
                    dispatch(assignedTask())
                    dispatch(setLoading())
                }
            })
            .catch(err => {
                props.onHide()
                displayErrorMsg(err, dispatch)
            })
        }
    })
}

export function deleteTask(id, props, dispatch) {
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
        // diplayErrorMsg has a dispatch setLoading so this one is to
        // counter the effect of that setLoading.
        dispatch(setLoading())
        displayErrorMsg(err, dispatch)
    })
}

// Projects    
// TODO: Make a change in TaskModal page to start using the projects in the store
// once you create the projects page.
export async function getProjects(dispatch) {
    let results
    try {
        const res = await api.Projects().getAllProjects()
    
        if (res.status === 200) {
            dispatch(addProjects(res.data.results))
            notify('success', 'Projects fetched successfully')
            // We need this data when deleting tasks from a user's task array.
            results = res.data.results
            return results
        }
    } catch (err) {
        displayErrorMsg(err, dispatch)
    }
}


/**
 * @param  {} project
 * @param  {} data
 * @param  {} dispatch
 * @param  {} clearFields
 * @param  {} props
 * 
 * Update an existing project.
 */
export function createUpdateProject(project, data, dispatch, clearFields, props, instruction) {
    if (instruction === 'update') {
        api.Projects().updateProject(project.id, data)
        .then(res => {
            if (res.status === 200) {
                notify('success', 'Project updated successfully')
                dispatch(updateProject())
                clearFields()
                props.onHide()
            }
        })
        .catch(err => {
            displayErrorMsg(err, dispatch)
        })
    } else {
        api.Projects().createProject(data)
        .then(res => {
            if (res.status === 201) {
                notify('success', 'Created project successfully')
                clearFields()
                props.onHide()
                dispatch(addNewProjects(res.data))
            }
        })
        .catch(err => {
            displayErrorMsg(err, dispatch)
        })
    }
}

export function deleteProjects(id, dispatch, props) {
    api.Projects().deleteProject(id)
            .then(res => {
                if (res.status === 204) {
                    dispatch(updateProject())
                    props.onHide()
                    notify('success', 'Project deleted successfully')
                }
            })
            .catch(err => {
                props.onHide()
                displayErrorMsg(err, dispatch)
            })
}