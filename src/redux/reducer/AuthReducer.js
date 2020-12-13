import {ADD_USER, UPDATE_AUTH} from '../action-types/index'

const initialState = {
   auth: false,
   user: ''
}

function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            }
        case UPDATE_AUTH:
            return {
                ...state,
                auth: !state.auth
            }
    
        default:
            return state;
    }
}

export default AuthReducer;