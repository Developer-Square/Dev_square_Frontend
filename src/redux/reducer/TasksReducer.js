import {ADD_TASKS, UPDATED_TASK, CREATED_TASK, GET_TASKS, SET_LOADING, ADD_TASK_CREATORS, ADD_ADMIN_USERS, ADD_SPECIFIC_TASKS, ASSINGNED_TASKS, UPDATE_TASKS, MODAL_TASK_SHOW, ADD_TASKS_ALL, ADD_NEW_TASKS, ADD_COUNT_DATA} from '../action-types/index'

const initialState = {
    CreatedTask: false,
    CreatedCount: 0,
    UpdatedTask: '',
    UpdatedCount: 0,
    GetTasks: false,
    AssignedTask: false,
    AssignedCount:0,
    Loading: false,
    Tasks: [],
    TaskCreators: [],
    NewTasks: [],
    AllTasks: [],
    Admins: [],
    TasksCountData: '',
    ModalShow: false
}

function TasksReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TASKS:
            return {
                ...state,
                Tasks: action.payload
            }
        case ADD_TASKS_ALL:
            return {
                ...state,
                AllTasks: action.payload
            }
        case ADD_NEW_TASKS:
            return {
                ...state,
                NewTasks: action.payload
            }
        case ADD_COUNT_DATA:
            return {
                ...state,
                TasksCountData: action.payload,
            }
        case UPDATED_TASK:
            return {
                ...state,
                UpdatedTask: action.payload,
                UpdatedCount: state.UpdatedCount + 1
            }
        case CREATED_TASK:
            return {
                ...state,
                CreatedTask: action.payload,
                CreatedCount: state.CreatedCount + 1
            }
        case GET_TASKS:
            return {
                ...state,
                GetTasks: action.payload
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
                AssignedTask: action.payload,
                AssignedCount: state.AssignedCount + 1
        }
        case MODAL_TASK_SHOW:
            return {
                ...state,
                ModalShow: !state.ModalShow
        }
        case UPDATE_TASKS:
            return {
                ...state,
                Tasks: {
                    ...state.Tasks,
                    results: state.Tasks.results.map(task => {
                        if (task.id === action.payload.id) {
                            return action.payload
                        }
    
                        return task
                    })
                }
        }

        default:
            return state;
    }
}

export default TasksReducer;