import notify from "./Notify";
import {setLoading} from '../redux/action-creator/index'


export function displayErrorMsg(err, dispatch, customMessage) {
    dispatch(setLoading())
    if (err.response) {
        const {message} = err.response.data
        if (customMessage !== undefined) {
            const customMessage = `User not created! \n ${message}`
            notify('error', customMessage)
        } else {
            notify('error', message)
        }
    } else {
        notify('error', 'Something went wrong, Please refresh the page.')
    }
} 