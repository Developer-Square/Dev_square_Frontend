const IsEmpty = value => {
    const arr = Object.values(value)
    if (arr.map(item => item.length  === 0)) {
        return true
    }
    return false
}

export default IsEmpty;