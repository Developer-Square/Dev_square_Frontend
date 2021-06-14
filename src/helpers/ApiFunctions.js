import {addUsers, setLoading, updateGetUsers, addAdminUsers, updateUser, updateUserCount, userToBeUpdated} from '../redux/action-creator/index'
import Api from '../services/network'
import { displayErrorMsg } from './ErrorMessage';
import notify from "./Notify";

const api = new Api()

// Get all users
export function getUsers(params, dispatch) {

    let data = {}
    if (params !== undefined) {
        data = params  
    } else {
        data = {
            limit: 10,
            page: 1
        }
    }
    dispatch(setLoading())
    api.User().getAllUsers(data)
    .then(res => {
        if (res.status === 200){
            dispatch(addUsers(res.data))
            notify('success', 'Users fetched successfully')
            dispatch(setLoading())
            dispatch(updateGetUsers())
        }
    })
    .catch(err => {
        displayErrorMsg(err, dispatch)
    })
}

// Get admin users so that you can filter tasks by name in tasks page.
export function getAdminUsers(data, dispatch) {
    api.User().getAllUsersWithRole(data)
    .then(res => {
        if (res.status === 200) {
            dispatch(addAdminUsers(res.data.results))
        }
    })
    .catch(err => {
        displayErrorMsg(err, dispatch)
    })
}

// Update a user's details in the UserModal
export function createUpdateUserDetails(updateStatus, taskupdateid, data, props, dispatch, clearFields) {
    if (updateStatus === true) {
        api.User().updateUser(taskupdateid, data)
        .then(res => {
            if(res.status === 200) {
                notify('success', 'User updated successfully')
                dispatch(updateUser(res.data))
                dispatch(updateUserCount())
                clearFields(props)
                dispatch(userToBeUpdated(''))
            }
        })
        .catch(err => {
            displayErrorMsg(err)
        })
    } else {
        api.User().createUser(data)
        .then(res => {
            if (res.status === 201) {
                notify('success', 'User successfully created')
                clearFields(props)
            }
        })
        .catch(err => {
            if (err.response) {
                const {message} = err.response.data
                const customMessage = `User not created! \n ${message}`
                notify('error', customMessage)
            } else {
                notify('error', 'Something went wrong, Please refresh the page.')
            }
        })
    }
}