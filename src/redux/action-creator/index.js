import {ADD_TASKS, ADD_USER, UPDATED_TASK, UPDATE_AUTH} from '../action-types/index'

export const addTasks = (data) => {
    return {type: ADD_TASKS, payload: data}
}

export const addUser = (data) => {
    return {type: ADD_USER, payload: data}
}

export const updatedTask = () => {
    return {type: UPDATED_TASK}
}

export const updateAuth = () => {
    return {type: UPDATE_AUTH}
}