import {ADD_TASKS, UPDATED_TASK} from '../action-types/index'

const initialState = {
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
    
        default:
            return state;
    }
}

export default TasksReducer;