import notify from './Notify'
const FormSpree = (sendData, formAction, param) => {

    const data = new FormData()
    for (let key in sendData) {
        data.append(key, sendData[key])
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', formAction);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            notify('success', 'Message sent successfully.')
            //Close the form
            if (param !== undefined) {
                param()
            }
        } else {
            notify('error', 'Message not sent. Please check your internet connection and Try again.')
        }
    };
    xhr.send(data);
}

export default FormSpree;