import {ADD_ALL_PROJECTS, ADD_NEW_PROJECTS, PROJECT_TO_BE_UPDATED, UPDATE_PROJECT} from '../action-types/index'

export const addProjects = (data) => {
    return {type: ADD_ALL_PROJECTS, payload: data}
}

export const addNewProjects = (data) => {
    return {type: ADD_NEW_PROJECTS, payload: data}
}

export const updateProject = () => {
    return {type: UPDATE_PROJECT}
}

export const projectToBeUpdated = (data) => {
    return {type: PROJECT_TO_BE_UPDATED, payload: data}
}