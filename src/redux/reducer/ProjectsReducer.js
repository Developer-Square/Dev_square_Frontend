import {ADD_ALL_PROJECTS, ADD_NEW_PROJECTS, PROJECT_TO_BE_UPDATED, UPDATE_PROJECT} from '../action-types/index'

const initialState = {
   projects: [],
   updateProjectCount: 0,
   projecttobeupdated: '',
}

function ProjectsReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_ALL_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_NEW_PROJECTS:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        case UPDATE_PROJECT:
            return {
                ...state,
                updateProjectCount: state.updateProjectCount + 1
            }
        case PROJECT_TO_BE_UPDATED:
            return {
                ...state,
                projecttobeupdated: action.payload
            }
    
        default:
            return state;
    }
}

export default ProjectsReducer;