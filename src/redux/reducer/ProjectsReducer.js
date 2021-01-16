import {ADD_PROJECTS} from '../action-types/index'

const initialState = {
   projects: ''
}

function ProjectsReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
    
        default:
            return state;
    }
}

export default ProjectsReducer;