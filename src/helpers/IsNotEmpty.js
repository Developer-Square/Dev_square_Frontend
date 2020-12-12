const IsNotEmpty = value => {
    //Returns true if every item in the array returned by the
    //Object.values has an item lenght of more than zero
    return Object.values(value).every(item => item.length > 1)
}

export default IsNotEmpty;