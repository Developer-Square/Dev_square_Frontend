import {CHANGE_MENU_LINK} from '../action-types/index'

const initialState = {
    currentLink: ''
}

function Reducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_MENU_LINK:
            return {
                ...state,
                currentLink: action.payload
            }
    
        default:
            return state;
    }
}

export default Reducer;