import notify from "./Notify";
import {setLoading} from '../redux/action-creator/index'


export function displayErrorMsg(err, dispatch) {
    if (err.response) {
        const {message} = err.response.data
        dispatch(setLoading())
        notify('error', message)
    } else {
        notify('error', 'Something went wrong, Please refresh the page.')
    }
} 