import {ADD_TASKS, ADD_TASK_IDS, ADD_USER, CREATED_TASK, GET_TASKS, UPDATED_TASK, UPDATE_AUTH, SET_LOADING, ADD_TASK_CREATORS, ADD_USERS, UPDATE_GET_USERS} from '../action-types/index'

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

export const updatedTask = () => {
    return {type: UPDATED_TASK}
}

export const createdTask = () => {
    return {type: CREATED_TASK}
}

export const updateGetTasks = () => {
    return {type: GET_TASKS}
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