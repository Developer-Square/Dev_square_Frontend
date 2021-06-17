const IsNotEmpty = value => {
    //Returns true if every item in the array returned by the
    //Object.values has an item lenght of more than one
    return Object.values(value).every(item => item.length > 0)
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

module.exports = {
    IsNotEmpty: IsNotEmpty, 
    converter: converter
};