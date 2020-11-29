import {CHANGE_MENU_LINK} from '../action-types/index'

export const changeMenuLink = (data) => {
    return {type: CHANGE_MENU_LINK, payload: data}
}