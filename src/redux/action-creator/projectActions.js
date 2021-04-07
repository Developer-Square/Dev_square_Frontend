import {ADD_ALL_PROJECTS} from '../action-types/index'

export const addProjects = (data) => {
    return {type: ADD_ALL_PROJECTS, payload: data}
}