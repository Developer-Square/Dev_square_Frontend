import {ADD_USERS, UPDATE_GET_USERS} from '../action-types/index'

const initialState = {
   getUsersState: false,
   users: []
}

function UsersReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: action.payload
            }
        case UPDATE_GET_USERS:
            return {
                ...state,
                getUsersState: !state.getUsersState
            }
    
        default:
            return state;
    }
}

export default UsersReducer;