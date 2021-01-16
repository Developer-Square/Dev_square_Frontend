import {ADD_PROJECTS} from '../action-types'

export const addProjects = (data) => {
    return {type: ADD_PROJECTS, payload: data}
}