import {ADD_TASKS, TASK_ID_TO_BE_UPDATED} from '../action-types/index'

export const addTasks = (data) => {
    return {type: ADD_TASKS, payload: data}
}

export const taskUpdateId = (data) => {
    return {type: TASK_ID_TO_BE_UPDATED, payload: data}
}