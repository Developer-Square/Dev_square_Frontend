const IsNotEmpty = value => {
    //Returns true if every item in the array returned by the
    //Object.values has an item lenght of more than one
    return Object.values(value).every(item => item.length > 0)
}

export default IsNotEmpty;