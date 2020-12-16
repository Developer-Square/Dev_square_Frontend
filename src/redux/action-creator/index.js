import {ADD_TASKS, ADD_TASK_IDS, ADD_USER, CREATED_TASK, GET_TASKS, UPDATED_TASK, UPDATE_AUTH, SET_LOADING, ADD_TASK_CREATORS, ADD_USERS, UPDATE_GET_USERS, ADD_ADMIN_USERS, ADD_SPECIFIC_TASKS, ASSINGNED_TASKS} from '../action-types/index'

export const setLoading = () => {
    return {type: SET_LOADING}
}

//For the TasksReducer

export const addTasks = (data) => {
    return {type: ADD_TASKS, payload: data}
}

export const addTaskCreators = (data) => {
    return {type: ADD_TASK_CREATORS, payload: data}
}

export const addTaskIds = (data) => {
    return {type: ADD_TASK_IDS, payload: data}
}

export const updatedTask = (data) => {
    return {type: UPDATED_TASK, payload: data}
}

export const createdTask = (data) => {
    return {type: CREATED_TASK, payload: data}
}

export const updateGetTasks = (data) => {
    return {type: GET_TASKS, payload: data}
}

export const addAdminUsers = (data) => {
    return {type: ADD_ADMIN_USERS, payload: data}
}

export const addSpecificTasks = (data) => {
    return {type: ADD_SPECIFIC_TASKS, payload: data}
}

export const assignedTask = (data) => {
    return {type: ASSINGNED_TASKS, payload: data}
}

//For the AuthReducer

export const addUser = (data) => {
    return {type: ADD_USER, payload: data}
}

export const updateAuth = () => {
    return {type: UPDATE_AUTH}
}

//For the UsersReducer
export const addUsers = (data) => {
    return {type: ADD_USERS, payload: data}
}

export const updateGetUsers = () => {
    return {type: UPDATE_GET_USERS}
}