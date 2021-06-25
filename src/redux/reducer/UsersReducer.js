import {ADD_USERS, UPDATE_GET_USERS, USER_TO_BE_UPDATED, UPDATE_USER, UPDATE_USER_COUNT, MODAL_SHOW, PAGE_NUMBER, ADD_USER_TASK, ADD_NEW_USERS} from '../action-types/index'

const initialState = {
   getUsersState: false,
   users: {},
   updatedCount: 0,
   modalShow: false,
   usertobeupdated: '',
   pageNumber: '',
   userTasks: [],
}

function UsersReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: action.payload
            }
        case ADD_NEW_USERS: 
            return {
                ...state,
                users: {
                    ...state.users,
                    results: [...state.users.results, action.payload]
                }
            }
        case UPDATE_GET_USERS:
            return {
                ...state,
                getUsersState: !state.getUsersState
            }
        case UPDATE_USER:
            return {
                ...state,
                users: {
                    ...state.users,
                    results: state.users.results.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload
                    }

                    return user
                })}
            }
        case UPDATE_USER_COUNT:
            return {
                ...state,
                updatedCount: state.updatedCount + 1
            }
        case MODAL_SHOW:
            return {
                ...state,
                modalShow: !state.modalShow
            }
        case USER_TO_BE_UPDATED:
            return {
                ...state,
                usertobeupdated: action.payload
            }
        case PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.payload
            }
        case ADD_USER_TASK:
            return {
                ...state,
                userTasks: [...state.userTasks, action.payload]
            }
    
        default:
            return state;
    }
}

export default UsersReducer;