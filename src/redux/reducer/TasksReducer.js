import {ADD_TASKS, TASK_ID_TO_BE_UPDATED} from '../action-types/index'

const initialState = {
    TaskUpdateId: '',
    Tasks: []
}

function TasksReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TASKS:
            return {
                ...state,
                Tasks: action.payload
            }
        case TASK_ID_TO_BE_UPDATED:
            return {
                ...state,
                TaskUpdateId: action.payload
            }
    
        default:
            return state;
    }
}

export default TasksReducer;