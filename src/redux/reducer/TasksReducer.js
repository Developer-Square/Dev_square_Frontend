import {ADD_TASKS, UPDATED_TASK, CREATED_TASK} from '../action-types/index'

const initialState = {
    CreatedTask: false,
    UpdatedTask: false,
    Tasks: []
}

function TasksReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TASKS:
            return {
                ...state,
                Tasks: action.payload
            }
        case UPDATED_TASK:
            return {
                ...state,
                UpdatedTask: !state.UpdatedTask
            }
        case CREATED_TASK:
            return {
                ...state,
                UpdatedTask: !state.CreatedTask
            }
    
        default:
            return state;
    }
}

export default TasksReducer;