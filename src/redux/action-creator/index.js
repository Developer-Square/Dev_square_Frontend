import {ADD_TASKS, UPDATED_TASK} from '../action-types/index'

export const addTasks = (data) => {
    return {type: ADD_TASKS, payload: data}
}

export const updatedTask = () => {
    return {type: UPDATED_TASK}
}