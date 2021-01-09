import {ADD_TASKS, ADD_USER, CREATED_TASK, GET_TASKS, UPDATED_TASK, UPDATE_AUTH, SET_LOADING, ADD_TASK_CREATORS, ADD_USERS, UPDATE_GET_USERS, ADD_ADMIN_USERS, ADD_SPECIFIC_TASKS, ASSINGNED_TASKS, UPDATE_USER_COUNT, UPDATE_USER, MODAL_SHOW, PAGE_NUMBER, ADD_USER_TASK, USER_TO_BE_UPDATED, UPDATE_TASKS, MODAL_TASK_SHOW} from '../action-types/index'

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

export const updateTasks = (data) => {
    return {type: UPDATE_TASKS, payload: data}
}

export const modalTaskShow = () => {
    return {type: MODAL_TASK_SHOW}
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

export const updateUserCount = () => {
    return {type: UPDATE_USER_COUNT}
}

export const userToBeUpdated = (data) => {
    return {type: USER_TO_BE_UPDATED, payload: data}
}

export const updateUser = (data) => {
    return {type: UPDATE_USER, payload: data}
}

export const setModalShow = () => {
    return {type: MODAL_SHOW}
}

export const updatePageNumber = (data) => {
    return {type: PAGE_NUMBER, payload: data}
}

export const addUserTasks = (data) => {
    return {type: ADD_USER_TASK, payload: data}
}
