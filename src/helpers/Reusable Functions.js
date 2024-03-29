
const IsNotEmpty = value => {
    //Returns true if every item in the array returned by the
    //Object.values has an item lenght of more than one
    return Object.values(value).filter(item => typeof item !== 'boolean').every(item => item.length > 0)
}

    //Converts words like 'Not Started' into camelCase e.g. 'notStarted'
    //since the backend only receives camelCase strings in some instances
const converter = (input) => {
    let regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
    let data = input.match(regex)
    
    let result = ""
    if(data !== null) {
        for (let i = 0; i < data.length; i++) {
            let tempStr = data[i].toLowerCase();
            
            if (i !== 0) {
                //Convert first letter to Uppercase( the word is in lowercase )
                tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1)
            }

            result += tempStr
        }
    }
    return result
}

const toggleModal = (dispatch, itemToBeUpdated, setModalShow) => {
    dispatch(itemToBeUpdated(''))
    dispatch(setModalShow())
}

const dispatchUpdateDetails = (id, itemId, item, dispatch, itemToBeUpdated, setModalShow) => {
    if (id === itemId) {
        dispatch(itemToBeUpdated(item))
        dispatch(setModalShow())
    }
}

/**
 * @param  {} e
 * @param  {} users
 * @param  {} dispatch
 * @param  {} userToBeUpdated
 * @param  {} setModalShow
 * Reusable function to update users and projects.
 */
const handleUpdate = (e, items, dispatch, itemToBeUpdated, setModalShow, location) => {
    //Getting the id of the clicked row
    let rowId = e.currentTarget.className.slice(5,29)
    if (location === 'projects') {
        items.map(project => {
            dispatchUpdateDetails(project.id, rowId, project, dispatch, itemToBeUpdated, setModalShow)
            return null
        })
    } else {
        items.results.map(user => {
            dispatchUpdateDetails(user.id, rowId, user, dispatch, itemToBeUpdated, setModalShow)
            return null
        }) 
    }

}

function shallowEquality(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    //checking if the number of keys are the same between the two objects
    if (keys1.length !== keys2.length) {
        return false
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false 
        }
    }
    return true
}

module.exports = {
    IsNotEmpty: IsNotEmpty, 
    converter: converter,
    handleUpdate: handleUpdate,
    toggleModal: toggleModal,
    shallowEquality: shallowEquality
};