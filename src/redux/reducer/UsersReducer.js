import {ADD_USERS, UPDATE_GET_USERS, UPDATE_USER, UPDATE_USER_COUNT, MODAL_SHOW} from '../action-types/index'

const initialState = {
   getUsersState: false,
   users: [],
   updatedCount: 0,
   modalShow: false,
   userToBeUpdated: ''
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
        case UPDATE_USER:
            return {
                ...state,
                userToBeUpdated: action.payload
            }
    
        default:
            return state;
    }
}

export default UsersReducer;