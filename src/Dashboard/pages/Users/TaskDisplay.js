import React, {useEffect, useState} from 'react'

//Own Components
import notify from '../../../helpers/Notify'
import Api from '../../../services/network'
import NeverEndingBox from '../../Reusable Components/NeverEndingBox'


export default function TaskDisplay({usertasks}) {
    const [tasks, setTasks] = useState('')
    const api = new Api()
    let list = []

    useEffect(() => {
        let len = 0;
        if (usertasks !== undefined){
            usertasks.map((task) => {
                api.Tasks().getTask(task)
                .then(res => {
                    if (res.status === 200) {                 
                        list.push(res.data)
                        len += 1
                        //Making sure the mapping is done then putting the final
                        //result in the state
                        if (usertasks.length === len) {
                            setTasks(list)
                        }
                    }
                })
                .catch(err => {
                    if (err.response) {
                        const {message} = err.response.data
                        notify('error', message)
                    } else {
                        notify('error', 'Something went wrong, Please refresh the page.')
                    }
                })
                return null
            })
        }

       // eslint-disable-next-line 
    }, [])

    return (
        <div className="main-card mb-3 card">
            <div className="card-body"><h5 className="card-title">Results</h5>
                <table className="mb-0 table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Descripiton</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tasks !== '' ? tasks.map((task, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{task.description}</td>
                            <td>{task.dueDate.slice(0, 10)}</td>
                            <td>{task.status}</td>
                        </tr>
                        ))
                        :   <tr>
                                <td>
                                    <NeverEndingBox loading={true} />
                                </td>
                            </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
