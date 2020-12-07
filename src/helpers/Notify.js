import { toast } from "react-toastify";

const notify = (data, content) => {
    if (data === 'error') {
        toast.error(content)
    } else if (data === 'success') {
        toast.success(content)
    }
}

export default notify;