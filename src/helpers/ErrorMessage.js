import notify from "./Notify";
import {setLoading} from '../redux/action-creator/index'


export function displayErrorMsg(err, dispatch, customMessage) {
    dispatch(setLoading())
    if (err.response) {
        const {message} = err.response.data
        if (customMessage !== undefined) {
            const custom = `${customMessage} \n ${message}`
            notify('error', custom)
        } else {
            notify('error', message)
        }
    } else {
        notify('error', 'Something went wrong, Please refresh the page.')
    }
} 