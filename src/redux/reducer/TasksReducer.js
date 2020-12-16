import {ADD_TASKS, ADD_TASK_IDS, UPDATED_TASK, CREATED_TASK, GET_TASKS, SET_LOADING, ADD_TASK_CREATORS, ADD_ADMIN_USERS, ADD_SPECIFIC_TASKS, ASSINGNED_TASKS} from '../action-types/index'

const initialState = {
    CreatedTask: false,
    UpdatedTask: false,
    GetTasks: false,
    AssignedTask: false,
    Loading: false,
    Tasks: [],
    TaskCreators: [],
    Admins: [],
    TaskIds: {}
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
                CreatedTask: !state.CreatedTask
            }
        case GET_TASKS:
            return {
                ...state,
                GetTasks: !state.GetTasks
            }
        case ADD_TASK_IDS:
            return {
                ...state,
                TaskIds: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                Loading: !state.Loading
            }
        case ADD_TASK_CREATORS:
            return {
                ...state,
                TaskCreators: [...state.TaskCreators, action.payload]
            }
        case ADD_ADMIN_USERS:
            return {
                ...state,
                Admins: action.payload
            }
        case ADD_SPECIFIC_TASKS:
            return {
                ...state,
                Tasks: {...state.Tasks, 
                    results: action.payload
                }
            }
        case ASSINGNED_TASKS:
        return {
            ...state,
            AssignedTask: !state.AssignedTask
        }

        default:
            return state;
    }
}

export default TasksReducer;